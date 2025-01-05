const request = require('supertest');
const app = require('../app');

describe('User APIs', () => {
  it('should fetch all users', async () => {
    const res = await request(app).get('/api/users');
    expect(res.statusCode).toBe(200);
  });

  it('should create a new user', async () => {
    const userData = {
      name: 'John Doe',
      mobile: 1234567890,
      address: '123 Main St',
    };
    const res = await request(app).post('/api/users').send(userData);
    expect(res.statusCode).toBe(201);
    expect(res.body.name).toBe(userData.name);
  });
});
