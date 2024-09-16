// app.test.js
const request = require('supertest');
const app = require('../index.js'); // Your Express app file

describe('Testing Express Routes', () => {

  // Test for GET route
  it('should return 200 OK on GET /api', async () => {
    const res = await request(app).get('/api');
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('message', 'API is working');
  });

  // Test for protected route (authentication required)
  it('should return 401 Unauthorized for protected route without token', async () => {
    const res = await request(app).get('/api/protected');
    expect(res.statusCode).toEqual(401);
  });

  // Test for POST route
  it('should create a new item on POST /api/item', async () => {
    const res = await request(app)
      .post('/api/item')
      .send({
        name: 'New Item',
        price: 20
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('name', 'New Item');
  });

});
