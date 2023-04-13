import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';
import { apiConfig } from './constans';
import IItem from 'interfaces/IItem';

interface Responce {
  page: number;
  next: string;
  entries: number;
  results: IItem[];
}

export const moviesApi = createApi({
  reducerPath: 'moviesApi',
  baseQuery: fetchBaseQuery({ baseUrl: apiConfig.baseUrl }),
  endpoints: (build) => ({
    fetchAllMovies: build.query<Responce, string>({
      query: () => ({
        url: '/titles',
        headers: apiConfig.headers,
      }),
    }),

    fetchSearchMovies: build.query<Responce, string>({
      query: (url) => ({
        url: `/titles/search/title/${url}`,
        headers: apiConfig.headers,
      }),
    }),
  }),
});
