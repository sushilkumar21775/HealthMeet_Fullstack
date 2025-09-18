import { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { NavLink, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'

const Navbar = () => {

  const navigate = useNavigate()

  const [showMenu, setShowMenu] = useState(false)
  const { token, setToken, userData } = useContext(AppContext)

  const logout = () => {
    localStorage.removeItem('token')
    setToken(false)
    navigate('/login')
  }

  return (
    <div className='sticky top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-lg'>
      <div className='flex items-center justify-between text-sm py-4 mb-5 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto'>
        <img 
          onClick={() => navigate('/')} 
          className='w-44 cursor-pointer hover:scale-105 transition-transform duration-300' 
          src={assets.logo} 
          alt="HealthMeet Logo"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = '/vite.svg'; // Fallback image
          }}
        />
        
        <ul className='md:flex items-center gap-8 font-medium hidden'>
          <NavLink to='/' className={({isActive}) => `relative group ${isActive ? 'text-primary' : 'text-gray-700 hover:text-primary'} transition-colors duration-300`}>
            {({isActive}) => (
              <>
                <li className='py-2 px-1 font-semibold'>HOME</li>
                <div className={`absolute -bottom-1 left-0 ${isActive ? 'w-full' : 'w-0'} h-0.5 bg-gradient-to-r from-primary to-purple-600 transition-all duration-300 group-hover:w-full rounded-full`}></div>
              </>
            )}
          </NavLink>
          <NavLink to='/doctors' className={({isActive}) => `relative group ${isActive ? 'text-primary' : 'text-gray-700 hover:text-primary'} transition-colors duration-300`}>
            {({isActive}) => (
              <>
                <li className='py-2 px-1 font-semibold'>ALL DOCTORS</li>
                <div className={`absolute -bottom-1 left-0 ${isActive ? 'w-full' : 'w-0'} h-0.5 bg-gradient-to-r from-primary to-purple-600 transition-all duration-300 group-hover:w-full rounded-full`}></div>
              </>
            )}
          </NavLink>
          <NavLink to='/about' className={({isActive}) => `relative group ${isActive ? 'text-primary' : 'text-gray-700 hover:text-primary'} transition-colors duration-300`}>
            {({isActive}) => (
              <>
                <li className='py-2 px-1 font-semibold'>ABOUT</li>
                <div className={`absolute -bottom-1 left-0 ${isActive ? 'w-full' : 'w-0'} h-0.5 bg-gradient-to-r from-primary to-purple-600 transition-all duration-300 group-hover:w-full rounded-full`}></div>
              </>
            )}
          </NavLink>
          <NavLink to='/contact' className={({isActive}) => `relative group ${isActive ? 'text-primary' : 'text-gray-700 hover:text-primary'} transition-colors duration-300`}>
            {({isActive}) => (
              <>
                <li className='py-2 px-1 font-semibold'>CONTACT</li>
                <div className={`absolute -bottom-1 left-0 ${isActive ? 'w-full' : 'w-0'} h-0.5 bg-gradient-to-r from-primary to-purple-600 transition-all duration-300 group-hover:w-full rounded-full`}></div>
              </>
            )}
          </NavLink>
        </ul>

        <div className='flex items-center gap-4'>
          {
            token && userData
              ? <div className='flex items-center gap-3 cursor-pointer group relative'>
                  <div className='relative'>
                    <img className='w-12 h-12 rounded-full object-cover border-2 border-gray-200 group-hover:border-primary transition-colors duration-300 shadow-lg' src={userData.image} alt="" />
                    <div className='absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white animate-pulse-gentle'></div>
                  </div>
                  <div className='hidden sm:block'>
                    <p className='text-sm font-semibold text-gray-900'>{userData.name}</p>
                    <p className='text-xs text-green-600 flex items-center gap-1'>
                      <div className='w-2 h-2 bg-green-500 rounded-full'></div>
                      Online
                    </p>
                  </div>
                  <img className='w-3 group-hover:rotate-180 transition-transform duration-300' src={assets.dropdown_icon} alt="" />
                  
                  <div className='absolute top-full right-0 pt-3 text-base font-medium text-gray-600 z-20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300'>
                    <div className='min-w-56 bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-gray-200/50 overflow-hidden'>
                      <div className='p-2'>
                        <p onClick={() => navigate('/my-profile')} className='flex items-center gap-3 px-4 py-3 hover:bg-gradient-to-r hover:from-primary/10 hover:to-purple-500/10 rounded-xl cursor-pointer transition-all duration-200 group/item'>
                          <div className='w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center group-hover/item:bg-primary group-hover/item:scale-110 transition-all duration-200'>
                            <svg className='w-4 h-4 text-primary group-hover/item:text-white' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                            </svg>
                          </div>
                          <span className='group-hover/item:text-primary transition-colors duration-200'>My Profile</span>
                        </p>
                        <p onClick={() => navigate('/my-appointments')} className='flex items-center gap-3 px-4 py-3 hover:bg-gradient-to-r hover:from-blue-500/10 hover:to-purple-500/10 rounded-xl cursor-pointer transition-all duration-200 group/item'>
                          <div className='w-8 h-8 bg-blue-500/10 rounded-full flex items-center justify-center group-hover/item:bg-blue-500 group-hover/item:scale-110 transition-all duration-200'>
                            <svg className='w-4 h-4 text-blue-500 group-hover/item:text-white' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3a1 1 0 011-1h6a1 1 0 011 1v4h3a1 1 0 011 1v9a2 2 0 01-2 2H5a2 2 0 01-2-2V8a1 1 0 011-1h3z" />
                            </svg>
                          </div>
                          <span className='group-hover/item:text-blue-500 transition-colors duration-200'>My Appointments</span>
                        </p>
                        <hr className='my-2 border-gray-200' />
                        <p onClick={logout} className='flex items-center gap-3 px-4 py-3 hover:bg-gradient-to-r hover:from-red-500/10 hover:to-pink-500/10 rounded-xl cursor-pointer transition-all duration-200 group/item'>
                          <div className='w-8 h-8 bg-red-500/10 rounded-full flex items-center justify-center group-hover/item:bg-red-500 group-hover/item:scale-110 transition-all duration-200'>
                            <svg className='w-4 h-4 text-red-500 group-hover/item:text-white' fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                            </svg>
                          </div>
                          <span className='group-hover/item:text-red-500 transition-colors duration-200'>Logout</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              : <button onClick={() => navigate('/login')} className='bg-gradient-to-r from-primary via-purple-600 to-primary text-white px-8 py-3 rounded-full font-semibold hidden md:block hover:shadow-2xl hover:scale-105 transition-all duration-300 relative overflow-hidden group'>
                  <span className='relative z-10'>Create account</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
          }
          <button onClick={() => setShowMenu(true)} className='w-10 h-10 md:hidden flex items-center justify-center rounded-xl hover:bg-gray-100 transition-colors duration-200 border border-gray-200'>
            <img className='w-6' src={assets.menu_icon} alt="" />
          </button>

          {/* ---- Mobile Menu ---- */}
          <div className={`md:hidden ${showMenu ? 'fixed w-full' : 'h-0 w-0'} right-0 top-0 bottom-0 z-50 overflow-hidden transition-all duration-300`}>
            <div className='h-full bg-white/95 backdrop-blur-md'>
              <div className='flex items-center justify-between px-5 py-6 border-b border-gray-200'>
                <img src={assets.logo} className='w-36' alt="" />
                <button onClick={() => setShowMenu(false)} className='w-10 h-10 flex items-center justify-center rounded-xl hover:bg-gray-100 transition-colors duration-200'>
                  <img src={assets.cross_icon} className='w-6' alt="" />
                </button>
              </div>
              <ul className='flex flex-col gap-2 mt-8 px-5 text-lg font-semibold'>
                <NavLink onClick={() => setShowMenu(false)} to='/' className={({isActive}) => `${isActive ? 'bg-gradient-to-r from-primary to-purple-600 text-white' : 'text-gray-700 hover:bg-gray-100'} px-4 py-4 rounded-2xl transition-all duration-200`}>
                  <p>HOME</p>
                </NavLink>
                <NavLink onClick={() => setShowMenu(false)} to='/doctors' className={({isActive}) => `${isActive ? 'bg-gradient-to-r from-primary to-purple-600 text-white' : 'text-gray-700 hover:bg-gray-100'} px-4 py-4 rounded-2xl transition-all duration-200`}>
                  <p>ALL DOCTORS</p>
                </NavLink>
                <NavLink onClick={() => setShowMenu(false)} to='/about' className={({isActive}) => `${isActive ? 'bg-gradient-to-r from-primary to-purple-600 text-white' : 'text-gray-700 hover:bg-gray-100'} px-4 py-4 rounded-2xl transition-all duration-200`}>
                  <p>ABOUT</p>
                </NavLink>
                <NavLink onClick={() => setShowMenu(false)} to='/contact' className={({isActive}) => `${isActive ? 'bg-gradient-to-r from-primary to-purple-600 text-white' : 'text-gray-700 hover:bg-gray-100'} px-4 py-4 rounded-2xl transition-all duration-200`}>
                  <p>CONTACT</p>
                </NavLink>
              </ul>
              
              {!token && (
                <div className='px-5 mt-8'>
                  <button onClick={() => {navigate('/login'); setShowMenu(false)}} className='w-full bg-gradient-to-r from-primary via-purple-600 to-primary text-white py-4 rounded-2xl font-semibold hover:shadow-2xl transition-all duration-300'>
                    Create account
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar