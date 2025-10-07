# Aperture Flow 🚀

[![Netlify Status](https://img.shields.io/netlify/your-netlify-site-id)](https://auth-landing-system.netlify.app/)  
[![React](https://img.shields.io/badge/React-17.0.2-blue)](https://reactjs.org/)  
[![License](https://img.shields.io/badge/License-MIT-green)](LICENSE)

[Live Demo on Netlify](https://apertureflow.netlify.app/)

---

## **Project Overview**

A modern, full-stack application built with React.js that provides a secure, seamless user experience. It features comprehensive Signup and Login authentication and a clean, responsive landing page. Post-authentication, users access a fully functional Dashboard for managing personalized tasks, messages, and recent activity.

---

## **Features**

### **Landing Page**
- Responsive hero section  
- Scrollable layout  
- Footer appears at the bottom of content  

### **Signup**
- Full name, email, password, confirm password fields  
- Inline validation errors for invalid input  
- Password must meet strength requirements:  
  - Minimum 8 characters  
  - At least 1 uppercase, 1 lowercase, 1 number, 1 special character  
- Redirects to Dashboard after successful signup  

### **Login**
- Email and password authentication  
- Redirects to Dashboard after successful login  

### **Dashboard**
- Displays personalized user information  
- Quick access cards for tasks, messages, and notifications  
- Recent activity list  
- Logout functionality  

### **Contact Form**
- Name, email, and message fields  
- Inline validation errors  
- Redirects to a Thank You page upon successful submission  

### **Footer**
- footer added on Landing, Dashboard

---

## **Tech Stack**

- **Frontend:** React.js, React Router v6  
- **Styling:** CSS  
- **Deployment:** Netlify  
- **Version Control:** Git / GitHub  

---

## **Installation and Setup**

1. **Clone the repository**  
```bash
git clone https://github.com/yourusername/auth-landing-system.git
cd auth-landing-system

```

2. Install dependencies
```bash
npm install

```

3. Run the development server
```bash
npm start

```

4. Open http://localhost:3000 in your browser.

**Build for Production**
```bash
npm run build

```

Creates an optimized production build ready to deploy (Netlify, Vercel, etc.).


**Project Structure**
```bash
auth-landing-system/
├── public/
├── src/
│   ├── components/     # Reusable components (Footer, Navbar, etc.)
│   ├── pages/          # Pages: Landing, Login, SignUp, Contact, Dashboard, Verification, ThankYou
│   ├── styles/         # CSS files
│   ├── App.js          # Main routing setup
│   └── index.js
├── package.json
└── README.md

```


**Contact**

For questions or feedback, use the contact form on the live site or reach out via GitHub.

