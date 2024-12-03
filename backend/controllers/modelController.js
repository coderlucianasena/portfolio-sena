const Model = require('../models/Model');

// Obter todos os modelos
exports.getAllModels = async (req, res) => {
  try {
    const models = await Model.find();
    res.json(models);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Criar um novo modelo
exports.createModel = async (req, res) => {
  const model = new Model({
    name: req.body.name,
    description: req.body.description,
    // Adicione outros campos conforme necessário
  });

  try {
    const newModel = await model.save();
    res.status(201).json(newModel);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Adicione outras funções do controlador conforme necessário