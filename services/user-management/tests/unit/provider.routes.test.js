jest.mock('../../src/controllers/personalProvider.controller');

const request = require('supertest');
const providerController = require('../../src/controllers/personalProvider.controller');
const app = require('../../src/app');

const user = {
  firstname: 'test',
  lastname: 'user',
  email: 'test@test.com',
};

// describe('GET /api/providers/:id', () => {
//   test('Should sucessfully get status 200', async (done) => {
//     const response = await request(app).get('/api/providers/123');

//     expect(providerController.findById).toBeCalledTimes(1);
//     expect(response.status).toBe(200);
//     expect(response.text).toEqual('123');

//     done();
//   });
// });

describe('POST /api/users', () => {
  test('Should sucessfully get status 200', async (done) => {
    const response = await request(app)
      .post('/api/providers')
      .send({
        user,
      });
    expect(providerController.add).toBeCalledTimes(1);
    expect(response.status).toBe(200);
    done();
  });
});

// describe('PUT /api/users/:id', () => {
//   test('Should sucessfully get status 200', async (done) => {
//     const response = await request(app).put('/api/providers/123');

//     expect(providerController.update).toBeCalledTimes(1);
//     expect(response.status).toBe(200);
//     expect(response.text).toEqual('123');
//     done();
//   });
// });

// describe('DELETE /api/users/:id', () => {
//   test('Should sucessfully get status 200', async (done) => {
//     const response = await request(app).delete('/api/providers/123');

//     expect(providerController.delete).toBeCalledTimes(1);
//     expect(response.status).toBe(200);
//     expect(response.text).toEqual('123');
//     done();
//   });
// });
