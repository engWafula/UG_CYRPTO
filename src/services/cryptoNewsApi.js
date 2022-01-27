import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsApiHeaders={
     'x-bingapis-sdk': 'true',
    'x-rapidapi-host': 'bing-news-search1.p.rapidapi.com',
    'x-rapidapi-key': 'ae90647d12mshd00b6e20a8202b3p118194jsn62414aeb35e8'
}
 const baseUrl ="https://bing-news-search1.p.rapidapi.com"

const createRequest=(url)=>({url,headers:cryptoNewsApiHeaders})

export const cryptoNewsApi = createApi({
    reducerPath:"cryptoNewsApi",
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
      getCryptoNews:builder.query({
          query:({newsCategory,count})=>createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
      })
    })//This  arrow  function  instantly  returns  an  object
})//This arrow function  instantly  returns  an  object

export const {
    useGetCryptoNewsQuery
}=cryptoNewsApi
