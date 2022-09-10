import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const ApiHeaders = {
  'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
  'X-RapidAPI-Key': '90b16f941dmshf88b7733d243cacp1aeba2jsnd0c253b6b70e',
};

const baseUrl = 'https://coinranking1.p.rapidapi.com/';

const requestCreator = (url) => ({ url, headers: ApiHeaders });

export const cryptoCoinsApi = createApi({
  reducerPath: 'cryptoApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCryptoCoins: builder.query({
      query: (count) => requestCreator(`/coins?limit=${count}`),
    }),
    getCryptos: builder.query({
      query: (coinId) => requestCreator(`/coin/${coinId}`),
    }),
  }),
});

export const {
  useGetCryptoCoinsQuery, useGetCryptosQuery,
} = cryptoCoinsApi;
