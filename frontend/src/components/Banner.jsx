import { assets } from '../assets/assets'
import { useNavigate } from 'react-router-dom'

const Banner = () => {

    const navigate = useNavigate()

    return (
        <div className='relative overflow-hidden bg-gradient-to-br from-emerald-start via-blue-start to-purple-start rounded-3xl px-6 sm:px-10 md:px-14 lg:px-12 my-20 md:mx-10 shadow-2xl'>
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5"></div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-white/10 to-transparent rounded-full -translate-y-1/2 translate-x-1/2 blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-white/10 to-transparent rounded-full translate-y-1/2 -translate-x-1/2 blur-xl"></div>
            <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse-gentle"></div>
            
            <div className='flex relative z-10'>
                {/* ------- Left Side ------- */}
                <div className='flex-1 py-8 sm:py-10 md:py-16 lg:py-24 lg:pl-5'>
                    <div className='text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-white animate-slide-up'>
                        <p className='leading-tight'>Book Appointment</p>
                        <p className='mt-4 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent'>With 100+ Trusted Doctors</p>
                    </div>
                    <p className='text-white/90 text-lg mt-6 mb-8 leading-relaxed animate-fade-in'>
                        Join thousands of patients who trust our platform for quality healthcare
                    </p>
                    <button 
                        onClick={() => { navigate('/login'); scrollTo(0, 0) }} 
                        className='group bg-white/95 backdrop-blur-sm text-gray-700 px-8 py-4 rounded-full mt-6 font-medium hover:bg-white hover:shadow-xl hover:scale-105 transition-all duration-500 border border-white/20 animate-bounce-gentle'
                    >
                        <span className='flex items-center gap-2'>
                            Create account
                            <svg className='w-4 h-4 group-hover:translate-x-1 transition-transform duration-300' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                        </span>
                    </button>
                </div>

                {/* ------- Right Side ------- */}
                <div className='hidden md:block md:w-1/2 lg:w-[370px] relative'>
                    <div className="relative">
                        <img className='w-full absolute bottom-0 right-0 max-w-md drop-shadow-2xl transform hover:scale-105 transition-transform duration-700' src={assets.appointment_img} alt="" />
                        <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner