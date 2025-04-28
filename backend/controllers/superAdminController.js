const { SuperAdmin } = require('../models/SuperAdmin');
const bcrypt = require('bcryptjs');
const { createToken } = require('../utils/tokenUtils');

// Get All Super Admins
exports.getAllSuperAdmins = async (req, res) => {
  try {
    const superAdmins = await SuperAdmin.findAll();
    res.status(200).json(superAdmins);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error', error });
  }
};

// Get Super Admin by ID
exports.getSuperAdminById = async (req, res) => {
  try {
    const { id } = req.params;
    const superAdmin = await SuperAdmin.findByPk(id);

    if (!superAdmin) {
      return res.status(404).json({ message: 'Super Admin not found' });
    }

    res.status(200).json(superAdmin);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error', error });
  }
};

// Create a New Super Admin
exports.createSuperAdmin = async (req, res) => {
  try {
    const { email, password, full_name } = req.body;

    // Check if the super admin already exists
    const existingSuperAdmin = await SuperAdmin.findOne({ where: { email } });
    if (existingSuperAdmin) {
      return res.status(400).json({ message: 'Super Admin already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create the super admin
    const newSuperAdmin = await SuperAdmin.create({
      email,
      password: hashedPassword,
      full_name,
    });

    res.status(201).json({ message: 'Super Admin created successfully', superAdmin: newSuperAdmin });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error', error });
  }
};

// Update a Super Admin
exports.updateSuperAdmin = async (req, res) => {
  try {
    const { id } = req.params;
    const { email, password, full_name } = req.body;

    const superAdmin = await SuperAdmin.findByPk(id);

    if (!superAdmin) {
      return res.status(404).json({ message: 'Super Admin not found' });
    }

    // Hash the password if provided
    const hashedPassword = password ? await bcrypt.hash(password, 10) : superAdmin.password;

    await superAdmin.update({
      email,
      password: hashedPassword,
      full_name,
    });

    res.status(200).json({ message: 'Super Admin updated successfully', superAdmin });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error', error });
  }
};

// Delete a Super Admin
exports.deleteSuperAdmin = async (req, res) => {
  try {
    const { id } = req.params;

    const superAdmin = await SuperAdmin.findByPk(id);

    if (!superAdmin) {
      return res.status(404).json({ message: 'Super Admin not found' });
    }

    await superAdmin.destroy();

    res.status(200).json({ message: 'Super Admin deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Server error', error });
  }
};