import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../context/AppContext'
import { useNavigate, useParams } from 'react-router-dom'

const Doctors = () => {

  const { speciality } = useParams()

  const [filterDoc, setFilterDoc] = useState([])
  const [showFilter, setShowFilter] = useState(false)
  const navigate = useNavigate();

  const { doctors } = useContext(AppContext)

  const specialities = [
    'General physician',
    'Gynecologist', 
    'Dermatologist',
    'Pediatricians',
    'Neurologist',
    'Gastroenterologist'
  ]

  const applyFilter = () => {
    if (speciality) {
      setFilterDoc(doctors.filter(doc => doc.speciality === speciality))
    } else {
      setFilterDoc(doctors)
    }
  }

  useEffect(() => {
    applyFilter()
  }, [doctors, speciality])

  return (
    <div className='min-h-screen page-transition'>
      <div className='container-max section-padding'>
        {/* Header */}
        <div className='text-center mb-12 animate-fade-in-up'>
          <h1 className='text-4xl md:text-5xl font-bold mb-4'>
            Browse <span className='gradient-text'>Doctors</span>
          </h1>
          <p className='text-xl text-gray-600 max-w-2xl mx-auto'>
            Find and book appointments with our trusted medical professionals
          </p>
          <div className='flex items-center justify-center gap-4 mt-6'>
            <div className='w-16 h-1 bg-gradient-to-r from-primary to-purple-600 rounded-full'></div>
            <div className='w-3 h-3 bg-primary rounded-full animate-pulse-gentle'></div>
            <div className='w-16 h-1 bg-gradient-to-r from-purple-600 to-primary rounded-full'></div>
          </div>
        </div>

        <div className='flex flex-col lg:flex-row items-start gap-8'>
          {/* Filter Sidebar */}
          <div className='w-full lg:w-80'>
            <button 
              onClick={() => setShowFilter(!showFilter)} 
              className={`lg:hidden w-full py-3 px-4 border-2 rounded-2xl text-sm font-medium transition-all duration-300 mb-4 ${showFilter ? 'bg-primary text-white border-primary' : 'border-gray-300 text-gray-700 hover:border-primary'}`}
            >
              <span className='flex items-center justify-center gap-2'>
                <svg className='w-4 h-4' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.414A1 1 0 013 6.707V4z" />
                </svg>
                Filters
              </span>
            </button>
            
            <div className={`${showFilter ? 'block' : 'hidden lg:block'} bg-white rounded-3xl shadow-lg border border-gray-200 p-6`}>
              <h3 className='text-lg font-bold text-gray-800 mb-6 flex items-center gap-2'>
                <svg className='w-5 h-5 text-primary' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14-7H5m14 14H5" />
                </svg>
                Filter by Speciality
              </h3>
              
              <div className='space-y-3'>
                <button
                  onClick={() => navigate('/doctors')}
                  className={`w-full text-left p-4 rounded-2xl transition-all duration-300 border-2 ${!speciality ? 'bg-gradient-to-r from-primary to-purple-600 text-white border-primary shadow-lg' : 'border-gray-200 hover:border-primary hover:bg-primary/5'}`}
                >
                  <span className='font-medium'>All Specialities</span>
                  {!speciality && (
                    <div className='flex items-center justify-between mt-2'>
                      <span className='text-sm opacity-90'>View all doctors</span>
                      <div className='w-2 h-2 bg-white rounded-full'></div>
                    </div>
                  )}
                </button>
                
                {specialities.map((spec, index) => (
                  <button
                    key={index}
                    onClick={() => navigate(`/doctors/${spec}`)}
                    className={`w-full text-left p-4 rounded-2xl transition-all duration-300 border-2 group ${speciality === spec ? 'bg-gradient-to-r from-primary to-purple-600 text-white border-primary shadow-lg' : 'border-gray-200 hover:border-primary hover:bg-primary/5'}`}
                  >
                    <span className='font-medium'>{spec}</span>
                    <div className={`flex items-center justify-between mt-2 ${speciality === spec ? 'text-white/90' : 'text-gray-500 group-hover:text-primary'}`}>
                      <span className='text-sm'>
                        {doctors.filter(doc => doc.speciality === spec).length} doctors
                      </span>
                      {speciality === spec && (
                        <div className='w-2 h-2 bg-white rounded-full'></div>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Doctors Grid */}
          <div className='flex-1'>
            {filterDoc.length > 0 ? (
              <>
                <div className='flex items-center justify-between mb-8'>
                  <div>
                    <h2 className='text-2xl font-bold text-gray-800'>
                      {speciality ? `${speciality} Specialists` : 'All Doctors'}
                    </h2>
                    <p className='text-gray-600 mt-1'>{filterDoc.length} doctors available</p>
                  </div>
                  
                  <div className='flex items-center gap-2 text-sm text-gray-500'>
                    <svg className='w-4 h-4' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 4V2a1 1 0 011-1h8a1 1 0 011 1v2h3a1 1 0 011 1v1a1 1 0 01-1 1H4a1 1 0 01-1-1V5a1 1 0 011-1h3z" />
                    </svg>
                    <span>Sorted by availability</span>
                  </div>
                </div>
                
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                  {filterDoc.map((item, index) => (
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
              </>
            ) : (
              <div className='text-center py-20 animate-fade-in-up'>
                <div className='w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-6'>
                  <svg className='w-12 h-12 text-gray-400' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.291-1.007-5.824-2.709M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                </div>
                <h3 className='text-2xl font-bold text-gray-800 mb-2'>No doctors found</h3>
                <p className='text-gray-600 mb-6'>
                  {speciality 
                    ? `No ${speciality.toLowerCase()} specialists are currently available.`
                    : 'No doctors are currently available.'
                  }
                </p>
                <button 
                  onClick={() => navigate('/doctors')}
                  className='bg-gradient-to-r from-primary to-purple-600 text-white px-8 py-3 rounded-full font-semibold hover:shadow-xl hover:scale-105 transition-all duration-300'
                >
                  View All Doctors
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Doctors