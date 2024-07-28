import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const baseQuery = fetchBaseQuery({baseUrl:''})

export const apiSlice = createApi({
    baseQuery,
    tagTypes: ['User'], // to cache user and use that data
    endpoints: (builder)=> ({})
})

// parent slice 