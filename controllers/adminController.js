const AdminProfile = require('../models/AdminProfile');

// Get All Admins
exports.getAllAdmins = async (req, res) => {
  try {
    const admins = await AdminProfile.findAll();
    res.status(200).json(admins);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Get Admin by ID
exports.getAdminById = async (req, res) => {
  const { id } = req.params;
  try {
    const admin = await AdminProfile.findByPk(id);
    if (!admin) {
      return res.status(404).json({ message: 'Admin not found' });
    }
    res.status(200).json(admin);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Create Admin
exports.createAdmin = async (req, res) => {
  try {
    const admin = await AdminProfile.create(req.body);
    res.status(201).json(admin);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Update Admin
exports.updateAdmin = async (req, res) => {
  const { id } = req.params;
  try {
    const admin = await AdminProfile.findByPk(id);
    if (!admin) {
      return res.status(404).json({ message: 'Admin not found' });
    }

    await admin.update(req.body);
    res.status(200).json(admin);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Delete Admin
exports.deleteAdmin = async (req, res) => {
  const { id } = req.params;
  try {
    const admin = await AdminProfile.findByPk(id);
    if (!admin) {
      return res.status(404).json({ message: 'Admin not found' });
    }

    await admin.destroy();
    res.status(200).json({ message: 'Admin deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
