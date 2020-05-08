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
  id: 123,
  email: 'test@email.com',
  firstname: 'Test',
  lastname: 'user',
  password: 'password',

};


const createMockRequest = (request = {}) => {
  const req = request;
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
describe('update', async () => {
  const updateOriginalMockImplemenation = personalProviderModel.findByIdAndUpdate;

  beforeEach(() => {
    personalProviderModel.findByIdAndUpdate.mockClear();
    personalProviderModel.create(user);
  });

  afterEach(() => {
    personalProviderModel.reset();
    personalProviderModel.findByIdAndUpdate = updateOriginalMockImplemenation;
  });

  test('should update user correctly when valid id and data are passed', async () => {
    user.firstName = 'firstName Changed!';
    const res = createMockResponse;
    const req = createMockRequest(
      {
        body: {
          user,
        },
      },
    );

    await personalProviderController.update(req, res, {});

    expect(personalProviderModel.findByIdAndUpdate).toBeCalledTimes(1);
    expect(personalProviderModel.findByIdAndUpdate).toBeCalledWith(user.id, user);
    expect(personalProviderModel.findById(user.id).firstName).toBe(user.firstName);
    expect(personalProviderModel.count()).toBe(1);
  });
});


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
    const req = createMockRequest({
      body: {
        user,
      },
    });
    personalProviderController.add(req, res, {});
    expect(personalProviderModel.create).toBeCalledTimes(1);
  });
});
