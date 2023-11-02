const request = require('supertest');
const app = require('../index');

describe('User Registration and Login Tests', () => {
  let user = {
    email: 'test@example.com',
    password: 'TestPassword@123',
  };

  test('should register a new user', async () => {
    const response = await request(app)
      .post('/auth/register')
      .send(user);

    expect(response.status).toBe(201);
  });

  test('should not register a user with duplicate email', async () => {
    const response = await request(app)
      .post('/auth/register')
      .send(user);

    expect(response.status).toBe(409);
  });

  test('should log in with valid credentials', async () => {
    const response = await request(app)
      .post('/auth/login')
      .send({ email: user.email, password: user.password });

    expect(response.status).toBe(200);
  });

  test('should not log in with incorrect password', async () => {
    const response = await request(app)
      .post('/auth/login')
      .send({ email: user.email, password: 'Incorrect1@Password' });

    expect(response.status).toBe(401);
  });

  test('should not log in with incorrect email', async () => {
    const response = await request(app)
      .post('/auth/login')
      .send({ email: 'nonUser@g.com', password: user.password });

    expect(response.status).toBe(401);
  });

  test('Should not register user with space in Email', async () => {
    const response = await request(app)
      .post('/auth/register')
      .send({email : 'p @gmail.com' , password: user.password});

    expect(response.status).toBe(409);
  });

  test('Should not register user with incorrect Email format', async () => {
    const response = await request(app)
      .post('/auth/register')
      .send({email : 'phjhfdsfmail.com' , password: user.password});

    expect(response.status).toBe(409);
  });

  test('should not register a user with password length less that 8 character, first character capital and one number and one special character', async () => {
    const response = await request(app)
      .post('/auth/register')
      .send({email : 'p@gmail.com' , password: 'pjkd'});

    expect(response.status).toBe(409);
  });

  test('Should not login user with space in Email', async () => {
    const response = await request(app)
      .post('/auth/login')
      .send({email : 'p @gmail.com' , password: user.password});

    expect(response.status).toBe(409);
  });

  test('Should not login user with incorrect Email format', async () => {
    const response = await request(app)
      .post('/auth/login')
      .send({email : 'phjhfdsfmail.com' , password: user.password});

    expect(response.status).toBe(409);
  });

  test('should not login a user with password length less that 8 character, first character capital and one number and one special character', async () => {
    const response = await request(app)
      .post('/auth/login')
      .send({email : 'p@gmail.com' , password: 'pjkd'});

    expect(response.status).toBe(409);
  });
});
