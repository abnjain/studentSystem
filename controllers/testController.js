const Test = require('../models/Test');

// Get All Tests
exports.getAllTests = async (req, res) => {
  try {
    const tests = await Test.findAll();
    res.status(200).json(tests);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Get Test by ID
exports.getTestById = async (req, res) => {
  const { id } = req.params;
  try {
    const test = await Test.findByPk(id);
    if (!test) {
      return res.status(404).json({ message: 'Test not found' });
    }
    res.status(200).json(test);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Create Test
exports.createTest = async (req, res) => {
  try {
    const test = await Test.create(req.body);
    res.status(201).json(test);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
