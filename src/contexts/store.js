import { configureStore } from '@reduxjs/toolkit';
import searchReducer from './sliceBusca';

const store = configureStore({
  reducer: {
    busca: searchReducer,
  },
});

export default store;
