import { createSlice } from '@reduxjs/toolkit';

const sliceBusca = createSlice({
  name: 'busca',
  initialState: {
    query: '',
    resultados: [],
    racas: [], 
  },
  reducers: {
    setQuery: (state, action) => {
      state.query = action.payload;
    },
    setResultados: (state, action) => {
      state.resultados = action.payload;
    },
    setRacas: (state, action) => {
      state.racas = action.payload;
    },
  },
});

export const { setQuery, setResultados, setRacas } = sliceBusca.actions;
export default sliceBusca.reducer;
