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
    <div className='sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-gray-200/50 shadow-lg'>
      <div className='flex items-center justify-between text-sm py-4 mb-5 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto'>
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
                <li className='py-2 px-1'>HOME</li>
                <div className={`absolute -bottom-1 left-0 ${isActive ? 'w-full' : 'w-0'} h-0.5 bg-gradient-to-r from-primary to-primary-dark transition-all duration-300 group-hover:w-full`}></div>
              </>
            )}
          </NavLink>
          <NavLink to='/doctors' className={({isActive}) => `relative group ${isActive ? 'text-primary' : 'text-gray-700 hover:text-primary'} transition-colors duration-300`}>
            {({isActive}) => (
              <>
                <li className='py-2 px-1'>ALL DOCTORS</li>
                <div className={`absolute -bottom-1 left-0 ${isActive ? 'w-full' : 'w-0'} h-0.5 bg-gradient-to-r from-primary to-primary-dark transition-all duration-300 group-hover:w-full`}></div>
              </>
            )}
          </NavLink>
          <NavLink to='/about' className={({isActive}) => `relative group ${isActive ? 'text-primary' : 'text-gray-700 hover:text-primary'} transition-colors duration-300`}>
            {({isActive}) => (
              <>
                <li className='py-2 px-1'>ABOUT</li>
                <div className={`absolute -bottom-1 left-0 ${isActive ? 'w-full' : 'w-0'} h-0.5 bg-gradient-to-r from-primary to-primary-dark transition-all duration-300 group-hover:w-full`}></div>
              </>
            )}
          </NavLink>
          <NavLink to='/contact' className={({isActive}) => `relative group ${isActive ? 'text-primary' : 'text-gray-700 hover:text-primary'} transition-colors duration-300`}>
            {({isActive}) => (
              <>
                <li className='py-2 px-1'>CONTACT</li>
                <div className={`absolute -bottom-1 left-0 ${isActive ? 'w-full' : 'w-0'} h-0.5 bg-gradient-to-r from-primary to-primary-dark transition-all duration-300 group-hover:w-full`}></div>
              </>
            )}
          </NavLink>
        </ul>

        <div className='flex items-center gap-4'>
          {
            token && userData
              ? <div className='flex items-center gap-3 cursor-pointer group relative'>
                  <div className='relative'>
                    <img className='w-10 h-10 rounded-full object-cover border-2 border-gray-200 group-hover:border-primary transition-colors duration-300' src={userData.image} alt="" />
                    <div className='absolute -top-1 -right-1 w-4 h-4 bg-accent rounded-full border-2 border-white'></div>
                  </div>
                  <div className='hidden sm:block'>
                    <p className='text-sm font-medium text-gray-900'>{userData.name}</p>
                    <p className='text-xs text-gray-500'>Online</p>
                  </div>
                  <img className='w-3 group-hover:rotate-180 transition-transform duration-300' src={assets.dropdown_icon} alt="" />
                  
                  <div className='absolute top-full right-0 pt-3 text-base font-medium text-gray-600 z-20 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300'>
                    <div className='min-w-56 bg-white/95 backdrop-blur-md rounded-xl shadow-glass border border-gray-200/50 overflow-hidden'>
                      <div className='p-2'>
                        <p onClick={() => navigate('/my-profile')} className='flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors duration-200'>
                          <span className='w-2 h-2 bg-primary rounded-full'></span>
                          My Profile
                        </p>
                        <p onClick={() => navigate('/my-appointments')} className='flex items-center gap-3 px-4 py-3 hover:bg-gray-50 rounded-lg cursor-pointer transition-colors duration-200'>
                          <span className='w-2 h-2 bg-accent rounded-full'></span>
                          My Appointments
                        </p>
                        <hr className='my-2 border-gray-200' />
                        <p onClick={logout} className='flex items-center gap-3 px-4 py-3 hover:bg-red-50 hover:text-red-600 rounded-lg cursor-pointer transition-colors duration-200'>
                          <span className='w-2 h-2 bg-red-500 rounded-full'></span>
                          Logout
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              : <button onClick={() => navigate('/login')} className='bg-gradient-to-r from-primary to-primary-dark text-white px-6 py-2.5 rounded-full font-medium hidden md:block hover:shadow-lg hover:scale-105 transition-all duration-300'>
                  Create account
                </button>
          }
          <button onClick={() => setShowMenu(true)} className='w-8 h-8 md:hidden flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors duration-200'>
            <img className='w-6' src={assets.menu_icon} alt="" />
          </button>

          {/* ---- Mobile Menu ---- */}
          <div className={`md:hidden ${showMenu ? 'fixed w-full' : 'h-0 w-0'} right-0 top-0 bottom-0 z-50 overflow-hidden transition-all duration-300`}>
            <div className='h-full bg-white/95 backdrop-blur-md'>
              <div className='flex items-center justify-between px-5 py-6 border-b border-gray-200'>
                <img src={assets.logo} className='w-36' alt="" />
                <button onClick={() => setShowMenu(false)} className='w-8 h-8 flex items-center justify-center rounded-lg hover:bg-gray-100 transition-colors duration-200'>
                  <img src={assets.cross_icon} className='w-6' alt="" />
                </button>
              </div>
              <ul className='flex flex-col gap-2 mt-8 px-5 text-lg font-medium'>
                <NavLink onClick={() => setShowMenu(false)} to='/' className={({isActive}) => `${isActive ? 'bg-primary text-white' : 'text-gray-700'} px-4 py-3 rounded-xl transition-colors duration-200`}>
                  <p>HOME</p>
                </NavLink>
                <NavLink onClick={() => setShowMenu(false)} to='/doctors' className={({isActive}) => `${isActive ? 'bg-primary text-white' : 'text-gray-700'} px-4 py-3 rounded-xl transition-colors duration-200`}>
                  <p>ALL DOCTORS</p>
                </NavLink>
                <NavLink onClick={() => setShowMenu(false)} to='/about' className={({isActive}) => `${isActive ? 'bg-primary text-white' : 'text-gray-700'} px-4 py-3 rounded-xl transition-colors duration-200`}>
                  <p>ABOUT</p>
                </NavLink>
                <NavLink onClick={() => setShowMenu(false)} to='/contact' className={({isActive}) => `${isActive ? 'bg-primary text-white' : 'text-gray-700'} px-4 py-3 rounded-xl transition-colors duration-200`}>
                  <p>CONTACT</p>
                </NavLink>
              </ul>
              
              {!token && (
                <div className='px-5 mt-8'>
                  <button onClick={() => {navigate('/login'); setShowMenu(false)}} className='w-full bg-gradient-to-r from-primary to-primary-dark text-white py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300'>
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