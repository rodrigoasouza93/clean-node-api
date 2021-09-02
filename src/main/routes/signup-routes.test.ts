import request from 'supertest';

import app from '../config/app';

describe('SignUp Routes', () => {
  test('Should return an account os success', async () => {
    await request(app)
      .post('/api/signup')
      .send({
        name: 'João da Silva',
        email: 'joaodasilva@mail.com',
        password: '123456',
        passwordConfirmation: '123456',
      })
      .expect(200);
  });
});
