import { assets } from '../assets/assets'

const Header = () => {
    return (
        <div className='relative overflow-hidden bg-gradient-to-br from-purple-start via-blue-start to-emerald-start rounded-3xl px-6 md:px-10 lg:px-20 shadow-2xl mx-2 my-4'>
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-white/10 to-transparent rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-white/10 to-transparent rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl"></div>
            <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-white/5 rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse-gentle"></div>
            
            <div className='flex flex-col md:flex-row flex-wrap relative z-10'>
                {/* --------- Header Left --------- */}
                <div className='md:w-1/2 flex flex-col items-start justify-center gap-6 py-12 m-auto md:py-[10vw] md:mb-[-30px]'>
                    <div className="animate-fade-in">
                        <p className='text-3xl md:text-5xl lg:text-6xl text-white font-bold leading-tight md:leading-tight lg:leading-tight tracking-tight'>
                            Book Appointment <br /> 
                            <span className="bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                                With Trusted Doctors
                            </span>
                        </p>
                    </div>
                    
                    <div className='flex flex-col md:flex-row items-center gap-4 text-white/90 text-sm font-light animate-slide-up'>
                        <img className='w-32 drop-shadow-lg' src={assets.group_profiles} alt="" />
                        <p className="text-base leading-relaxed">Simply browse through our extensive list of trusted doctors, <br className='hidden sm:block' /> schedule your appointment hassle-free.</p>
                    </div>
                    
                    <a href='#speciality' className='group flex items-center gap-3 bg-white/95 backdrop-blur-sm px-8 py-4 rounded-full text-gray-700 text-sm font-semibold m-auto md:m-0 hover:bg-white hover:shadow-2xl hover:scale-105 transition-all duration-500 border border-white/30 animate-bounce-gentle shadow-xl'>
                        <span>Book appointment</span>
                        <img className='w-4 group-hover:translate-x-1 transition-transform duration-300' src={assets.arrow_icon} alt="" />
                    </a>
                </div>

                {/* --------- Header Right --------- */}
                <div className='md:w-1/2 relative'>
                    <div className="relative">
                        <img className='w-full md:absolute bottom-0 h-auto rounded-2xl drop-shadow-2xl transform hover:scale-105 transition-transform duration-700' src={assets.header_img} alt="" />
                        <div className="absolute inset-0 bg-gradient-to-t from-white/10 to-transparent rounded-2xl"></div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header