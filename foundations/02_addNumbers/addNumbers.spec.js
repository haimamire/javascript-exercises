const addNumbers = require('./addNumbers')

describe('addNumbers', () => {
  test.skip('adds the numbers together', () => {
    expect(addNumbers()).toEqual(2);
  });
});
