import { useContext, useEffect, useState, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import axios from 'axios'
import { toast } from 'react-toastify'
import PaymentModal from '../components/PaymentModal'

const MyAppointments = () => {

    const { backendUrl, token } = useContext(AppContext)
    const navigate = useNavigate()

    const [appointments, setAppointments] = useState([])
    const [isProcessing, setIsProcessing] = useState(false)
    const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false)
    const [selectedAppointment, setSelectedAppointment] = useState(null)
    const [loading, setLoading] = useState(true)

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    // Function to format the date eg. ( 20_01_2000 => 20 Jan 2000 )
    const slotDateFormat = (slotDate) => {
        const dateArray = slotDate.split('_')
        return dateArray[0] + " " + months[Number(dateArray[1])] + " " + dateArray[2]
    }

    // Getting User Appointments Data Using API
    const getUserAppointments = useCallback(async () => {
        try {
            setLoading(true)
            const { data } = await axios.get(backendUrl + '/api/user/appointments', { headers: { token } })
            setAppointments(data.appointments.reverse())
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        } finally {
            setLoading(false)
        }
    }, [backendUrl, token])

    // Function to cancel appointment Using API
    const cancelAppointment = async (appointmentId) => {
        try {
            const { data } = await axios.post(backendUrl + '/api/user/cancel-appointment', { appointmentId }, { headers: { token } })

            if (data.success) {
                toast.success(data.message)
                getUserAppointments()
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    const initPay = (order) => {
        const options = {
            key: import.meta.env.VITE_RAZORPAY_KEY_ID,
            amount: order.amount,
            currency: order.currency,
            name: 'Appointment Payment',
            description: "Appointment Payment",
            order_id: order.id,
            receipt: order.receipt,
            handler: async (response) => {
                console.log(response)
                try {
                    const { data } = await axios.post(backendUrl + "/api/user/verifyRazorpay", response, { headers: { token } });
                    if (data.success) {
                        navigate('/my-appointments')
                        getUserAppointments()
                    }
                } catch (error) {
                    console.log(error)
                    toast.error(error.message)
                }
            }
        };
        const rzp = new window.Razorpay(options);
        rzp.open();
    };

    // Function to make payment using razorpay
    const appointmentRazorpay = async (appointmentId) => {
        try {
            const { data } = await axios.post(backendUrl + '/api/user/payment-razorpay', { appointmentId }, { headers: { token } })
            if (data.success) {
                initPay(data.order)
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }

    // Function to make payment using stripe
    const appointmentStripe = async (appointmentId) => {
        try {
            setIsProcessing(true)
            const { data } = await axios.post(backendUrl + '/api/user/payment-stripe', { appointmentId }, { headers: { token } })
            if (data.success) {
                const { session_url } = data
                window.location.replace(session_url)
            } else {
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        } finally {
            setIsProcessing(false)
        }
    }

    // Function to handle payment method selection
    const handlePaymentMethodSelect = async (method, appointmentId) => {
        if (method === 'stripe') {
            await appointmentStripe(appointmentId)
        } else if (method === 'razorpay') {
            await appointmentRazorpay(appointmentId)
        }
        setIsPaymentModalOpen(false)
    }

    // Function to open payment modal
    const openPaymentModal = (appointment) => {
        setSelectedAppointment(appointment)
        setIsPaymentModalOpen(true)
    }

    useEffect(() => {
        if (token) {
            getUserAppointments()
        }
    }, [token, getUserAppointments])

    if (loading) {
        return (
            <div className='min-h-screen flex items-center justify-center'>
                <div className='text-center'>
                    <div className='w-16 h-16 border-4 border-primary/30 border-t-primary rounded-full animate-spin mx-auto mb-4'></div>
                    <p className='text-gray-600'>Loading your appointments...</p>
                </div>
            </div>
        )
    }

    return (
        <div className='min-h-screen page-transition'>
            <div className='container-max section-padding'>
                {/* Header */}
                <div className='text-center mb-12 animate-fade-in-up'>
                    <h1 className='text-4xl md:text-5xl font-bold mb-4'>
                        My <span className='gradient-text'>Appointments</span>
                    </h1>
                    <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
                        Manage your healthcare appointments and track your medical journey
                    </p>
                    <div className='flex items-center justify-center gap-4 mt-6'>
                        <div className='w-16 h-1 bg-gradient-to-r from-primary to-purple-600 rounded-full'></div>
                        <div className='w-3 h-3 bg-primary rounded-full animate-pulse-gentle'></div>
                        <div className='w-16 h-1 bg-gradient-to-r from-purple-600 to-primary rounded-full'></div>
                    </div>
                </div>

                {appointments.length > 0 ? (
                    <div className='space-y-6'>
                        {appointments.map((item, index) => (
                            <div key={index} className='modern-card p-6 hover:shadow-2xl transition-all duration-500 animate-fade-in-up' style={{ animationDelay: `${index * 100}ms` }}>
                                <div className='flex flex-col lg:flex-row gap-6'>
                                    {/* Doctor Image */}
                                    <div className='flex-shrink-0'>
                                        <div className='relative'>
                                            <img className='w-32 h-32 lg:w-40 lg:h-40 object-cover rounded-2xl shadow-lg' src={item.docData.image} alt="" />
                                            <div className='absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg'>
                                                <svg className='w-4 h-4 text-white' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Appointment Details */}
                                    <div className='flex-1 space-y-4'>
                                        <div>
                                            <h3 className='text-2xl font-bold text-gray-800 mb-2'>{item.docData.name}</h3>
                                            <div className='flex items-center gap-3 mb-3'>
                                                <span className='bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium'>
                                                    {item.docData.speciality}
                                                </span>
                                                <span className='text-gray-500 text-sm'>•</span>
                                                <span className='text-gray-600 text-sm font-medium'>₹{item.amount}</span>
                                            </div>
                                        </div>

                                        <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                                            <div className='space-y-2'>
                                                <div className='flex items-center gap-2 text-gray-600'>
                                                    <svg className='w-4 h-4 text-primary' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    </svg>
                                                    <span className='font-medium'>Address:</span>
                                                </div>
                                                <div className='ml-6 text-gray-700'>
                                                    <p>{item.docData.address.line1}</p>
                                                    <p>{item.docData.address.line2}</p>
                                                </div>
                                            </div>

                                            <div className='space-y-2'>
                                                <div className='flex items-center gap-2 text-gray-600'>
                                                    <svg className='w-4 h-4 text-primary' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4h3a1 1 0 011 1v9a2 2 0 01-2 2H5a2 2 0 01-2-2V8a1 1 0 011-1h3z" />
                                                    </svg>
                                                    <span className='font-medium'>Date & Time:</span>
                                                </div>
                                                <div className='ml-6 text-gray-700 font-medium'>
                                                    {slotDateFormat(item.slotDate)} at {item.slotTime}
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className='flex flex-col gap-3 justify-center min-w-48'>
                                        {!item.cancelled && !item.payment && !item.isCompleted && (
                                            <button 
                                                onClick={() => openPaymentModal(item)} 
                                                className='bg-gradient-to-r from-primary to-purple-600 text-white py-3 px-6 rounded-2xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300 relative overflow-hidden group'
                                                disabled={isProcessing}
                                            >
                                                <span className='relative z-10 flex items-center justify-center gap-2'>
                                                    {isProcessing ? (
                                                        <>
                                                            <div className='w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin'></div>
                                                            Processing...
                                                        </>
                                                    ) : (
                                                        <>
                                                            <svg className='w-4 h-4' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
                                                            </svg>
                                                            Pay Online
                                                        </>
                                                    )}
                                                </span>
                                                <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                            </button>
                                        )}

                                        {!item.cancelled && item.payment && !item.isCompleted && (
                                            <div className='bg-gradient-to-r from-green-500 to-emerald-500 text-white py-3 px-6 rounded-2xl font-semibold flex items-center justify-center gap-2'>
                                                <svg className='w-4 h-4' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                                Payment Completed
                                            </div>
                                        )}

                                        {item.isCompleted && (
                                            <div className='bg-gradient-to-r from-blue-500 to-indigo-500 text-white py-3 px-6 rounded-2xl font-semibold flex items-center justify-center gap-2'>
                                                <svg className='w-4 h-4' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                                </svg>
                                                Consultation Completed
                                            </div>
                                        )}

                                        {!item.cancelled && !item.isCompleted && (
                                            <button 
                                                onClick={() => cancelAppointment(item._id)} 
                                                className='border-2 border-red-200 text-red-600 py-3 px-6 rounded-2xl font-medium hover:bg-red-500 hover:text-white hover:border-red-500 transition-all duration-300'
                                            >
                                                Cancel Appointment
                                            </button>
                                        )}

                                        {item.cancelled && (
                                            <div className='bg-red-100 border-2 border-red-200 text-red-600 py-3 px-6 rounded-2xl font-semibold text-center'>
                                                Appointment Cancelled
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className='text-center py-20 animate-fade-in-up'>
                        <div className='w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6'>
                            <svg className='w-12 h-12 text-gray-400' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4h3a1 1 0 011 1v9a2 2 0 01-2 2H5a2 2 0 01-2-2V8a1 1 0 011-1h3z" />
                            </svg>
                        </div>
                        <h3 className='text-2xl font-bold text-gray-800 mb-2'>No appointments yet</h3>
                        <p className='text-gray-600 mb-8'>
                            You haven't booked any appointments yet. Start by finding a doctor that suits your needs.
                        </p>
                        <button 
                            onClick={() => navigate('/doctors')}
                            className='bg-gradient-to-r from-primary to-purple-600 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl hover:scale-105 transition-all duration-300'
                        >
                            Book Your First Appointment
                        </button>
                    </div>
                )}
            </div>
            
            {/* Payment Modal */}
            {isPaymentModalOpen && (
                <PaymentModal
                    isOpen={isPaymentModalOpen}
                    onClose={() => setIsPaymentModalOpen(false)}
                    appointment={selectedAppointment}
                    onPaymentSelect={handlePaymentMethodSelect}
                />
            )}
        </div>
    )
}

export default MyAppointments