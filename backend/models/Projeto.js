const mongoose = require('mongoose');

const projetoSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  descricao: { type: String, required: true },
  imagemUrl: { type: String, required: true },
  categoria: { type: String, required: true },
  dataCriacao: { type: String, required: true },
  tecnologias: { type: [String], required: true },
  funcao: { type: String, required: true },
  link: { type: String, required: true },
  modeloUrl: { type: String },
  preco: { type: Number },
  disponivel: { type: Boolean, default: false }
});

const Projeto = mongoose.model('Projeto', projetoSchema);

module.exports = Projeto;