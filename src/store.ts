import { configureStore } from '@reduxjs/toolkit';
import { api } from './api';
import { rtkToastMiddleware } from './api/books';
import viewedBooksReducer from './features/book-search/book-search-slice';

export const store = configureStore({
  reducer: {
    // Add the generated reducer as a specific top-level slice
    [api.reducerPath]: api.reducer,
    viewedBooks: viewedBooksReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware).concat(rtkToastMiddleware),
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
