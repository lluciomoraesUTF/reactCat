import React from 'react';
import { useSelector } from 'react-redux';
import {
  Typography,
  Box,
  Grid,
  Card,
  CardMedia,
  Container
} from '@mui/material';

function ResultadoBusca() {
  const resultados = useSelector((state) => state.busca.resultados);

  console.log("Resultados da busca:", resultados);

  if (!Array.isArray(resultados) || resultados.length === 0) {
    return (
      <Container sx={{ mt: 4 }}>
        <Typography variant="body1">Nenhum resultado encontrado.</Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom sx={{ color: 'red', fontWeight: 'bold' }}>
        Imagens encontradas:
      </Typography>

      <Grid container spacing={3} sx={{ mt: 1 }}>
        {resultados.slice(0, 6).map((img, index) => (
          <Grid item xs={12} sm={6} md={4} key={img.id || index}>
            <Card>
              <CardMedia
                component="img"
                height="200"
                image={img.url}
                alt={`Imagem ${index + 1}`}
              />
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default ResultadoBusca;
  