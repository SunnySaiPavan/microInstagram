const request = require('supertest');
const app = require('../app');

describe('Post APIs', () => {
  it('should fetch all posts', async () => {
    const res = await request(app).get('/api/posts');
    expect(res.statusCode).toBe(200);
  });

  it('should create a new post', async () => {
    const postData = {
      title: 'My First Post',
      description: 'This is my first post',
      userId: 1,
      images: ['image1.jpg', 'image2.jpg'],
    };
    const res = await request(app).post('/api/posts').send(postData);
    expect(res.statusCode).toBe(201);
    expect(res.body.title).toBe(postData.title);
  });
});
