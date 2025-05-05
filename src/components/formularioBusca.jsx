import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setQuery, setResultados, setFotos } from '../contexts/sliceBusca';
import { Box, TextField, Button } from '@mui/material';

function FormularioBusca() {
  const [busca, setBusca] = useState('');
  const dispatch = useDispatch();

  async function buscar() {
    dispatch(setQuery(busca));

    try {
      const resposta = await fetch('https://api.thecatapi.com/v1/breeds');
      const dados = await resposta.json();
      const resultadoFiltrado = dados.filter((r) =>
        r.name.toLowerCase().includes(busca.toLowerCase())
      );
      dispatch(setResultados(resultadoFiltrado));

      if (resultadoFiltrado.length > 0) {
        const id = resultadoFiltrado[0].id;
        const resFotos = await fetch(
          `https://api.thecatapi.com/v1/images/search?breed_ids=${id}&limit=5`
        );
        const fotosJson = await resFotos.json();
        dispatch(setFotos(fotosJson));
      }
    } catch (erro) {
      console.error('Erro ao buscar raça:', erro);
    }
  }

  return (
    <Box display="flex" alignItems="center" gap={2}>
      <TextField
        label="Buscar raça"
        variant="outlined"
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
        size="small"
      />
      <Button onClick={buscar} variant="contained" color="primary">
        Buscar
      </Button>
    </Box>
  );
}

export default FormularioBusca;
