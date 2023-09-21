import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// if we hadn't added a proxy then our baseurl would be the backend server.     
const baseQuery = fetchBaseQuery({baseUrl : ''});

export const apiSlice = createApi({
    baseQuery,
    tagTypes : ['User'],
    endpoints : (builder) => ({}),
});