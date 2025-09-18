import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
    return (
        <div id='speciality' className='section-padding text-gray-800'>
            <div className='container-max'>
                <div className='flex flex-col items-center gap-8 mb-16 animate-fade-in-up'>
                    <div className="text-center">
                        <h1 className='text-5xl md:text-6xl font-bold mb-4'>
                            Find by <span className='gradient-text'>Speciality</span>
                        </h1>
                        <p className='text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto'>
                            Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.
                        </p>
                    </div>
                    <div className='flex items-center gap-4'>
                        <div className='w-16 h-1 bg-gradient-to-r from-primary to-purple-600 rounded-full'></div>
                        <div className='w-3 h-3 bg-primary rounded-full animate-pulse-gentle'></div>
                        <div className='w-16 h-1 bg-gradient-to-r from-purple-600 to-primary rounded-full'></div>
                    </div>
                </div>
                
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 px-4'>
                    {specialityData.map((item, index) => (
                        <Link 
                            to={`/doctors/${item.speciality}`} 
                            onClick={() => scrollTo(0, 0)} 
                            className='group flex flex-col items-center text-center cursor-pointer hover:scale-110 transition-all duration-500 animate-fade-in-up p-6 rounded-3xl hover:bg-gradient-to-br hover:from-primary/5 hover:via-purple-50/50 hover:to-blue-50/50 hover:shadow-2xl relative overflow-hidden'
                            key={index}
                            style={{ animationDelay: `${index * 150}ms` }}
                        >
                            {/* Background Glow Effect */}
                            <div className='absolute inset-0 bg-gradient-to-br from-primary/0 to-purple-500/0 group-hover:from-primary/10 group-hover:to-purple-500/10 rounded-3xl transition-all duration-500'></div>
                            
                            <div className='relative mb-6'>
                                <div className='w-24 sm:w-32 h-24 sm:h-32 bg-gradient-to-br from-primary/10 via-purple-100/50 to-blue-100/50 rounded-3xl flex items-center justify-center group-hover:shadow-2xl transition-all duration-500 group-hover:scale-110 relative overflow-hidden'>
                                    {/* Inner Glow */}
                                    <div className='absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                                    
                                    <img className='w-14 sm:w-20 filter group-hover:scale-110 transition-transform duration-300 relative z-10' src={item.image} alt="" />
                                    
                                    {/* Floating Particles */}
                                    <div className='absolute top-2 right-2 w-2 h-2 bg-primary/30 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-bounce-gentle transition-all duration-300'></div>
                                    <div className='absolute bottom-3 left-3 w-1.5 h-1.5 bg-purple-500/30 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-pulse-gentle transition-all duration-300'></div>
                                </div>
                                
                                {/* Success Checkmark */}
                                <div className='absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-green-400 to-emerald-500 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center shadow-lg'>
                                    <svg className='w-4 h-4 text-white' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                    </svg>
                                </div>
                            </div>
                            
                            <div className="relative z-10">
                                <h3 className='font-semibold text-gray-700 group-hover:text-primary transition-colors duration-300 text-center leading-tight text-lg mb-2'>
                                    {item.speciality}
                                </h3>
                                <div className='w-0 h-1 bg-gradient-to-r from-primary to-purple-600 mt-2 group-hover:w-full transition-all duration-500 rounded-full mx-auto'></div>
                                
                                {/* Hover Description */}
                                <p className='text-sm text-gray-500 opacity-0 group-hover:opacity-100 transition-all duration-300 mt-2 transform translate-y-2 group-hover:translate-y-0'>
                                    Expert care & consultation
                                </p>
                            </div>
                            
                            {/* Hover Arrow */}
                            <div className='absolute bottom-4 right-4 w-6 h-6 bg-primary rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0'>
                                <svg className='w-3 h-3 text-white' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                </svg>
                            </div>
                        </Link>
                    ))}
                </div>
                
                {/* Bottom CTA */}
                <div className="text-center mt-16 animate-fade-in-up" style={{animationDelay: '1s'}}>
                    <div className="inline-flex items-center gap-4 bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-full px-8 py-4 border border-primary/20">
                        <div className="flex -space-x-2">
                            <div className="w-8 h-8 bg-gradient-to-r from-primary to-purple-600 rounded-full border-2 border-white"></div>
                            <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-500 rounded-full border-2 border-white"></div>
                            <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-red-500 rounded-full border-2 border-white"></div>
                        </div>
                        <span className="text-gray-700 font-medium">500+ Specialists Available</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SpecialityMenu