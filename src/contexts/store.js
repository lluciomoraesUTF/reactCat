import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './sliceBusca';

export const store = configureStore({
  reducer: {
    search: searchReducer,
  },
});
