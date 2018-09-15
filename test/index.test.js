/**
 * Test cases for index file. 
 */

 const sum = require('../routes/api/exampleFile');

 test('adds 1 + 2 to equal 3.', () => {
     expect(sum(1,2)).toBe(3);
 });