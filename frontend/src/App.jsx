import Navbar from './components/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Doctors from './pages/Doctors'
import Login from './pages/Login'
import About from './pages/About'
import Contact from './pages/Contact'
import Appointment from './pages/Appointment'
import MyAppointments from './pages/MyAppointments'
import MyProfile from './pages/MyProfile'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Verify from './pages/Verify'

const App = () => {
  return (
    <div className='min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/30 relative overflow-hidden'>
      {/* Enhanced Background decorative elements */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-0">
        {/* Primary gradient orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-purple-200/20 via-blue-200/15 to-transparent rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute bottom-20 right-10 w-128 h-128 bg-gradient-to-br from-emerald-200/20 via-blue-200/15 to-transparent rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-br from-rose-200/10 via-amber-200/10 to-transparent rounded-full blur-2xl transform -translate-x-1/2 -translate-y-1/2 animate-rotate-slow"></div>
        
        {/* Secondary accent orbs */}
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-gradient-to-br from-indigo-300/15 to-purple-300/10 rounded-full blur-2xl animate-bounce-gentle"></div>
        <div className="absolute bottom-1/4 left-1/4 w-48 h-48 bg-gradient-to-br from-teal-300/15 to-cyan-300/10 rounded-full blur-xl animate-pulse-gentle"></div>
        
        {/* Floating particles */}
        <div className="absolute top-32 right-32 w-4 h-4 bg-primary/20 rounded-full animate-float"></div>
        <div className="absolute top-64 left-64 w-3 h-3 bg-purple-500/20 rounded-full animate-bounce-gentle"></div>
        <div className="absolute bottom-48 right-48 w-5 h-5 bg-blue-500/20 rounded-full animate-pulse-gentle"></div>
        <div className="absolute bottom-32 left-32 w-2 h-2 bg-emerald-500/30 rounded-full animate-float-slow"></div>
      </div>
      
      <div className="relative z-10">
        <ToastContainer 
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
          toastClassName="modern-card"
        />
        <Navbar />
        <main className='mx-4 sm:mx-[10%]'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/doctors' element={<Doctors />} />
            <Route path='/doctors/:speciality' element={<Doctors />} />
            <Route path='/login' element={<Login />} />
            <Route path='/about' element={<About />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/appointment/:docId' element={<Appointment />} />
            <Route path='/my-appointments' element={<MyAppointments />} />
            <Route path='/my-profile' element={<MyProfile />} />
            <Route path='/verify' element={<Verify />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App