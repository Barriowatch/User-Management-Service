/* eslint-disable no-restricted-syntax */
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

const mongod = new MongoMemoryServer();

module.exports.connect = async () => {
  const uri = await mongod.getConnectionString();
  const mongooseOpts = {
    useNewurlParser: true,
    autoReconnect: true,
    recnnectTries: Number.MAX_VALUE,
    reconnectInterval: 10000,
  };

  await mongoose.connect(uri, mongooseOpts);
};

/**
 * Drop database, close the connection and stop mongod.
 */
module.exports.closeDatabase = async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
  await mongod.stop();
};

/**
 * Remove all the data for all db collections.
 */
module.exports.clearDatabase = async () => {
  const { collections } = mongoose.connection;

  // eslint-disable-next-line guard-for-in
  for (const key in collections) {
    const collection = collections[key];
    // eslint-disable-next-line no-await-in-loop
    await collection.deleteMany();
  }
};
