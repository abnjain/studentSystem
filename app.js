const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const helmet = require('helmet');
const sequelize = require('./config/db');

// Import routes
const authRoutes = require('./routes/authRoutes');
const studentRoutes = require('./routes/studentRoutes');
const teacherRoutes = require('./routes/teacherRoutes');
const adminRoutes = require('./routes/adminRoutes');
const paymentRoutes = require('./routes/paymentRoutes');
const testRoutes = require('./routes/testRoutes');
// const uploadRoutes = require('./routes/uploadRoutes');
const leaderboardRoutes = require('./routes/leaderboardRoutes');
const studyMaterialRoutes = require('./routes/studyMaterialRoutes');

// Load environment variables
dotenv.config();

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());
app.use(helmet());

// // Database connection
// sequelize.sync({ force: true })  // Set `force: true` only during development
//   .then(() => console.log('✅ Database connected successfully'))
//   .catch((error) => console.error('❌ Database connection failed:', error));

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/students', studentRoutes);
app.use('/api/teachers', teacherRoutes);
app.use('/api/admins', adminRoutes);
app.use('/api/payments', paymentRoutes);
app.use('/api/tests', testRoutes);
// app.use('/api/upload', uploadRoutes);
app.use('/api/leaderboard', leaderboardRoutes);
app.use('/api/study-materials', studyMaterialRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
