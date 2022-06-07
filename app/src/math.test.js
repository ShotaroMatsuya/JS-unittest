import { it, expect } from 'vitest';
import { add } from './math';

it('should summarize all number values in an array', () => {
  // Arrange
  const numbers = [1, 2, 3];

  // Act
  const result = add(numbers);
  const expectedResult = numbers.reduce((prevValue, curValue) => {
    return prevValue + curValue;
  }, 0);
  // Assert
  expect(result).toBe(expectedResult);
});
