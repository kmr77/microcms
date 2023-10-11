import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'tgs03txlmf',
  apiKey: process.env.API_KEY,
});