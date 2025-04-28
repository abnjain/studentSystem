USE student_system;

-- Insert users
INSERT INTO users (email, password, role) VALUES
('student1@example.com', 'password123', 'student'),
('student2@example.com', 'password456', 'student'),
('teacher1@example.com', 'password123', 'teacher'),
('admin1@example.com', 'adminpassword', 'admin'),
('superadmin1@example.com', 'superadminpassword', 'superadmin');

-- Insert subjects
INSERT INTO subjects (name, description, class, difficulty_level) VALUES
('Mathematics', 'Basic Mathematics', '10th', 'Beginner'),
('Physics', 'Fundamentals of Physics', '11th', 'Intermediate'),
('Chemistry', 'Basic Chemistry concepts', '10th', 'Beginner');

-- Insert student profiles
INSERT INTO student_profiles (user_id, first_name, last_name, phone, membership) VALUES
(1, 'John', 'Doe', '9876543210', 'Free'),
(2, 'Jane', 'Smith', '9123456789', 'Premium');

-- Insert teacher profiles
INSERT INTO teacher_profiles (user_id, name, bio, subjects, plan_cost, availability, rating, photo_url) VALUES
(3, 'Dr. Alex', 'Physics Expert', '["Physics","Math"]', 500.00, '{"days":["Monday","Wednesday"]}', 4.5, 'alex.jpg'),
(3, 'Prof. Amy', 'Chemistry Teacher', '["Chemistry"]', 450.00, '{"days":["Tuesday","Thursday"]}', 4.7, 'amy.jpg');

-- Insert admin profiles
INSERT INTO admin_profiles (user_id, full_name, email) VALUES
(4, 'Admin User', 'admin1@example.com');

-- Insert superadmin profiles
INSERT INTO superadmin_profiles (user_id, full_name, email, password) VALUES
(5, 'Super Admin', 'superadmin1@example.com', 'superadminpassword');

-- Insert study materials
INSERT INTO study_materials (title, description, category, level, subject_id, file_url) VALUES
('Math Notes', 'Important formulas and examples', 'Notes', 'GCSE', 1, 'files/math_notes.pdf'),
('Physics Formulas', 'List of Physics formulas', 'Flashcards', 'IGCSE', 2, 'files/physics_formulas.pdf'),
('Chemistry Basics', 'Introduction to Chemistry', 'Notes', 'GCSE', 3, 'files/chemistry_basics.pdf');

-- Insert tests
INSERT INTO tests (title, description, subject_id, teacher_id, duration, questions) VALUES
('Algebra Test', 'Test on Algebra topics', 1, 1, 60, '{"questions": [{"q": "Solve for x: 2x+3=7", "a": "2"}]}'),
('Physics Laws Test', 'Test covering Newton laws', 2, 1, 45, '{"questions": [{"q": "State 2nd law of motion", "a": "F=ma"}]}');

-- Insert test results
INSERT INTO test_results (student_id, test_id, score, feedback) VALUES
(1, 1, 80.5, 'Good work, improve algebra basics'),
(1, 2, 90.0, 'Excellent understanding of physics laws'),
(2, 1, 70.0, 'Needs improvement in algebra'),
(3, 2, 75.0, 'Understand Newtons laws more clearly');

-- Insert payments
INSERT INTO payments (user_id, amount, currency, status) VALUES
(1, 100.00, 'INR', 'Completed'),
(2, 120.50, 'INR', 'Pending');

-- Insert leaderboard entries
INSERT INTO leaderboards (student_id, score, rank_position) VALUES
(1, 90, 1),
(2, 85, 2);
