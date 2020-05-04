// #region Disabled ESLint Rules...

/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */

// #endregion

// #region Setup Mocks...

jest.mock('../../src/models/personalProvider.model');

// #endregion

// #region Imports...

const personalProviderModel = require('../../src/models/personalProvider.model');
const personalProviderController = require('../../src/controllers/personalProvider.controller');

// #endregion

// #region Methods...
const user = {
  email: 'test@email.com',
  firstname: 'Test',
  lastname: 'user',
  password: 'password',

};


const createMockRequest = (request = {}) => {
  const req = {};
  req.body = request;
  return req;
};

const createMockResponse = () => {
  const res = {};
  res.json = jest.fn((json) => {});
  return res;
};


// #endregion

// #region Unit Tests...

// #region userController_add

describe('add', async () => {
  const createMockOriginalImplementation = personalProviderModel.create;

  beforeEach(() => {
    personalProviderModel.create.mockClear();
  });

  afterEach(() => {
    personalProviderModel.reset();
    personalProviderModel.create = createMockOriginalImplementation;
  });

  test('should call create function when data is passed', async () => {
    const res = createMockResponse();
    const req = createMockRequest({ user });
    personalProviderController.add(req, res, {});
    expect(personalProviderModel.create).toBeCalledTimes(1);
  });
});
