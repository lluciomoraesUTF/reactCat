import { createSlice } from '@reduxjs/toolkit';

const buscaSlice = createSlice({
  name: 'busca',
  initialState: {
    termo: '',
    resultados: [],
  },
  reducers: {
    definirTermo: (state, action) => {
      state.termo = action.payload;
    },
    definirResultados: (state, action) => {
      state.resultados = action.payload;
    },
  },
});

export const { definirTermo, definirResultados } = buscaSlice.actions;
export default buscaSlice.reducer;
