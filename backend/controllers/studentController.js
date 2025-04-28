const StudentProfile = require('../models/StudentProfile');

// Get All Students
exports.getAllStudents = async (req, res) => {
  try {
    const students = await StudentProfile.findAll();
    res.status(200).json(students);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error', error });
  }
};

// Get Student by ID
exports.getStudentById = async (req, res) => {
  try {
    const { id } = req.params;
    const student = await StudentProfile.findByPk(id);

    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    res.status(200).json(student);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error', error });
  }
};

// Create a New Student
exports.createStudent = async (req, res) => {
  try {
    const { user_id, first_name, last_name, phone, membership, billing_info, notification_preferences } = req.body;

    const newStudent = await StudentProfile.create({
      user_id,
      first_name,
      last_name,
      phone,
      membership,
      billing_info,
      notification_preferences,
    });

    res.status(201).json({ message: 'Student created successfully', student: newStudent });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error', error });
  }
};

// Update a Student
exports.updateStudent = async (req, res) => {
  try {
    const { id } = req.params;
    const { first_name, last_name, phone, membership, billing_info, notification_preferences } = req.body;

    const student = await StudentProfile.findByPk(id);

    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    await student.update({
      first_name,
      last_name,
      phone,
      membership,
      billing_info,
      notification_preferences,
    });

    res.status(200).json({ message: 'Student updated successfully', student });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error', error });
  }
};

// Delete a Student
exports.deleteStudent = async (req, res) => {
  try {
    const { id } = req.params;

    const student = await StudentProfile.findByPk(id);

    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    await student.destroy();

    res.status(200).json({ message: 'Student deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error', error });
  }
};
