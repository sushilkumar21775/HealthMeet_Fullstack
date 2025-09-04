import { assets } from '../assets/assets'

const About = () => {
  return (
    <div className='min-h-screen page-transition px-4 sm:px-6 lg:px-8'>

      {/* Hero Section */}
      <div className='text-center pt-16 pb-12 animate-fade-in'>
        <h1 className='text-5xl md:text-6xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent mb-6'>
          ABOUT <span className='bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent'>US</span>
        </h1>
        <div className='w-24 h-1 bg-gradient-to-r from-primary to-primary-dark mx-auto rounded-full'></div>
      </div>

      {/* Main Content */}
      <div className='max-w-7xl mx-auto'>
        <div className='my-16 flex flex-col lg:flex-row gap-16 items-center'>
          <div className='lg:w-1/2 animate-slide-up'>
            <div className='relative group'>
              <img 
                className='w-full max-w-md mx-auto rounded-3xl shadow-2xl group-hover:scale-105 transition-transform duration-700' 
                src={assets.about_image} 
                alt="" 
              />
              <div className='absolute inset-0 bg-gradient-to-br from-primary/20 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500'></div>
            </div>
          </div>
          
          <div className='lg:w-1/2 flex flex-col justify-center gap-8 text-lg text-gray-600 animate-slide-up'>
            <p className='leading-relaxed'>
              Welcome to <span className='text-primary font-semibold'>HealthMeet</span>, your trusted partner in managing your healthcare needs conveniently and efficiently. At HealthMeet, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records.
            </p>
            <p className='leading-relaxed'>
              HealthMeet is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, HealthMeet is here to support you every step of the way.
            </p>
            
            <div className='bg-gradient-to-br from-primary/5 to-purple-50 p-6 rounded-2xl border border-primary/10'>
              <h3 className='text-2xl font-bold text-gray-800 mb-4 flex items-center'>
                <svg className='w-6 h-6 text-primary mr-3' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
                Our Vision
              </h3>
              <p className='leading-relaxed'>
                Our vision at HealthMeet is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className='my-20'>
          <div className='text-center mb-16 animate-fade-in'>
            <h2 className='text-4xl md:text-5xl font-bold text-gray-800 mb-4'>
              WHY <span className='bg-gradient-to-r from-primary to-primary-dark bg-clip-text text-transparent'>CHOOSE US</span>
            </h2>
            <p className='text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed'>
              We combine cutting-edge technology with compassionate care to deliver an unmatched healthcare experience
            </p>
            <div className='w-24 h-1 bg-gradient-to-r from-primary to-primary-dark mx-auto rounded-full mt-6'></div>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 mb-20'>
            <div className='group bg-white border-2 border-gray-100 rounded-3xl px-8 py-12 flex flex-col gap-6 text-center hover:border-primary hover:shadow-2xl hover:bg-gradient-to-br hover:from-primary hover:to-primary-dark hover:text-white transition-all duration-500 cursor-pointer animate-slide-up'>
              <div className='w-16 h-16 bg-gradient-to-br from-primary to-primary-dark rounded-2xl flex items-center justify-center mx-auto group-hover:bg-white/20 transition-all duration-300'>
                <svg className='w-8 h-8 text-white' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className='text-2xl font-bold text-gray-800 group-hover:text-white transition-colors duration-300'>EFFICIENCY</h3>
              <p className='text-gray-600 group-hover:text-white/90 transition-colors duration-300 leading-relaxed'>
                Streamlined appointment scheduling that fits into your busy lifestyle with smart automation and instant confirmations.
              </p>
            </div>

            <div className='group bg-white border-2 border-gray-100 rounded-3xl px-8 py-12 flex flex-col gap-6 text-center hover:border-primary hover:shadow-2xl hover:bg-gradient-to-br hover:from-primary hover:to-primary-dark hover:text-white transition-all duration-500 cursor-pointer animate-slide-up' style={{animationDelay: '200ms'}}>
              <div className='w-16 h-16 bg-gradient-to-br from-accent to-green-400 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-white/20 transition-all duration-300'>
                <svg className='w-8 h-8 text-white' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className='text-2xl font-bold text-gray-800 group-hover:text-white transition-colors duration-300'>CONVENIENCE</h3>
              <p className='text-gray-600 group-hover:text-white/90 transition-colors duration-300 leading-relaxed'>
                Access to a network of trusted healthcare professionals in your area with 24/7 online booking and telemedicine options.
              </p>
            </div>

            <div className='group bg-white border-2 border-gray-100 rounded-3xl px-8 py-12 flex flex-col gap-6 text-center hover:border-primary hover:shadow-2xl hover:bg-gradient-to-br hover:from-primary hover:to-primary-dark hover:text-white transition-all duration-500 cursor-pointer animate-slide-up' style={{animationDelay: '400ms'}}>
              <div className='w-16 h-16 bg-gradient-to-br from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto group-hover:bg-white/20 transition-all duration-300'>
                <svg className='w-8 h-8 text-white' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className='text-2xl font-bold text-gray-800 group-hover:text-white transition-colors duration-300'>PERSONALIZATION</h3>
              <p className='text-gray-600 group-hover:text-white/90 transition-colors duration-300 leading-relaxed'>
                Tailored recommendations and smart reminders to help you stay on top of your health with AI-powered insights.
              </p>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className='bg-gradient-to-br from-primary/5 to-purple-50 rounded-3xl p-12 my-20 animate-fade-in'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8 text-center'>
            <div className='group'>
              <div className='text-4xl md:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300'>10k+</div>
              <div className='text-gray-600 font-medium'>Happy Patients</div>
            </div>
            <div className='group'>
              <div className='text-4xl md:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300'>500+</div>
              <div className='text-gray-600 font-medium'>Expert Doctors</div>
            </div>
            <div className='group'>
              <div className='text-4xl md:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300'>50+</div>
              <div className='text-gray-600 font-medium'>Specialties</div>
            </div>
            <div className='group'>
              <div className='text-4xl md:text-5xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform duration-300'>24/7</div>
              <div className='text-gray-600 font-medium'>Support</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
