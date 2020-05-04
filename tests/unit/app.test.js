/* eslint-disable arrow-body-style */
/* eslint-disable no-unused-vars */
/* eslint-disable global-require */

const express = require('express');
const userRouter = require('../../src/routes/index');

const mockUserRoutes = jest.fn(() => { return (req, res, next) => {}; });
userRouter.stack = mockUserRoutes;

describe('Express App', () => {
  test('Should return valid express application', () => {
    const app = require('../../src/app');
    expect(typeof (app)).toEqual('function');
  });
});
