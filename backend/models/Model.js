const mongoose = require('mongoose');

const ModelSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  // Adicione outros campos conforme necessário
}, { timestamps: true });

module.exports = mongoose.model('Model', ModelSchema);