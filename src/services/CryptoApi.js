import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders={
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': 'ae90647d12mshd00b6e20a8202b3p118194jsn62414aeb35e8'
}
  
const baseUrl='https://coinranking1.p.rapidapi.com'

const createRequest=(url)=>({url,headers:cryptoApiHeaders})

export const cryptoApi = createApi({
    reducerPath:"cryptoApi",
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
      getCryptos:builder.query({
          query:(count)=>createRequest(`/coins?limit=${count}`)
      }),
       getCryptoDetails: builder.query({
      query: (coinId) => createRequest(`/coin/${coinId}`)
}),
getCryptoHistory: builder.query({
  query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
}),
    })//This  arrow  function  instantly  returns  an  object
})//This arrow function  instantly  returns  an  object

export const {
    useGetCryptosQuery,
     useGetCryptoDetailsQuery,
      useGetCryptoHistoryQuery
}=cryptoApi


















// This  is  from  rapid  api  of  coinranking  api
// var options = {
//     method: 'GET',
//     url: 'https://coinranking1.p.rapidapi.com/coins',
//     params: {
//       referenceCurrencyUuid: 'yhjMzLPhuIDl',
//       timePeriod: '24h',
//       tiers: '1',
//       orderBy: 'marketCap',
//       orderDirection: 'desc',
//       limit: '50',
//       offset: '0'
//     },
//     headers: {
//       'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
//       'x-rapidapi-key': 'ae90647d12mshd00b6e20a8202b3p118194jsn62414aeb35e8'
//     }
//   };