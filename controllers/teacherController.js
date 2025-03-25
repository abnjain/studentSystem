const TeacherProfile = require('../models/TeacherProfile');

// Get All Teachers
exports.getAllTeachers = async (req, res) => {
  try {
    const teachers = await TeacherProfile.findAll();
    res.status(200).json(teachers);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Get Teacher by ID
exports.getTeacherById = async (req, res) => {
  const { id } = req.params;
  try {
    const teacher = await TeacherProfile.findByPk(id);
    if (!teacher) {
      return res.status(404).json({ message: 'Teacher not found' });
    }
    res.status(200).json(teacher);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Create Teacher
exports.createTeacher = async (req, res) => {
  try {
    const teacher = await TeacherProfile.create(req.body);
    res.status(201).json(teacher);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Update Teacher
exports.updateTeacher = async (req, res) => {
  const { id } = req.params;
  try {
    const teacher = await TeacherProfile.findByPk(id);
    if (!teacher) {
      return res.status(404).json({ message: 'Teacher not found' });
    }

    await teacher.update(req.body);
    res.status(200).json(teacher);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Delete Teacher
exports.deleteTeacher = async (req, res) => {
  const { id } = req.params;
  try {
    const teacher = await TeacherProfile.findByPk(id);
    if (!teacher) {
      return res.status(404).json({ message: 'Teacher not found' });
    }

    await teacher.destroy();
    res.status(200).json({ message: 'Teacher deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
