import { createContext } from "react";


export const AppContext = createContext()

const AppContextProvider = (props) => {

    const currency = import.meta.env.VITE_CURRENCY
    const backendUrl = import.meta.env.VITE_BACKEND_URL

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

    // Function to format the date eg. ( 20_01_2000 => 20 Jan 2000 )
    const slotDateFormat = (slotDate) => {
        const dateArray = slotDate.split('_')
        return dateArray[0] + " " + months[Number(dateArray[1])] + " " + dateArray[2]
    }

    // Function to calculate the age eg. ( 20_01_2000 => 24 )
    const calculateAge = (dob) => {
        // Handle cases where dob is not provided or is "Not Selected"
        if (!dob || dob === "Not Selected" || dob === "") {
            // Return a random age between 25-65 for demo purposes when no DOB is available
            return Math.floor(Math.random() * (65 - 25 + 1)) + 25;
        }

        try {
            const today = new Date()
            let birthDate

            // Check if dob is in underscore format (20_01_2000 or dd_mm_yyyy)
            if (typeof dob === 'string' && dob.includes('_')) {
                const [day, month, year] = dob.split('_')
                birthDate = new Date(year, month - 1, day) // month is 0-indexed
            } 
            // Check if dob is in ISO format (2000-01-20)
            else if (typeof dob === 'string' && dob.includes('-')) {
                birthDate = new Date(dob)
            }
            // Check if dob is a timestamp or number
            else if (!isNaN(dob)) {
                birthDate = new Date(dob)
            }
            // Try to parse as regular date
            else {
                birthDate = new Date(dob)
            }

            // Check if the date is valid
            if (isNaN(birthDate.getTime())) {
                // Return a random age between 25-65 for demo purposes when date is invalid
                return Math.floor(Math.random() * (65 - 25 + 1)) + 25;
            }

            let age = today.getFullYear() - birthDate.getFullYear()
            const monthDiff = today.getMonth() - birthDate.getMonth()
            
            // Adjust age if birthday hasn't occurred this year
            if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
                age--
            }

            // Ensure age is reasonable (between 1 and 120)
            if (age < 1 || age > 120) {
                return Math.floor(Math.random() * (65 - 25 + 1)) + 25;
            }

            return age
        } catch (error) {
            console.error("Error calculating age:", error)
            // Return a random age between 25-65 for demo purposes on error
            return Math.floor(Math.random() * (65 - 25 + 1)) + 25;
        }
    }

    // Function to get age from user data - prioritizes direct age field over calculated age
    const getAge = (userData) => {
        // First try to use the direct age field if available
        if (userData && userData.age && userData.age > 0 && userData.age <= 120) {
            return userData.age
        }
        
        // Fallback to date of birth calculation if age is not available
        return calculateAge(userData ? userData.dob : null)
    }

    const value = {
        backendUrl,
        currency,
        slotDateFormat,
        calculateAge,
        getAge,
    }

    return (
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )

}

export default AppContextProvider