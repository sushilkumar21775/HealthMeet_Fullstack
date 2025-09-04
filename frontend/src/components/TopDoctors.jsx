import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const TopDoctors = () => {

    const navigate = useNavigate()
    const { doctors } = useContext(AppContext)

    return (
        <div className='flex flex-col items-center gap-6 my-20 text-gray-800 md:mx-10'>
            <div className='text-center animate-fade-in'>
                <h1 className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-4'>Top Doctors to Book</h1>
                <p className='sm:w-1/3 mx-auto text-gray-600 text-lg leading-relaxed'>Simply browse through our extensive list of trusted doctors.</p>
                <div className='mt-4 w-24 h-1 bg-gradient-to-r from-primary to-primary-dark mx-auto rounded-full'></div>
            </div>
            
            <div className='w-full grid grid-cols-auto gap-8 pt-8 px-3 sm:px-0'>
                {doctors.slice(0, 10).map((item, index) => (
                    <div 
                        onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0, 0) }} 
                        className='group bg-white border border-gray-200 rounded-2xl overflow-hidden cursor-pointer hover:shadow-card-hover hover:scale-105 transition-all duration-500 hover:border-primary/30 animate-slide-up' 
                        key={index}
                        style={{ animationDelay: `${index * 100}ms` }}
                    >
                        <div className='relative overflow-hidden'>
                            <img className='bg-gradient-to-br from-blue-50 to-purple-50 w-full h-48 object-cover group-hover:scale-110 transition-transform duration-700' src={item.image} alt="" />
                            <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                        </div>
                        
                        <div className='p-6'>
                            <div className={`flex items-center gap-2 text-sm mb-3 ${item.available ? 'text-accent' : "text-gray-500"}`}>
                                <div className={`w-3 h-3 rounded-full ${item.available ? 'bg-accent animate-pulse-gentle' : "bg-gray-400"} relative`}>
                                    {item.available && <div className="absolute inset-0 bg-accent rounded-full animate-ping opacity-75"></div>}
                                </div>
                                <p className='font-medium'>{item.available ? 'Available' : "Not Available"}</p>
                            </div>
                            
                            <h3 className='text-gray-800 text-xl font-semibold mb-2 group-hover:text-primary transition-colors duration-300'>{item.name}</h3>
                            <p className='text-gray-600 text-sm bg-gray-50 px-3 py-1 rounded-full inline-block'>{item.speciality}</p>
                            
                            <div className='mt-4 pt-3 border-t border-gray-100'>
                                <div className='flex items-center justify-between'>
                                    <span className='text-xs text-gray-500'>Book Now</span>
                                    <div className='w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300'>
                                        <svg className='w-4 h-4 text-primary group-hover:text-white transition-colors duration-300' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <button 
                onClick={() => { navigate('/doctors'); scrollTo(0, 0) }} 
                className='bg-gradient-to-r from-primary to-primary-dark text-white px-8 py-4 rounded-full mt-12 font-medium hover:shadow-xl hover:scale-105 transition-all duration-300 group'
            >
                <span className='flex items-center gap-2'>
                    View All Doctors
                    <svg className='w-4 h-4 group-hover:translate-x-1 transition-transform duration-300' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </span>
            </button>
        </div>
    )
}

export default TopDoctors