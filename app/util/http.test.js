import { it, vi, expect } from 'vitest';

import { sendDataRequest } from './http';

const testResponseData = { testKey: 'testData' };

const testFetch = vi.fn((url, options) => {
  return new Promise((resolve, reject) => {
    if (typeof options.body !== 'string') {
      return reject('Not a string');
    }

    const testResponse = {
      ok: true,
      json() {
        return new Promise((resolve, reject) => {
          resolve(testResponseData);
        });
      },
    };
    resolve(testResponse);
  });
});

vi.stubGlobal('fetch', testFetch);

it('should return any available response data', () => {
  const testData = { key: 'test' };

  return expect(sendDataRequest(testData)).resolves.toEqual(testResponseData);
});
it('should return any available response data', async () => {
  // check whether 'Json.stringify' work or not
  const testData = { key: 'test' };

  let errorMessage;

  try {
    await sendDataRequest(testData);
  } catch (error) {
    errorMessage = error;
  }

  expect(errorMessage).not.toBe('Not a string.');
});
