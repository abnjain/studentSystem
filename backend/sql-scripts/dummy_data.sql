USE student_system;

-- Insert users
INSERT INTO users (email, password, role, createdAt, updatedAt) VALUES
('student1@example.com', 'password123', 'student', NOW(), NOW()),
('student2@example.com', 'password456', 'student', NOW(), NOW()),
('teacher1@example.com', 'password123', 'teacher', NOW(), NOW()),
('admin1@example.com', 'adminpassword', 'admin', NOW(), NOW()),
('superadmin1@example.com', 'superadminpassword', 'superadmin', NOW(), NOW());

-- Insert subjects
INSERT INTO subjects (name, description, class, difficulty_level, createdAt, updatedAt) VALUES
('Mathematics', 'Basic Mathematics', '10th', 'Beginner', NOW(), NOW()),
('Physics', 'Fundamentals of Physics', '11th', 'Intermediate', NOW(), NOW()),
('Chemistry', 'Basic Chemistry concepts', '10th', 'Beginner', NOW(), NOW()),
('Biology', 'Introduction to Biology', '12th', 'Intermediate', NOW(), NOW()),
('English', 'Basic English Grammar', '10th', 'Beginner', NOW(), NOW()),
('History', 'World History Overview', '11th', 'Intermediate', NOW(), NOW()),
('Geography', 'Physical Geography Basics', '10th', 'Beginner', NOW(), NOW()),
('Computer Science', 'Introduction to Programming', '12th', 'Intermediate', NOW(), NOW());

-- Insert student profiles
INSERT INTO student_profiles (user_id, first_name, last_name, phone, membership, createdAt, updatedAt) VALUES
(1, 'John', 'Doe', '9876543210', 'Free', NOW(), NOW()),
(2, 'Jane', 'Smith', '9123456789', 'Premium', NOW(), NOW());

-- Insert teacher profiles
INSERT INTO teacher_profiles (user_id, name, bio, subjects, plan_cost, availability, rating, photo_url, createdAt, updatedAt) VALUES
(3, 'Dr. Alex', 'Physics Expert', '["Physics","Math"]', 500.00, '{"days":["Monday","Wednesday"]}', 4.5, 'alex.jpg', NOW(), NOW()),
(3, 'Prof. Amy', 'Chemistry Teacher', '["Chemistry"]', 450.00, '{"days":["Tuesday","Thursday"]}', 4.7, 'amy.jpg', NOW(), NOW());

-- Insert admin profiles
INSERT INTO admin_profiles (user_id, full_name, email, createdAt, updatedAt) VALUES
(4, 'Admin User', 'admin1@example.com', NOW(), NOW());

-- Insert superadmin profiles
INSERT INTO superadmin_profiles (user_id, full_name, email, password, createdAt, updatedAt) VALUES
(5, 'Super Admin', 'superadmin1@example.com', 'superadminpassword', NOW(), NOW());

-- Insert study materials
INSERT INTO study_materials (title, description, category, level, subject_id, file_url, createdAt, updatedAt) VALUES
('Math Notes', 'Important formulas and examples', 'Notes', 'GCSE', 1, 'files/math_notes.pdf', NOW(), NOW()),
('Physics Formulas', 'List of Physics formulas', 'Flashcards', 'IGCSE', 2, 'files/physics_formulas.pdf', NOW(), NOW()),
('Chemistry Basics', 'Introduction to Chemistry', 'Notes', 'GCSE', 3, 'files/chemistry_basics.pdf', NOW(), NOW());

-- Insert tests
INSERT INTO tests (title, description, subject_id, teacher_id, duration, questions, createdAt, updatedAt) VALUES
('Algebra Test', 'Test on Algebra topics', 1, 1, 60, '{"questions": [{"q": "Solve for x: 2x+3=7", "a": "2"}]}', NOW(), NOW()),
('Physics Laws Test', 'Test covering Newton laws', 2, 1, 45, '{"questions": [{"q": "State 2nd law of motion", "a": "F=ma"}]}', NOW(), NOW());

-- Insert test results
INSERT INTO test_results (student_id, test_id, score, feedback, createdAt, updatedAt) VALUES
(1, 1, 80.5, 'Good work, improve algebra basics', NOW(), NOW()),
(1, 2, 90.0, 'Excellent understanding of physics laws', NOW(), NOW()),
(2, 1, 70.0, 'Needs improvement in algebra', NOW(), NOW()),
(3, 2, 75.0, 'Understand Newtons laws more clearly', NOW(), NOW());

-- Insert payments
INSERT INTO payments (user_id, amount, currency, status, createdAt, updatedAt) VALUES
(1, 100.00, 'INR', 'Completed', NOW(), NOW()),
(2, 200.00, 'INR', 'Pending', NOW(), NOW()),
(1, 50.00, 'INR', 'Completed', NOW(), NOW()),
(3, 150.00, 'INR', 'Failed', NOW(), NOW()),
(4, 300.00, 'INR', 'Completed', NOW(), NOW()),
(2, 120.50, 'INR', 'Pending', NOW(), NOW());

-- Insert leaderboard entries
INSERT INTO leaderboards (student_id, score, rank_position, createdAt, updatedAt) VALUES
(1, 90, 1, NOW(), NOW()),
(2, 85, 2, NOW(), NOW()),
(1, 95, 1, NOW(), NOW()),
(3, 80, 3, NOW(), NOW()),
(4, 70, 4, NOW(), NOW()),
(5, 60, 5, NOW(), NOW()),
(2, 85, 2, NOW(), NOW());
