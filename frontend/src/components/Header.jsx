import { assets } from '../assets/assets'

const Header = () => {
    return (
        <div className='relative overflow-hidden bg-gradient-to-br from-indigo-600 via-purple-600 to-blue-600 rounded-3xl px-6 md:px-10 lg:px-20 shadow-2xl mx-2 my-8'>
            {/* Animated Background Elements */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5"></div>
            <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-white/20 to-transparent rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl animate-pulse-slow"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-gradient-to-tr from-white/15 to-transparent rounded-full translate-y-1/2 -translate-x-1/2 blur-2xl animate-float-slow"></div>
            <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-white/10 rounded-full -translate-x-1/2 -translate-y-1/2 animate-pulse-gentle"></div>
            
            {/* Floating Particles */}
            <div className="absolute top-20 left-20 w-2 h-2 bg-white/30 rounded-full animate-float"></div>
            <div className="absolute top-40 right-32 w-3 h-3 bg-white/20 rounded-full animate-bounce-gentle"></div>
            <div className="absolute bottom-32 left-40 w-1.5 h-1.5 bg-white/40 rounded-full animate-pulse-gentle"></div>
            <div className="absolute bottom-20 right-20 w-2.5 h-2.5 bg-white/25 rounded-full animate-float-slow"></div>
            
            <div className='flex flex-col md:flex-row flex-wrap relative z-10'>
                {/* --------- Header Left --------- */}
                <div className='md:w-1/2 flex flex-col items-start justify-center gap-8 py-16 m-auto md:py-[10vw] md:mb-[-30px]'>
                    <div className="animate-fade-in-up">
                        <h1 className='text-4xl md:text-5xl lg:text-7xl text-white font-bold leading-tight md:leading-tight lg:leading-tight tracking-tight mb-4'>
                            Book Appointment <br /> 
                            <span className="bg-gradient-to-r from-yellow-300 via-pink-300 to-white bg-clip-text text-transparent animate-gradient">
                                With Trusted Doctors
                            </span>
                        </h1>
                        <div className="w-24 h-1 bg-gradient-to-r from-yellow-300 to-pink-300 rounded-full animate-shimmer"></div>
                    </div>
                    
                    <div className='flex flex-col md:flex-row items-center gap-6 text-white/90 text-lg font-light animate-fade-in-left' style={{animationDelay: '0.3s'}}>
                        <div className="relative">
                            <img className='w-36 drop-shadow-2xl hover:scale-110 transition-transform duration-500' src={assets.group_profiles} alt="" />
                            <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full border-2 border-white animate-pulse-gentle flex items-center justify-center">
                                <div className="w-2 h-2 bg-white rounded-full"></div>
                            </div>
                        </div>
                        <div className="text-center md:text-left">
                            <p className="text-xl leading-relaxed mb-2">Simply browse through our extensive list of trusted doctors</p>
                            <p className="text-white/70 text-base">Schedule your appointment hassle-free with just a few clicks</p>
                        </div>
                    </div>
                    
                    <a href='#speciality' className='group flex items-center gap-4 bg-white/95 backdrop-blur-sm px-10 py-5 rounded-full text-gray-700 text-lg font-semibold m-auto md:m-0 hover:bg-white hover:shadow-2xl hover:scale-110 transition-all duration-500 border border-white/30 animate-bounce-gentle shadow-2xl relative overflow-hidden'>
                        <span className="relative z-10">Book appointment</span>
                        <div className="relative z-10">
                            <img className='w-5 group-hover:translate-x-2 transition-transform duration-300' src={assets.arrow_icon} alt="" />
                        </div>
                        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </a>
                </div>

                {/* --------- Header Right --------- */}
                <div className='md:w-1/2 relative'>
                    <div className="relative animate-fade-in-right" style={{animationDelay: '0.5s'}}>
                        <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent rounded-3xl"></div>
                        <img className='w-full md:absolute bottom-0 h-auto rounded-3xl drop-shadow-2xl transform hover:scale-105 transition-transform duration-700 hover:rotate-1' src={assets.header_img} alt="" />
                        
                        {/* Floating UI Elements */}
                        <div className="absolute top-10 right-10 bg-white/20 backdrop-blur-sm rounded-2xl p-4 animate-float">
                            <div className="flex items-center gap-3">
                                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse-gentle"></div>
                                <span className="text-white text-sm font-medium">24/7 Available</span>
                            </div>
                        </div>
                        
                        <div className="absolute bottom-20 left-10 bg-white/20 backdrop-blur-sm rounded-2xl p-4 animate-bounce-gentle">
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center">
                                    <span className="text-white text-xs font-bold">★</span>
                                </div>
                                <div>
                                    <div className="text-white text-sm font-medium">4.9/5 Rating</div>
                                    <div className="text-white/70 text-xs">1000+ Reviews</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header