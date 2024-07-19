import { sum } from '../sum';

test('adds 1 + 2 to equal 3', () => {
  const result = sum(6, 3);
    //ASSERTION
  expect(result).toBe(9);
});
