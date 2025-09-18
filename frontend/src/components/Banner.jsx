import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {

    const navigate = useNavigate()

    return (
        <div className='relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-600 rounded-3xl px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10 shadow-2xl'>
            {/* Animated Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-white/15 to-transparent rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-white/15 to-transparent rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl animate-float-slow"></div>
            <div className="absolute top-1/2 left-1/3 w-32 h-32 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse-gentle"></div>
            
            {/* Floating Elements */}
            <div className="absolute top-16 left-16 w-3 h-3 bg-white/40 rounded-full animate-bounce-gentle"></div>
            <div className="absolute top-32 right-24 w-2 h-2 bg-white/30 rounded-full animate-float"></div>
            <div className="absolute bottom-24 left-32 w-4 h-4 bg-white/20 rounded-full animate-pulse-gentle"></div>
            <div className="absolute bottom-16 right-16 w-2.5 h-2.5 bg-white/35 rounded-full animate-bounce-gentle"></div>
            
            <div className='flex relative z-10'>
                {/* ------- Left Side ------- */}
                <div className='flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5'>
                    <div className='text-xl sm:text-2xl md:text-3xl lg:text-6xl font-bold text-white animate-fade-in-up'>
                        <p className='leading-tight mb-4'>Book Appointment</p>
                        <p className='bg-gradient-to-r from-yellow-300 via-pink-300 to-white bg-clip-text text-transparent animate-gradient'>
                            With 100+ Trusted Doctors
                        </p>
                    </div>
                    
                    <p className='text-white/90 text-lg mt-8 mb-10 leading-relaxed animate-fade-in-left max-w-lg' style={{animationDelay: '0.3s'}}>
                        Join thousands of patients who trust our platform for quality healthcare. 
                        Experience seamless booking and expert medical care.
                    </p>
                    
                    {/* Stats */}
                    <div className='flex items-center gap-8 mb-10 animate-fade-in-up' style={{animationDelay: '0.5s'}}>
                        <div className='text-center'>
                            <div className='text-2xl font-bold text-white'>500+</div>
                            <div className='text-white/70 text-sm'>Doctors</div>
                        </div>
                        <div className='w-px h-12 bg-white/30'></div>
                        <div className='text-center'>
                            <div className='text-2xl font-bold text-white'>10k+</div>
                            <div className='text-white/70 text-sm'>Patients</div>
                        </div>
                        <div className='w-px h-12 bg-white/30'></div>
                        <div className='text-center'>
                            <div className='text-2xl font-bold text-white'>4.9★</div>
                            <div className='text-white/70 text-sm'>Rating</div>
                        </div>
                    </div>
                    
                    <button 
                        onClick={() => { navigate('/login'); scrollTo(0, 0) }} 
                        className='group bg-white/95 backdrop-blur-sm text-gray-700 px-10 py-5 rounded-full font-semibold hover:bg-white hover:shadow-2xl hover:scale-110 transition-all duration-500 border border-white/20 animate-bounce-gentle relative overflow-hidden'
                        style={{animationDelay: '0.7s'}}
                    >
                        <span className='flex items-center gap-3 relative z-10'>
                            Create account
                            <svg className='w-5 h-5 group-hover:translate-x-2 transition-transform duration-300' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </span>
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </button>
                </div>

                {/* ------- Right Side ------- */}
                <div className='hidden md:block md:w-1/2 lg:w-[370px] relative'>
                    <div className="relative animate-fade-in-right" style={{animationDelay: '0.4s'}}>
                        <img className='w-full absolute bottom-0 right-0 max-w-md drop-shadow-2xl transform hover:scale-105 transition-transform duration-700' src={assets.appointment_img} alt="" />
                        <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent"></div>
                        
                        {/* Floating UI Elements */}
                        <div className="absolute top-20 left-10 bg-white/20 backdrop-blur-sm rounded-2xl p-4 animate-float">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-white text-sm font-medium">Verified Doctors</div>
                                    <div className="text-white/70 text-xs">100% Certified</div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="absolute bottom-32 right-10 bg-white/20 backdrop-blur-sm rounded-2xl p-4 animate-bounce-gentle">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
                                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="text-white text-sm font-medium">Quick Booking</div>
                                    <div className="text-white/70 text-xs">Same Day Available</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner