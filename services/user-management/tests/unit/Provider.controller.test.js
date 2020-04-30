const mockRequest = userData => ({
  user: {
    firstname: '',
    lastname: '',
    email: '',
  },
});

const mockResponse = () => {
  const res = {};
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnvalue(res);
  return res;
};

describe('', () => {
  test('should return ');
});
