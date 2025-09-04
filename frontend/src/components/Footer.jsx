import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <footer className='bg-gradient-to-br from-gray-50 to-gray-100 border-t border-gray-200 relative overflow-hidden'>
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent"></div>
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/3 rounded-full -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/3 rounded-full translate-y-1/2 -translate-x-1/2"></div>
      
      <div className='relative z-10'>
        <div className='max-w-7xl mx-auto px-6 lg:px-8'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12 py-16'>
            
            {/* Company Info */}
            <div className='lg:col-span-2'>
              <img className='mb-6 w-44' src={assets.logo} alt="HealthMeet" />
              <p className='text-gray-600 leading-relaxed text-base mb-8 max-w-lg'>
                HealthMeet is a comprehensive healthcare management platform that revolutionizes the way patients connect with medical professionals. We provide seamless appointment scheduling, secure patient records management, and access to a network of certified healthcare providers.
              </p>
              
              {/* Social Media */}
              <div className='flex space-x-4'>
                <div className='w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer group'>
                  <svg className='w-5 h-5 text-primary group-hover:text-white group-hover:scale-110 transition-transform duration-300' fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </div>
                <div className='w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer group'>
                  <svg className='w-5 h-5 text-primary group-hover:text-white group-hover:scale-110 transition-transform duration-300' fill="currentColor" viewBox="0 0 24 24">
                    <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                  </svg>
                </div>
                <div className='w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer group'>
                  <svg className='w-5 h-5 text-primary group-hover:text-white group-hover:scale-110 transition-transform duration-300' fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </div>
                <div className='w-10 h-10 bg-primary/10 rounded-full flex items-center justify-center hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer group'>
                  <svg className='w-5 h-5 text-primary group-hover:text-white group-hover:scale-110 transition-transform duration-300' fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.219-5.188 1.219-5.188s-.31-.619-.31-1.538c0-1.448.84-2.518 1.887-2.518.89 0 1.319.668 1.319 1.466 0 .896-.569 2.219-.859 3.449-.244 1.029.515 1.871 1.530 1.871 1.836 0 3.065-2.310 3.065-5.044 0-2.086-1.45-3.647-4.084-3.647-2.966 0-4.794 2.183-4.794 4.615 0 .824.246 1.41.595 1.843.166.197.19.277.129.505-.044.166-.141.562-.182.719-.061.243-.249.297-.574.162-1.299-.465-1.947-1.726-1.947-3.126 0-2.523 2.13-5.565 6.35-5.565 3.453 0 5.725 2.479 5.725 5.124 0 3.514-1.947 6.177-4.824 6.177-.969 0-1.888-.546-2.202-1.176l-.548 2.086c-.196.746-.726 1.683-1.115 2.264.84.26 1.737.403 2.669.403 6.624 0 11.99-5.367 11.99-11.987C24.007 5.367 18.641.001 12.017.001z"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className='text-xl font-bold mb-6 text-gray-800'>Company</h3>
              <ul className='space-y-3'>
                <li className='hover:text-primary transition-colors duration-300 cursor-pointer flex items-center group'>
                  <span className='w-1.5 h-1.5 bg-primary rounded-full mr-3 group-hover:scale-150 transition-transform duration-300'></span>
                  <span className='text-gray-600 group-hover:text-primary'>Home</span>
                </li>
                <li className='hover:text-primary transition-colors duration-300 cursor-pointer flex items-center group'>
                  <span className='w-1.5 h-1.5 bg-primary rounded-full mr-3 group-hover:scale-150 transition-transform duration-300'></span>
                  <span className='text-gray-600 group-hover:text-primary'>About us</span>
                </li>
                <li className='hover:text-primary transition-colors duration-300 cursor-pointer flex items-center group'>
                  <span className='w-1.5 h-1.5 bg-primary rounded-full mr-3 group-hover:scale-150 transition-transform duration-300'></span>
                  <span className='text-gray-600 group-hover:text-primary'>Services</span>
                </li>
                <li className='hover:text-primary transition-colors duration-300 cursor-pointer flex items-center group'>
                  <span className='w-1.5 h-1.5 bg-primary rounded-full mr-3 group-hover:scale-150 transition-transform duration-300'></span>
                  <span className='text-gray-600 group-hover:text-primary'>Privacy policy</span>
                </li>
                <li className='hover:text-primary transition-colors duration-300 cursor-pointer flex items-center group'>
                  <span className='w-1.5 h-1.5 bg-primary rounded-full mr-3 group-hover:scale-150 transition-transform duration-300'></span>
                  <span className='text-gray-600 group-hover:text-primary'>Careers</span>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className='text-xl font-bold mb-6 text-gray-800'>Get in Touch</h3>
              <ul className='space-y-4'>
                <li className='flex items-start group'>
                  <svg className='w-5 h-5 text-primary mr-3 mt-0.5 group-hover:scale-110 transition-transform duration-300' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <span className='text-gray-600'>+1 (555) 123-4567</span>
                </li>
                <li className='flex items-start group'>
                  <svg className='w-5 h-5 text-primary mr-3 mt-0.5 group-hover:scale-110 transition-transform duration-300' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className='text-gray-600'>support@healthmeet.com</span>
                </li>
                <li className='flex items-start group'>
                  <svg className='w-5 h-5 text-primary mr-3 mt-0.5 group-hover:scale-110 transition-transform duration-300' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <div className='text-gray-600'>
                    <p>123 Healthcare Ave</p>
                    <p>Medical District, CA 90210</p>
                  </div>
                </li>
              </ul>
              
              <div className='mt-6 p-4 bg-primary/5 rounded-xl border border-primary/10'>
                <p className='text-sm font-medium text-primary mb-2'>Office Hours</p>
                <p className='text-sm text-gray-600'>
                  Mon-Fri: 8:00 AM - 8:00 PM<br/>
                  Sat-Sun: 9:00 AM - 6:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className='border-t border-gray-200 py-8'>
            <div className='flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0'>
              <p className='text-sm text-gray-500'>
                © 2024 HealthMeet Corporation. All rights reserved. | Licensed Healthcare Technology Provider
              </p>
              <div className='flex space-x-6 text-sm text-gray-500'>
                <span className='hover:text-primary transition-colors duration-300 cursor-pointer'>Terms of Service</span>
                <span className='hover:text-primary transition-colors duration-300 cursor-pointer'>Privacy Policy</span>
                <span className='hover:text-primary transition-colors duration-300 cursor-pointer'>Cookie Policy</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
