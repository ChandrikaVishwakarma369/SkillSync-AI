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

## 🔧 Environment Variables

Create a `.env` file in the server directory with the following variables:

```env
# Database
MONGODB_URI=mongodb://localhost:27017/skillsync

# OpenAI API
OPENAI_API_KEY=your_openai_api_key_here

# Server Configuration
PORT=5000
NODE_ENV=development

# File Upload
UPLOAD_PATH=./uploads
MAX_FILE_SIZE=5242880  # 5MB in bytes
```

## 🚀 Installation and Setup

### Prerequisites
- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm or yarn package manager

### Backend Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/skillsync.git
   cd skillsync
   ```

2. **Install server dependencies**
   ```bash
   cd server
   npm install
   ```

3. **Set up environment variables**
   - Copy `.env.example` to `.env`
   - Fill in your MongoDB URI and OpenAI API key

4. **Start MongoDB**
   - If using local MongoDB: `mongod`
   - If using MongoDB Atlas, ensure your connection string is correct

### Frontend Setup

1. **Install client dependencies**
   ```bash
   cd ../client
   npm install
   ```

## 🏃 Running the Application

### Development Mode

1. **Start the backend server**
   ```bash
   cd server
   npm run dev
   ```
   Server will run on `http://localhost:5000`

2. **Start the frontend**
   ```bash
   cd client
   npm start
   ```
   React app will run on `http://localhost:3000`

### Production Build

1. **Build the frontend**
   ```bash
   cd client
   npm run build
   ```

2. **Start the production server**
   ```bash
   cd server
   npm start
   ```

## 📡 API Endpoints

### Resume Upload
- **POST** `/api/resume/upload`
  - Uploads resume file and saves to database
  - Body: FormData with file
  - Response: Resume ID and file info

### Resume Analysis
- **POST** `/api/analysis/analyze`
  - Analyzes resume against job description
  - Body: `{ resumeId: string, jobDescription: string }`
  - Response: Analysis results including match score, skills, suggestions

### Get Resume
- **GET** `/api/resume/:id`
  - Retrieves resume information
  - Response: Resume metadata

### Health Check
- **GET** `/api/health`
  - Server health status
  - Response: `{ status: "OK" }`

## 🤝 Contributing

We welcome contributions to SkillSync! Please follow these guidelines:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. **Make your changes**
4. **Run tests** (when available)
5. **Commit your changes**
   ```bash
   git commit -m "Add: Brief description of your changes"
   ```
6. **Push to your branch**
   ```bash
   git push origin feature/your-feature-name
   ```
7. **Create a Pull Request**

### Development Guidelines
- Follow ESLint configuration
- Write clear, concise commit messages
- Update documentation for new features
- Test your changes thoroughly

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

For questions or support, please open an issue on GitHub or contact the maintainers.

---

**Current Project Status:**
- ✅ Server setup completed
- ✅ MongoDB connected via Mongoose
- 🔄 Resume upload route in progress
- ⏳ AI integration pending

Built with ❤️ using the MERN stack