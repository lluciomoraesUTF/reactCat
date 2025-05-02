import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setRacas } from '../contexts/sliceBusca';
import CardGato from './cardGato';
import {
  Typography,
  CircularProgress,
  Box,
  Grid,
} from '@mui/material';

function ListaGatos() {
  const dispatch = useDispatch();
  const racas = useSelector((state) => state.busca.racas);
  const [carregando, setCarregando] = useState(true);

  useEffect(() => {
    async function buscarRacasComImagens() {
      try {
        const resposta = await fetch('https://api.thecatapi.com/v1/breeds');
        const dados = await resposta.json();

        const racasComImagens = await Promise.all(
          dados.map(async (raca) => {
            const resImg = await fetch(
              `https://api.thecatapi.com/v1/images/search?breed_ids=${raca.id}`
            );
            const [imgData] = await resImg.json();
            return {
              ...raca,
              image: imgData?.url ? { url: imgData.url } : null,
            };
          })
        );

        dispatch(setRacas(racasComImagens.filter((r) => r.image)));
      } catch (erro) {
        console.error('Erro ao buscar raças ou imagens:', erro);
      } finally {
        setCarregando(false);
      }
    }

    buscarRacasComImagens();
  }, [dispatch]);

  if (carregando) {
    return <CircularProgress sx={{ color: 'primary.main', mt: 4 }} />;
  }

  if (!racas || racas.length === 0) {
    return null; // Oculta mensagem
  }

  return (
    <Box sx={{ p: 2 }}>
      <Typography variant="h4" gutterBottom sx={{ color: 'red' }}>
        Raças de Gatos
      </Typography>
      <Grid container spacing={2}>
        {racas.slice(0, 9).map((gato) => (
          <Grid item xs={12} sm={6} md={4} key={gato.id}>
            <CardGato gato={gato} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ListaGatos;
