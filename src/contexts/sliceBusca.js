import { createSlice } from '@reduxjs/toolkit';

const sliceBusca = createSlice({
  name: 'busca',
  initialState: {
    query: '',
    resultados: [],
    racas: [],
    fotos: [],
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
    setFotos: (state, action) => {
      state.fotos = action.payload;
    },
  },
});

export const { setQuery, setResultados, setRacas, setFotos } = sliceBusca.actions;
export default sliceBusca.reducer;
