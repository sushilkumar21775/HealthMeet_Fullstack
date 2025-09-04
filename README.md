# 🏥 HealthMeet - Complete Healthcare Platform

[![Frontend Live](https://img.shields.io/badge/Frontend-Live-success?style=for-the-badge)](https://healthmeet-frontend-lkwd.onrender.com)
[![Backend Live](https://img.shields.io/badge/Backend-Live-success?style=for-the-badge)](https://healthmeet-backend-x7sz.onrender.com)
[![GitHub](https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github)](https://github.com/sushilkumar21775/HealthMeet_Fullstack)
[![License](https://img.shields.io/badge/License-MIT-blue?style=for-the-badge)](LICENSE)

## 🌟 Overview

HealthMeet is a comprehensive healthcare platform that connects patients with doctors through an intuitive appointment booking system. Built with modern web technologies, it provides a seamless experience for patients, doctors, and administrators.

## 🚀 Live Demo

- **Frontend**: [https://healthmeet-frontend-lkwd.onrender.com](https://healthmeet-frontend-lkwd.onrender.com)
- **Backend API**: [https://healthmeet-backend-x7sz.onrender.com](https://healthmeet-backend-x7sz.onrender.com)
- **Admin Panel**: Coming Soon (Deployment in Progress)

## ✨ Features

### 👥 For Patients
- 🔐 **User Registration & Authentication**
- 👨‍⚕️ **Browse Doctors by Specialty**
- 📅 **Book Appointments**
- 💳 **Multiple Payment Options** (Razorpay, Stripe)
- 📱 **Responsive Design**
- 🔔 **Real-time Notifications**
- 📋 **Appointment History**
- 👤 **Profile Management**

### 👨‍⚕️ For Doctors
- 🏥 **Doctor Dashboard**
- 📊 **Appointment Management**
- 💰 **Earnings Tracking**
- 👥 **Patient Records**
- ⏰ **Availability Management**
- 📈 **Analytics & Reports**

### 🛠️ For Administrators
- 📊 **Complete Admin Dashboard**
- 👨‍⚕️ **Doctor Management**
- 👥 **User Management**
- 📅 **Appointment Oversight**
- 💵 **Payment Tracking**
- 📈 **System Analytics**

## 🛠️ Tech Stack

### Frontend
- **React.js** - UI Library
- **Vite** - Build Tool
- **Tailwind CSS** - Styling
- **Axios** - HTTP Client
- **React Router** - Routing
- **React Toastify** - Notifications

### Backend
- **Node.js** - Runtime Environment
- **Express.js** - Web Framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **Bcrypt** - Password Hashing
- **Cloudinary** - Image Storage
- **Multer** - File Upload

### Payment Integration
- **Razorpay** - Payment Gateway
- **Stripe** - International Payments

## 📁 Project Structure

```
HealthMeet_Fullstack/
├── 📱 frontend/          # Patient-facing application
│   ├── src/
│   ├── public/
│   └── package.json
├── 🏥 admin/            # Admin panel
│   ├── src/
│   ├── public/
│   └── package.json
├── 🔧 backend/          # API server
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   └── server.js
└── 📚 docs/             # Documentation files
```

## 🚀 Quick Start

### Prerequisites
- Node.js (v14 or higher)
- MongoDB
- Git

### 1. Clone the Repository
```bash
git clone https://github.com/sushilkumar21775/HealthMeet_Fullstack.git
cd HealthMeet_Fullstack
```

### 2. Backend Setup
```bash
cd backend
npm install
```

Create `.env` file in backend directory:
```env
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
CLOUDINARY_CLOUD_NAME=your_cloudinary_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
STRIPE_SECRET_KEY=your_stripe_secret_key
```

Start backend server:
```bash
npm start
```
Backend will run on `http://localhost:4000`

### 3. Frontend Setup
```bash
cd ../frontend
npm install
```

Create `.env` file in frontend directory:
```env
VITE_BACKEND_URL=http://localhost:4000
```

Start frontend:
```bash
npm run dev
```
Frontend will run on `http://localhost:5177`

### 4. Admin Panel Setup
```bash
cd ../admin
npm install
```

Create `.env` file in admin directory:
```env
VITE_BACKEND_URL=http://localhost:4000
```

Start admin panel:
```bash
npm run dev
```
Admin panel will run on `http://localhost:5178`

## 🔐 Default Login Credentials

### Admin Login
- **Email**: `admin@example.com`
- **Password**: `greatstack123`

### Demo Doctor Login
- **Email**: `rajesh.sharma@prescripto.com`
- **Password**: `doctor123`

## 📸 Screenshots

| Patient Dashboard | Doctor Panel | Admin Dashboard |
|:-----------------:|:------------:|:---------------:|
| 🏠 Home | 👨‍⚕️ Appointments | 📊 Analytics |
| 🔍 Find Doctors | 📋 Patient Records | 👥 User Management |
| 📅 Book Appointment | 💰 Earnings | 🏥 Doctor Management |

## 🌐 API Endpoints

### User Routes
- `POST /api/user/register` - User registration
- `POST /api/user/login` - User login
- `GET /api/user/profile` - Get user profile
- `POST /api/user/book-appointment` - Book appointment

### Doctor Routes
- `POST /api/doctor/login` - Doctor login
- `GET /api/doctor/appointments` - Get doctor appointments
- `POST /api/doctor/complete-appointment` - Mark appointment complete

### Admin Routes
- `POST /api/admin/login` - Admin login
- `POST /api/admin/add-doctor` - Add new doctor
- `GET /api/admin/doctors` - Get all doctors
- `GET /api/admin/dashboard` - Get dashboard data

## 📱 Mobile Responsiveness

HealthMeet is fully responsive and works seamlessly across all devices:
- 📱 Mobile phones
- 📋 Tablets
- 💻 Desktops
- 🖥️ Large screens

## 🔄 Deployment

### Backend (Deployed on Render)
The backend is already deployed and running on Render:
- **URL**: [https://healthmeet-backend-x7sz.onrender.com](https://healthmeet-backend-x7sz.onrender.com)
- **Status**: ✅ Live

### Frontend (Deployed on Render)
The frontend is now deployed and running on Render:
- **URL**: [https://healthmeet-frontend-lkwd.onrender.com](https://healthmeet-frontend-lkwd.onrender.com)
- **Status**: ✅ Live

### Admin Panel (Coming Soon)
Currently deploying to:
- **Vercel** for admin panel hosting
- **Netlify** as backup option

## 🧪 Testing

### Run Frontend Tests
```bash
cd frontend
npm run test
```

### Run Backend Tests
```bash
cd backend
npm run test
```

### API Testing
Use the provided Postman collection or test endpoints with curl:
```bash
curl -X GET https://healthmeet-backend-x7sz.onrender.com/api/health
```

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create your feature branch**
   ```bash
   git checkout -b feature/AmazingFeature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add some AmazingFeature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/AmazingFeature
   ```
5. **Open a Pull Request**

## 📋 TODO & Roadmap

- [x] 🚀 Deploy Backend to Render ✅
- [x] 🚀 Deploy Frontend to Render ✅  
- [ ] 🚀 Deploy Admin Panel to Vercel/Netlify
- [ ] 📱 Mobile App Development
- [ ] 🔔 Push Notifications
- [ ] 📊 Advanced Analytics
- [ ] 🌍 Multi-language Support
- [ ] 📧 Email Integration
- [ ] 🎯 SEO Optimization

## 🐛 Known Issues

- Frontend and Admin panel deployment in progress
- Some payment gateway features under testing
- Email notifications need SMTP configuration

## 💡 Support & Help

### Documentation
- 📚 [API Documentation](DEPLOYMENT_CHECKLIST.md)
- 🏥 [Doctor Setup Guide](DUMMY_DOCTORS_DATA.md)
- 💳 [Payment Setup](PAYMENT_SETUP_GUIDE.md)
- 🚀 [Hosting Guide](HOSTING_GUIDE.md)

### Get Help
- 📧 **Email**: support@healthmeet.com
- 💬 **Issues**: [GitHub Issues](https://github.com/sushilkumar21775/HealthMeet_Fullstack/issues)
- 📱 **Discord**: [Join our community](https://discord.gg/healthmeet)

## 📜 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Author

**Sushil Kumar**
- GitHub: [@sushilkumar21775](https://github.com/sushilkumar21775)
- LinkedIn: [Sushil Kumar](https://linkedin.com/in/sushilkumar21775)
- Email: sushilkumar21775@gmail.com

## 🙏 Acknowledgments

- Thanks to all contributors who helped make this project better
- Inspired by modern healthcare needs and digital transformation
- Built with ❤️ for the healthcare community

## ⭐ Star History

[![Star History Chart](https://api.star-history.com/svg?repos=sushilkumar21775/HealthMeet_Fullstack&type=Date)](https://star-history.com/#sushilkumar21775/HealthMeet_Fullstack&Date)

---

<div align="center">

**Made with ❤️ by [Sushil Kumar](https://github.com/sushilkumar21775)**

[⬆ Back to Top](#-healthmeet---complete-healthcare-platform)

</div>
