import { specialityData } from '../assets/assets'
import { Link } from 'react-router-dom'

const SpecialityMenu = () => {
    return (
        <div id='speciality' className='py-20 text-gray-800'>
            <div className='flex flex-col items-center gap-6 mb-12 animate-fade-in'>
                <h1 className='text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent'>Find by Speciality</h1>
                <p className='sm:w-1/3 text-center text-lg text-gray-600 leading-relaxed'>Simply browse through our extensive list of trusted doctors, schedule your appointment hassle-free.</p>
                <div className='w-24 h-1 bg-gradient-to-r from-primary to-primary-dark rounded-full'></div>
            </div>
            
            <div className='flex justify-center gap-6 pt-8 w-full overflow-x-auto pb-4 px-4'>
                {specialityData.map((item, index) => (
                    <Link 
                        to={`/doctors/${item.speciality}`} 
                        onClick={() => scrollTo(0, 0)} 
                        className='group flex flex-col items-center text-sm cursor-pointer flex-shrink-0 min-w-[120px] hover:scale-105 transition-all duration-500 animate-slide-up p-4 rounded-2xl hover:bg-gradient-to-br hover:from-primary/5 hover:to-purple-50'
                        key={index}
                        style={{ animationDelay: `${index * 100}ms` }}
                    >
                        <div className='relative mb-4'>
                            <div className='w-20 sm:w-28 h-20 sm:h-28 bg-gradient-to-br from-primary/10 to-purple-100 rounded-2xl flex items-center justify-center group-hover:shadow-lg transition-all duration-500 group-hover:scale-110'>
                                <img className='w-12 sm:w-16 filter group-hover:scale-110 transition-transform duration-300' src={item.image} alt="" />
                            </div>
                            <div className='absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-accent to-green-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
                                <svg className='w-3 h-3 text-white' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                </svg>
                            </div>
                        </div>
                        <p className='font-medium text-gray-700 group-hover:text-primary transition-colors duration-300 text-center leading-tight'>{item.speciality}</p>
                        <div className='w-0 h-0.5 bg-primary mt-2 group-hover:w-full transition-all duration-300 rounded-full'></div>
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default SpecialityMenu