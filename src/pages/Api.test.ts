import request from 'supertest';
import { apiConfig } from 'service/constans';

describe('API request test', () => {
  it('Testing a request to receive all movies', async () => {
    const res = await request(apiConfig.baseUrl).get('/titles').set(apiConfig.headers);
    expect(res.statusCode).toBe(200);
    expect(res.body.error).toBe(undefined);
  });

  it('Testing a request to receive all movies', async () => {
    const res = await request(apiConfig.baseUrl)
      .get('/titles/search/title/test')
      .set(apiConfig.headers);
    expect(res.statusCode).toBe(200);
    expect(res.body.error).toBe(undefined);
  });
});
