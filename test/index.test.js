/**
 * Test cases for index file.
 */

require('./test').sum;

test('performs addition', () => {
  expect(sum(1, 2)).toBe(3);
});
