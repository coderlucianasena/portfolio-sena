const request = require('supertest');
const app = require('./app'); // Certifique-se de exportar o app no seu app.js

describe('Testes do Servidor', () => {
  it('deve responder à rota raiz', async () => {
    const res = await request(app).get('/');
    expect(res.statusCode).toBe(200);
  });

  it('deve responder à rota de política de cookies', async () => {
    const res = await request(app).get('/politica-de-cookies');
    expect(res.statusCode).toBe(200);
  });

  it('deve responder à rota da API', async () => {
    const res = await request(app).get('/api/models');
    expect(res.statusCode).toBe(200);
    // Adicione mais expectativas baseadas na resposta esperada
  });
});