import fetch, { Headers, Request, Response } from 'cross-fetch';

import { server } from './src/server';
import { withCookies } from './src/tests/cookies';

const MOCKED_SERVER = process.env.MOCKED_SERVER === 'true';

beforeAll(() => {
  globalThis.fetch = withCookies(fetch);
  global.Response = Response;
  global.Headers = Headers;
  global.Request = Request;

  if (MOCKED_SERVER) {
    server.listen();
  }
});

beforeEach(() => {
  globalThis.fetch = withCookies(fetch);
});

if (MOCKED_SERVER) {
  afterEach(() => server.resetHandlers());

  afterAll(() => server.close());
}
