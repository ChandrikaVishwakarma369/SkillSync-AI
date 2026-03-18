# SkillSync

A full-stack MERN (MongoDB, Express, React, Node.js) web application that empowers users to upload their resumes and receive AI-powered analysis against specific job roles. The application provides detailed feedback, match scores, identifies missing skills, and offers actionable suggestions to improve resumes for targeted job applications.

## 🚀 Features

- **Resume Upload**: Support for PDF and DOCX file formats
- **Job Role Analysis**: Enter target job roles or paste job descriptions
- **AI-Powered Analysis**: Intelligent resume evaluation using OpenAI API
- **Comprehensive Feedback**:
  - Match score percentage
  - Identified strengths
  - Missing skills gap analysis
  - Personalized improvement suggestions
- **Downloadable Reports**: Export improved resume suggestions
- **User-Friendly Interface**: Clean, responsive React frontend
- **Secure File Handling**: Multer-based file upload with validation

## 🛠 Tech Stack

### Frontend
- **React.js** - Modern JavaScript library for building user interfaces
- **React Router** - Declarative routing for React applications

### Backend
- **Node.js** - JavaScript runtime for server-side development
- **Express.js** - Fast, unopinionated web framework for Node.js

### Database
- **MongoDB** - NoSQL document database
- **Mongoose** - Elegant MongoDB object modeling for Node.js

### AI Integration
- **Gemini API** - GPT models for natural language processing and resume analysis

### File Upload
- **Multer** - Middleware for handling multipart/form-data (file uploads)

### Additional Libraries
- **Axios** - HTTP client for API requests
- **Dotenv** - Environment variable management

## 📁 Project Structure

```
SkillSync/
├── client/                    # React frontend
│   ├── public/
│   │   ├── index.html
│   │   └── favicon.ico
│   ├── src/
│   │   ├── components/
│   │   │   ├── UploadResume.js
│   │   │   ├── JobAnalysis.js
│   │   │   ├── Results.js
│   │   │   └── Navbar.js
│   │   ├── pages/
│   │   │   ├── Home.js
│   │   │   ├── Analysis.js
│   │   │   └── Results.js
│   │   ├── App.js
│   │   ├── index.js
│   │   └── styles/
│   │       └── App.css
│   ├── package.json
│   └── README.md
├── server/                    # Node.js backend
│   ├── config/
│   │   └── database.js        # MongoDB connection
│   ├── controllers/
│   │   ├── resumeController.js
│   │   └── analysisController.js
│   ├── middleware/
│   │   └── upload.js          # Multer configuration
│   ├── models/
│   │   └── Resume.js          # Mongoose schema
│   ├── routes/
│   │   ├── resume.js
│   │   └── analysis.js
│   ├── utils/
│   │   └── openai.js          # OpenAI API integration
│   ├── app.js                 # Express app setup
│   ├── server.js              # Server entry point
│   └── package.json
├── uploads/                   # Uploaded resume files (gitignored)
├── .env.example               # Environment variables template
├── package.json               # Root package.json for scripts
└── README.md                  # Project documentation
```

Built with ❤️ using the MERN stack