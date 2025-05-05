import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setRacas } from '../contexts/sliceBusca';
import { Grid, CircularProgress, Box, Typography } from '@mui/material';
import CardGato from './cardGato';

function ListaGatos() {
  const dispatch = useDispatch();
  const racas = useSelector((state) => state.busca.racas);
  const query = useSelector((state) => state.busca.query);
  const resultados = useSelector((state) => state.busca.resultados);
  const fotos = useSelector((state) => state.busca.fotos);

  useEffect(() => {
    async function buscarRacas() {
      try {
        const resposta = await fetch('https://api.thecatapi.com/v1/breeds');
        const dados = await resposta.json();
        dispatch(setRacas(dados));
      } catch (erro) {
        console.error('Erro ao buscar raças:', erro);
      }
    }

    buscarRacas();
  }, [dispatch]);

  if (query && resultados.length > 0) {
    return (
      <Box mt={4}>
        <Typography variant="h4" color="primary" gutterBottom>
          Resultado da busca:
        </Typography>
        <CardGato raca={resultados[0]} modoDetalhe fotos={fotos} />
      </Box>
    );
  }

  if (!racas.length) {
    return <CircularProgress sx={{ color: 'primary.main', mt: 4 }} />;
  }

  return (
    <Box mt={4}>
      <Typography variant="h4" color="primary" gutterBottom>
        Raças de Gatos
      </Typography>
      <Grid container spacing={3}>
        {racas.map((raca) => (
          <Grid item xs={12} sm={6} md={4} key={raca.id}>
            <CardGato raca={raca} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ListaGatos;
