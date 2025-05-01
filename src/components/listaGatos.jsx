import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setRacas } from '../contexts/sliceBusca';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Grid,
  CircularProgress,
  Box,
} from '@mui/material';

function ListaGatos() {
  const dispatch = useDispatch();
  const racas = useSelector((state) => state.busca.racas);

  useEffect(() => {
    async function buscarRacas() {
      try {
        const resposta = await fetch('https://api.thecatapi.com/v1/breeds');
        const dados = await resposta.json();
        dispatch(setRacas(dados.slice(0, 12)));
      } catch (erro) {
        console.error('Erro ao buscar raças:', erro);
      }
    }

    buscarRacas();
  }, [dispatch]);

  if (!racas.length) {
    return <CircularProgress sx={{ color: 'primary.main', mt: 4 }} />;
  }

  return (
    <Box>
      <Typography variant="h4" gutterBottom color="primary">
        Raças de Gatos
      </Typography>
      <Grid container spacing={3}>
        {racas.map((raca) => (
          <Grid item xs={12} sm={6} md={4} key={raca.id}>
            <Card sx={{ bgcolor: '#000', color: '#fff' }}>
              {raca.image?.url && (
                <CardMedia
                  component="img"
                  height="200"
                  image={raca.image.url}
                  alt={raca.name}
                />
              )}
              <CardContent>
                <Typography variant="h6" color="primary">
                  {raca.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {raca.origin} — {raca.temperament}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ListaGatos;
