import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-gray-50 to-white'>

      {/* Modern Header */}
      <div className='text-center pt-16 pb-8'>
        <h1 className='text-4xl md:text-5xl font-bold text-gray-800 mb-4'>
          Get in <span className='text-primary'>Touch</span>
        </h1>
        <p className='text-lg text-gray-600 max-w-2xl mx-auto px-4'>
          We're here to help and answer any questions you might have. We look forward to hearing from you.
        </p>
      </div>

      {/* Main Content */}
      <div className='max-w-7xl mx-auto px-6 py-12'>
        <div className='grid lg:grid-cols-2 gap-16 items-center'>
          
          {/* Left Side - Image */}
          <div className='relative'>
            <div className='relative z-10'>
              <img 
                className='w-full rounded-2xl shadow-2xl' 
                src={assets.contact_image} 
                alt="Healthcare professionals" 
              />
            </div>
            {/* Decorative elements */}
            <div className='absolute -top-4 -left-4 w-24 h-24 bg-primary/20 rounded-full -z-10'></div>
            <div className='absolute -bottom-4 -right-4 w-32 h-32 bg-accent/20 rounded-full -z-10'></div>
          </div>

          {/* Right Side - Contact Info */}
          <div className='space-y-8'>
            
            {/* Office Section */}
            <div className='bg-white p-8 rounded-2xl shadow-lg border border-gray-100'>
              <div className='flex items-center gap-3 mb-4'>
                <div className='w-3 h-3 bg-primary rounded-full'></div>
                <h2 className='text-2xl font-bold text-gray-800'>Our Office</h2>
              </div>
              <div className='space-y-3 text-gray-600'>
                <p className='flex items-center gap-3'>
                  <span className='text-primary'>📍</span>
                  123 Healthcare Avenue<br />
                  Medical District, New York, NY 10001
                </p>
                <p className='flex items-center gap-3'>
                  <span className='text-primary'>📞</span>
                  (555) 123-4567
                </p>
                <p className='flex items-center gap-3'>
                  <span className='text-primary'>✉️</span>
                  info@healthmeet.com
                </p>
              </div>
            </div>

            {/* Careers Section */}
            <div className='bg-gradient-to-r from-primary to-secondary p-8 rounded-2xl text-white'>
              <h2 className='text-2xl font-bold mb-4'>Join Our Team</h2>
              <p className='text-white/90 mb-6 leading-relaxed'>
                Join our team of healthcare professionals and make a difference in people's lives. 
                We're always looking for talented individuals who share our passion for healthcare.
              </p>
              <button className='bg-white text-primary px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1'>
                Explore Opportunities
              </button>
            </div>

          </div>
        </div>
      </div>

    </div>
  )
}

export default Contact
