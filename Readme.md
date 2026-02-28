#live-link-https://deluxe-tulumba-7c7120.netlify.app/dashboard
# 📊 Excel Analysis Hub

Excel Analysis Hub is a full-stack platform that empowers users to unlock the full potential of their spreadsheets. Built with the MERN stack and powered by advanced AI, this platform allows users to upload Excel files, generate data summaries, visualize insights dynamically, and even ask AI to provide detailed natural-language analysis.

## ✨ Features

- **Secure Authentication**: User sign-up, login, and profile management secured with JWT.
- **Excel Uploads**: Easily upload `.xls` and `.xlsx` files straight from your browser.
- **Dynamic Dashboards**: Interactive UI for discovering insights, viewing upload history, and visualizing trends.
- **AI-Powered Insights**: Integrated with Groq LLM to instantly summarize datasets, detect anomalies, provide specific metric insights, and suggest chart ideas.
- **Data Privacy**: Automatic cleanup of uploaded files off the server once AI analysis completes.
- **Responsive Design**: A sleek, modern user interface built using React and styled for all devices.

## 🛠️ Technology Stack

**Frontend:**
- React (Vite)
- React Router DOM
- React ChartJS / React Google Charts
- Tailwind CSS

**Backend:**
- Node.js & Express.js
- MongoDB & Mongoose
- JSON Web Tokens (JWT) & bcryptjs for auth
- Multer (File Handling)
- xlsx (Excel Parsing)
- Groq SDK (AI Integration)

## 🚀 Getting Started

### Prerequisites
- Node.js (v18 or higher)
- MongoDB Database (Local or MongoDB Atlas)
- Groq API Key (You can get one from the [Groq Console](https://console.groq.com/))

### Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/PERUGUMANOJ/Excel-analysis-platform.git
   cd Excel-Analysis

Here is the raw text, ready to be copied and pasted directly:

📊 Excel Analysis Hub
Excel Analysis Hub is a full-stack platform that empowers users to unlock the full potential of their spreadsheets. Built with the MERN stack and powered by advanced AI, this platform allows users to upload Excel files, generate data summaries, visualize insights dynamically, and even ask AI to provide detailed natural-language analysis.

✨ Features
Secure Authentication: User sign-up, login, and profile management secured with JWT.
Excel Uploads: Easily upload .xls and .xlsx files straight from your browser.
Dynamic Dashboards: Interactive UI for discovering insights, viewing upload history, and visualizing trends.
AI-Powered Insights: Integrated with Groq LLM to instantly summarize datasets, detect anomalies, provide specific metric insights, and suggest chart ideas.
Data Privacy: Automatic cleanup of uploaded files off the server once AI analysis completes.
Responsive Design: A sleek, modern user interface built using React and styled for all devices.
🛠️ Technology Stack
Frontend:

React (Vite)
React Router DOM
React ChartJS / React Google Charts
Tailwind CSS
Backend:

Node.js & Express.js
MongoDB & Mongoose
JSON Web Tokens (JWT) & bcryptjs for auth
Multer (File Handling)
xlsx (Excel Parsing)
Groq SDK (AI Integration)
🚀 Getting Started
Prerequisites
Node.js (v18 or higher)
MongoDB Database (Local or MongoDB Atlas)
Groq API Key (You can get one from the Groq Console)
Installation
Clone the repository: git clone https://github.com/PERUGUMANOJ/Excel-analysis-platform.git cd Excel-Analysis

Setup Backend: cd Backend npm install

Create a 

.env
 file in the Backend directory and add: PORT=5000 MONGO_URI=your_mongodb_connection_string JWT_SECRET=your_super_secret_jwt_key JWT_EXPIRE=1h NODE_ENV=development GROQ_API_KEY=your_groq_api_key

Start the Backend server: npm start

Setup Frontend: cd ../Frontend npm install

Create a 

.env
 file in the Frontend directory and add: VITE_API_BASE_URL=http://localhost:5000

Start the Frontend server: npm run dev

☁️ Deployment Cloud Hosts (Render, Vercel)
This project is configured to run smoothly on cloud platforms like Render, Vercel, or Netlify.

Backend (Render): Set your Build Command to npm install and your Start Command to npm start. Add all your 

.env
 variables into the Render environment variables tab. (Fallback logic is currently integrated to prevent server crashes if JWT_SECRET or GROQ_API_KEY are accidentally missing).
Frontend (Vercel/Netlify): Set the environment variable VITE_API_BASE_URL to your live backend domain.
🤝 Contributing
Contributions, issues, and feature requests are welcome!

