const StudentProfile = require('../models/StudentProfile');

// Get All Students
exports.getAllStudents = async (req, res) => {
  try {
    const students = await StudentProfile.findAll();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Get Student by ID
exports.getStudentById = async (req, res) => {
  const { id } = req.params;
  try {
    const student = await StudentProfile.findByPk(id);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Create Student
exports.createStudent = async (req, res) => {
  try {
    const student = await StudentProfile.create(req.body);
    res.status(201).json(student);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Update Student
exports.updateStudent = async (req, res) => {
  const { id } = req.params;
  try {
    const student = await StudentProfile.findByPk(id);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    await student.update(req.body);
    res.status(200).json(student);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Delete Student
exports.deleteStudent = async (req, res) => {
  const { id } = req.params;
  try {
    const student = await StudentProfile.findByPk(id);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    await student.destroy();
    res.status(200).json({ message: 'Student deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
