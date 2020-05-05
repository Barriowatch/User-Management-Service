/* eslint-disable global-require */
const mongoose = require('mongoose');


const schemaResponse = {};
schemaResponse.methods = {};
schemaResponse.plugin = jest.fn();
const uniqueValidator = require('mongoose-unique-validator');

const mockSchema = jest.fn(() => schemaResponse);
const mockModel = jest.fn((modelName, schema) => ({ modelName, schema }));

mongoose.model = mockModel;
mongoose.Schema = mockSchema;
mongoose.Schema.Types = {};
describe('Emergency Service User Model', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  test('Should have the correct user model name', () => {
    const model = require('../../src/models/serviceUser.model');
    expect(model.modelName).toBe('ServiceUser');
  });

  test('Should have JSON profile generator', () => {
    require('../../src/models/serviceUser.model');
    expect(schemaResponse.methods).toHaveProperty('toProfileJSONFor');
    expect(schemaResponse.methods.toProfileJSONFor).toBeDefined();
  });

  test('Should have correct registered methods', () => {
    require('../../src/models/serviceUser.model');
    expect(schemaResponse.plugin).toBeCalledTimes(1);
    expect(schemaResponse.plugin).toBeCalledWith(uniqueValidator, { message: 'is already taken' });
  });


  test('Schema should contain the required fields', () => {
    require('../../src/models/serviceUser.model');
    expect(mockSchema).toBeCalledTimes(1);
    const schema = mockSchema.mock.calls[0][0];
    expect(Object.keys(schema).length).toBe(10);

    expect(schema.firstname).toBeDefined();
    expect(schema.lastname).toBeDefined();
    expect(schema.email).toBeDefined();
    expect(schema.phone).toBeDefined();
    expect(schema.emergency_service_provider).toBeDefined();
    expect(schema.profile_picture_url).toBeDefined();
    expect(schema.birth_date).toBeDefined();
    expect(schema.gender).toBeDefined();
    expect(schema.barrio_id).toBeDefined();
    expect(schema.location).toBeDefined();
  });
});
