const StudyMaterial = require('../models/StudyMaterial');

// Get All Study Materials
exports.getAllMaterials = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  const offset = (page - 1) * limit;

  try {
    const materials = await StudyMaterial.findAndCountAll({
      limit: parseInt(limit),
      offset: parseInt(offset)
    });

    res.status(200).json({
      total: materials.count,
      page: parseInt(page),
      totalPages: Math.ceil(materials.count / limit),
      data: materials.rows
    });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};


// Get Study Material by ID
exports.getMaterialById = async (req, res) => {
  const { id } = req.params;
  try {
    const material = await StudyMaterial.findByPk(id);
    if (!material) {
      return res.status(404).json({ message: 'Material not found' });
    }
    res.status(200).json(material);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Create Study Material
exports.createMaterial = async (req, res) => {
  try {
    const material = await StudyMaterial.create(req.body);
    res.status(201).json(material);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Update Study Material
exports.updateMaterial = async (req, res) => {
  const { id } = req.params;
  try {
    const material = await StudyMaterial.findByPk(id);
    if (!material) {
      return res.status(404).json({ message: 'Material not found' });
    }

    await material.update(req.body);
    res.status(200).json(material);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};

// Delete Study Material
exports.deleteMaterial = async (req, res) => {
  const { id } = req.params;
  try {
    const material = await StudyMaterial.findByPk(id);
    if (!material) {
      return res.status(404).json({ message: 'Material not found' });
    }

    await material.destroy();
    res.status(200).json({ message: 'Material deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Server error', error });
  }
};
