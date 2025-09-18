import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const TopDoctors = () => {

    const navigate = useNavigate()
    const { doctors } = useContext(AppContext)

    return (
        <div className='section-padding text-gray-800'>
            <div className='container-max'>
                <div className='text-center animate-fade-in-up mb-16'>
                    <h1 className='text-5xl md:text-6xl font-bold mb-6'>
                        Top <span className='gradient-text'>Doctors</span> to Book
                    </h1>
                    <p className='text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto mb-8'>
                        Simply browse through our extensive list of trusted doctors.
                    </p>
                    <div className='flex items-center justify-center gap-4'>
                        <div className='w-16 h-1 bg-gradient-to-r from-primary to-purple-600 rounded-full'></div>
                        <div className='w-3 h-3 bg-primary rounded-full animate-pulse-gentle'></div>
                        <div className='w-16 h-1 bg-gradient-to-r from-purple-600 to-primary rounded-full'></div>
                    </div>
                </div>
                
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
                    {doctors.slice(0, 12).map((item, index) => (
                        <div 
                            onClick={() => { navigate(`/appointment/${item._id}`); scrollTo(0, 0) }} 
                            className='group modern-card cursor-pointer hover:shadow-2xl hover:scale-105 transition-all duration-500 hover:border-primary/30 animate-fade-in-up relative overflow-hidden' 
                            key={index}
                            style={{ animationDelay: `${index * 100}ms` }}
                        >
                            {/* Card Glow Effect */}
                            <div className='absolute inset-0 bg-gradient-to-br from-primary/0 to-purple-500/0 group-hover:from-primary/5 group-hover:to-purple-500/5 transition-all duration-500'></div>
                            
                            <div className='relative overflow-hidden rounded-t-3xl'>
                                <img className='w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700' src={item.image} alt="" />
                                <div className='absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                                
                                {/* Availability Badge */}
                                <div className={`absolute top-4 left-4 flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium backdrop-blur-sm border ${item.available ? 'bg-green-500/90 text-white border-green-400/50' : "bg-gray-500/90 text-white border-gray-400/50"}`}>
                                    <div className={`w-2 h-2 rounded-full ${item.available ? 'bg-white animate-pulse-gentle' : "bg-gray-300"} relative`}>
                                        {item.available && <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-75"></div>}
                                    </div>
                                    <span>{item.available ? 'Available' : "Busy"}</span>
                                </div>
                                
                                {/* Rating Badge */}
                                <div className='absolute top-4 right-4 flex items-center gap-1 px-2 py-1 rounded-full bg-yellow-500/90 text-white text-sm font-medium backdrop-blur-sm'>
                                    <svg className='w-3 h-3' fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                    </svg>
                                    <span>4.9</span>
                                </div>
                            </div>
                            
                            <div className='p-6 relative z-10'>
                                <h3 className='text-gray-800 text-xl font-bold mb-2 group-hover:text-primary transition-colors duration-300'>
                                    {item.name}
                                </h3>
                                <div className='flex items-center justify-between mb-4'>
                                    <span className='text-gray-600 text-sm bg-gray-100 px-3 py-1 rounded-full font-medium'>
                                        {item.speciality}
                                    </span>
                                    <span className='text-primary font-semibold'>
                                        ₹{item.fees}
                                    </span>
                                </div>
                                
                                {/* Experience & Location */}
                                <div className='flex items-center justify-between text-sm text-gray-500 mb-4'>
                                    <span className='flex items-center gap-1'>
                                        <svg className='w-4 h-4' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                        </svg>
                                        {item.experience}
                                    </span>
                                    <span className='flex items-center gap-1'>
                                        <svg className='w-4 h-4' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        </svg>
                                        Mumbai
                                    </span>
                                </div>
                                
                                <div className='flex items-center justify-between pt-4 border-t border-gray-100'>
                                    <div className='flex items-center gap-2'>
                                        <div className='flex -space-x-1'>
                                            <div className='w-6 h-6 bg-gradient-to-r from-green-400 to-blue-500 rounded-full border-2 border-white'></div>
                                            <div className='w-6 h-6 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full border-2 border-white'></div>
                                            <div className='w-6 h-6 bg-gradient-to-r from-yellow-400 to-red-500 rounded-full border-2 border-white'></div>
                                        </div>
                                        <span className='text-xs text-gray-500'>+120 patients</span>
                                    </div>
                                    
                                    <div className='w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300'>
                                        <svg className='w-5 h-5 text-primary group-hover:text-white transition-colors duration-300' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Hover Overlay */}
                            <div className='absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none'></div>
                        </div>
                    ))}
                </div>

                <div className="text-center mt-16 animate-fade-in-up" style={{animationDelay: '1.2s'}}>
                    <button 
                        onClick={() => { navigate('/doctors'); scrollTo(0, 0) }} 
                        className='group bg-gradient-to-r from-primary via-purple-600 to-primary text-white px-12 py-5 rounded-full text-lg font-semibold hover:shadow-2xl hover:scale-110 transition-all duration-500 relative overflow-hidden'
                    >
                        <span className='relative z-10 flex items-center gap-3'>
                            View All Doctors
                            <svg className='w-5 h-5 group-hover:translate-x-2 transition-transform duration-300' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TopDoctors