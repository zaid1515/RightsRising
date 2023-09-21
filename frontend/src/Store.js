import { configureStore } from "@reduxjs/toolkit";
import authReducer from './slices/authSlice';
import { apiSlice } from "./slices/apiSlice";


/*
Store Configuration:

const store = configureStore({ ... });: This line creates a Redux store by calling the configureStore function. Inside the function, you pass an object with the store configuration options.

reducer: {}: In the reducer field, you can specify the reducers that define how the application's state should be updated when actions are dispatched. In your code, an empty object {} is provided, meaning there are no reducers defined yet. You should replace {} with the actual reducer(s) that you want to use in your application.

middleware: (getDefaultMiddleware) => getDefaultMiddleware(),: Middleware is a way to intercept and handle actions before they reach the reducers. By default, the getDefaultMiddleware function from Redux Toolkit is used, which includes middleware like Redux Thunk for handling asynchronous actions. This line essentially sets up the default middleware for your store.

devTools: true: This configuration option enables the use of Redux DevTools, which is a browser extension that provides advanced debugging and time-traveling capabilities for inspecting the state changes in your Redux store during development.

*/
const store = configureStore({
    reducer : {
        auth : authReducer,
        [apiSlice.reducerPath] : apiSlice.reducer,
    },
    middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(apiSlice.middleware),
    devTools : true
});

export default store