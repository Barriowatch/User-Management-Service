/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
/* eslint-disable arrow-body-style */

const personalProviderModel = {};

let data = [];

personalProviderModel.find = jest.fn(() => data);

personalProviderModel.findById = jest.fn((id) => {
  return data.find(user => user.id === id);
});

personalProviderModel.create = jest.fn((user) => {
  data.push(user);
  return Promise.resolve();
});
// personalProviderModel.create = jest.fn((user) => {
//   user.id = data.length;
//   data.push(user);
//   return user;
// });

personalProviderModel.findByIdAndUpdate = jest.fn((id, updateduser) => {
  const index = data.findIndex(user => user.id === id);
  if (index >= 0) {
    data[index] = updateduser;
  }
  return Promise.resolve();
});

personalProviderModel.findByIdAndRemove = jest.fn((id) => {
  const index = data.findIndex(user => user.id === id);
  data.splice(index, 1);
  return id;
});

personalProviderModel.count = () => data.length;
personalProviderModel.reset = () => { data = []; };

module.exports = personalProviderModel;
