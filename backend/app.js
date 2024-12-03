// Suprimir avisos de depreciação
process.removeAllListeners('warning');

require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const modelRoutes = require('./routes/models');
const path = require('path');

const app = express();

// Middleware
app.use(express.json());

// Rotas da API
app.use('/api/models', modelRoutes);

// Servir arquivos estáticos
app.use('/assets', express.static(path.join(__dirname, '..', 'assets')));

// Rotas para arquivos HTML
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'index.html'));
});

app.get('/politica-de-cookies', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'politica-de-cookies.html'));
});

const PORT = process.env.PORT || 3000;

// Adicionar log de ambiente e porta
if (process.env.NODE_ENV !== 'production') {
  console.log('Ambiente:', process.env.NODE_ENV || 'desenvolvimento');
  console.log('Porta:', PORT);
}

connectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Servidor rodando na porta ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Erro ao iniciar o servidor:', err);
    process.exit(1);
  });