# 🛒 FreshBasket - MERN Grocery E-Commerce App

FreshBasket is a full-stack grocery e-commerce web application built using the MERN stack. It provides a smooth shopping experience with cart management, invoice generation, authentication, and responsive UI.

---

## 🚀 Live Demo

🌐 https://mern-grocery-frontend.vercel.app

---

## 🧩 Tech Stack

### Frontend
- React.js (Vite)
- React Router DOM
- Axios
- Zustand (State Management)
- React Hot Toast
- Custom CSS

### Backend
- Node.js
- Express.js
- MongoDB
- JWT Authentication

### Deployment
- Frontend: Vercel
- Backend: (Render)

---

## ✨ Features

- 🛍️ Browse grocery products
- 🔍 Product search functionality
- 🛒 Add / remove items from cart
- 💰 Auto invoice calculation:
  - Subtotal
  - GST (5%)
  - Delivery charge logic
- ⚡ Skeleton loading UI for better UX
- 🔐 User authentication (Login / Register)
- 🚚 Place order (clears cart automatically)
- 📱 Fully responsive design (mobile + desktop)
- 🌐 API integration with backend
- ⚡ Fast Vite-based frontend build

---

## ⚙️ Installation & Setup

### 1️⃣ Frontend setup
```bash
git clone https://github.com/Santhi025/MernGrocery-Frontend
cd basket
npm install
npm run dev
```
### 2️⃣ Backend setup
```bash
git clone https://github.com/Santhi025/MernGrocery-Backend
cd backend
npm install
npm start
```

## 🌐 Environment Variables

Create a `.env` file in the server directory:

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password
```
## 🔮 Future Improvements

- 💳 Razorpay / Stripe payment gateway
- 📦 Order history tracking
- 🧑‍💼 Admin dashboard for product management
- 🔍 Advanced filtering & sorting
- ❤️ Wishlist feature
- 📊 Analytics dashboard
- 🔔 Real-time notifications
---
## 🎯 Project Motivation

FreshBasket was built to simulate a real-world grocery e-commerce platform using the MERN stack, focusing on cart logic, authentication, and scalable frontend architecture.