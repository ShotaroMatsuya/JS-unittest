import { it, expect } from 'vitest';
import { generateToken } from './async-example';

it('should generate a token value', () => {
  const testUserEmail = 'test@test.com';

  generateToken(testUserEmail, (err, token) => {
    expect(token).toBeDefined(2);
  });
});
