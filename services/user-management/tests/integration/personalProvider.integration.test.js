

const mongoose = require('mongoose');
const dbHandler = require('../db-handler');
const PersonalProviders = require('../../src/models/personalProvider.model');

const user = {
  firstname: 'test',
  lastname: 'tser',
  email: 'Test@user.com',
};

const missingLastnameUser = {
  firstname: 'John',
  email: 'John@test.com',
};

const missingFirstnameUser = {
  lastname: 'Doe',
  email: 'Doe@test.com',
};

const missingEmailUser = {
  firstname: 'Mary',
  lastname: 'Monty',
};

const InvalidemailtUser = {
  firstname: 'Sally',
  lastname: 'Roberts',
  email: 'sally',
};
/**
 * Connect to a new in-memory database before running any tests.
 */
beforeAll(async () => dbHandler.connect());

/**
 * Clear all test data after every test.
 */
afterEach(async () => dbHandler.clearDatabase());


/**
 * Remove and close the db and server.
 */
afterAll(async () => dbHandler.closeDatabase());


/**
 * Product test suite.
 */
describe('Personal Provider schema Integration methods and validation ', () => {
  it('cannot create user if proper user data is passed', async () => {
    // eslint-disable-next-line no-return-await
    const personalProvider = await PersonalProviders.create(user);
    // eslint-disable-next-line no-underscore-dangle
    expect(personalProvider._id).toBeDefined();
    expect(personalProvider.firstname).toBe(user.firstname);
    expect(personalProvider.lastname).toBe(user.lastname);
  });

  it('cannot create user if already exists', async () => {
    // eslint-disable-next-line no-return-await
    let err;
    await PersonalProviders.create(user);
    try {
      const personalProvider = await PersonalProviders.create(user);
      // eslint-disable-next-line no-unused-vars
      const error = personalProvider;
    } catch (error) {
      err = error;
    }
    expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
    expect(err.errors.email).toBeDefined();
  });

  it('cannot create user if lastname is missing', async () => {
    // eslint-disable-next-line no-return-await
    let err;
    try {
      const personalProvider = await PersonalProviders.create(missingLastnameUser);
      // eslint-disable-next-line no-unused-vars
      const error = personalProvider;
    } catch (error) {
      err = error;
    }
    expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
    expect(err.errors.lastname).toBeDefined();
  });

  it('cannot create user if firstname is missing', async () => {
    // eslint-disable-next-line no-return-await
    let err;
    try {
      const personalProvider = await PersonalProviders.create(missingFirstnameUser);
      // eslint-disable-next-line no-unused-vars
      const error = personalProvider;
    } catch (error) {
      err = error;
    }
    expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
    expect(err.errors.firstname).toBeDefined();
  });
  it('cannot create user if email is missing', async () => {
    // eslint-disable-next-line no-return-await
    let err;
    try {
      const personalProvider = await PersonalProviders.create(missingEmailUser);
      // eslint-disable-next-line no-unused-vars
      const error = personalProvider;
    } catch (error) {
      err = error;
    }
    expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
    expect(err.errors.email).toBeDefined();
  });

  it('cannot create user if email does not have proper format', async () => {
    // eslint-disable-next-line no-return-await
    let err;
    try {
      const personalProvider = await PersonalProviders.create(InvalidemailtUser);
      // eslint-disable-next-line no-unused-vars
      const error = personalProvider;
    } catch (error) {
      err = error;
    }
    expect(err).toBeInstanceOf(mongoose.Error.ValidationError);
    expect(err.errors.email).toBeDefined();
  });
});
