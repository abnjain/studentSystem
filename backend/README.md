# Student System Backend

This is the backend for the **Student System** project, built using **Node.js**, **Express**, and **Sequelize**. It provides APIs for managing users, students, super admins, study materials, leaderboards, and more.

---

## Features

- **Authentication**: User login, registration, and token-based authentication.
- **Super Admin Management**: CRUD operations for super admins.
- **Student Management**: CRUD operations for student profiles.
- **Study Materials**: Manage study materials like notes, flashcards, and exam questions.
- **Leaderboards**: Manage and retrieve leaderboard data.
- **Database Integration**: MySQL database with Sequelize ORM.
- **Security**: Middleware for input validation, rate limiting, and XSS protection.

---

## Folder Structure
backend/ ├── app.js # Main entry point for the backend ├── config/ 
│ └── db.js # Database configuration 
├── controllers/ # API controllers 
│ ├── authController.js 
│ ├── leaderboardController.js 
│ ├── studentController.js 
│ ├── studyMaterialController.js 
│ └── superAdminController.js 
├── middlewares/ # Custom middleware 
│ ├── authMiddlewares.js 
│ ├── errorHandler.js 
│ ├── rateLimiter.js 
│ ├── validateInput.js 
│ └── xssClean.js 
├── models/ # Sequelize models 
│ ├── AdminProfile.js 
│ ├── Leaderboard.js 
│ ├── Payment.js 
│ ├── StudentProfile.js 
│ ├── StudyMaterial.js 
│ ├── SuperAdmin.js 
│ ├── TeacherProfile.js 
│ ├── Test.js 
│ ├── TestResult.js 
│ ├── Token.js 
│ └── User.js 
├── routes/ # API routes 
│ ├── authRoutes.js 
│ ├── leaderboardRoutes.js 
│ ├── studentRoutes.js 
│ ├── studyMaterialRoutes.js 
│ └── superAdminRoutes.js 
├── seeders/ # Database seeders 
├── sql-scripts/ # SQL scripts for database setup 
├── utils/ # Utility functions 
│ ├── tokenUtils.js 
│ └── other utilities... 
├── .env # Environment variables 
├── .gitignore # Git ignore file 
├── package.json # Node.js dependencies 
└── README.md # Project documentation

---

## Prerequisites

- **Node.js**: v14 or higher
- **MySQL**: Ensure MySQL is installed and running
- **npm**: Installed with Node.js

---

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/abnjain/student_system.git
   cd student_system/backend
2. Install dependencies:
npm install
3. Create a .env file in the backend folder with the following variables:
DB_NAME=student_system
DB_USER=root
DB_PASS=your_password
DB_HOST=localhost
DB_PORT=3306
JWT_SECRET=your_jwt_secret
4. Set up the database:
    Create the database:
        CREATE DATABASE student_system;
    Run the seeders or SQL scripts to populate the database:
        node seeders/seeder.js


### Running the Application
1. Start the server:
nodemon start
2. The server will run on http://localhost:{PORT} by default.

### API Endpoints
# Authentication
POST /api/auth/register: Register a new user
POST /api/auth/login: Login and get a token
POST /api/auth/refresh: Refresh the token
POST /api/auth/logout: Logout the user
# Super Admin
GET /api/super-admin: Get all super admins
GET /api/super-admin/:id: Get a super admin by ID
POST /api/super-admin: Create a new super admin
PUT /api/super-admin/:id: Update a super admin
DELETE /api/super-admin/:id: Delete a super admin
# Students
GET /api/students: Get all students
GET /api/students/:id: Get a student by ID
POST /api/students: Create a new student
PUT /api/students/:id: Update a student
DELETE /api/students/:id: Delete a student
# Study Materials
GET /api/study-materials: Get all study materials
GET /api/study-materials/:id: Get a study material by ID
POST /api/study-materials: Create a new study material
PUT /api/study-materials/:id: Update a study material
DELETE /api/study-materials/:id: Delete a study material
# Leaderboards
GET /api/leaderboard: Get leaderboard data

### Security Features
JWT Authentication: Secure token-based authentication.
Input Validation: Middleware to validate user input.
Rate Limiting: Prevent brute force attacks.
XSS Protection: Middleware to sanitize input.

### Contributing
Contributions are welcome! Please fork the repository and submit a pull request.

### Contact
For any inquiries, please contact:

Email: abnjain25@gmail.com
GitHub: https://github.com/abnjain

---

### Notes:
- Replace placeholders like `your-repo`, `your_password`, `your_jwt_secret`, and `your_email@example.com` with actual values.
- Add or remove sections based on your specific project requirements.
