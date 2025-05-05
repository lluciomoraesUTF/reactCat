import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Box,
} from '@mui/material';

function CardGato({ raca, modoDetalhe = false, fotos = [] }) {
  if (!raca) return null;

  return (
    <Card
      sx={{
        bgcolor: '#000',
        color: '#fff',
        display: 'flex',
        flexDirection: modoDetalhe ? 'row' : 'column',
        gap: 2,
        p: 2,
        alignItems: 'center',
      }}
    >
      {raca.image?.url && (
        <CardMedia
          component="img"
          image={raca.image.url}
          alt={raca.name}
          sx={{
            width: modoDetalhe ? 300 : '100%',
            height: modoDetalhe ? 300 : 200,
            objectFit: 'cover',
            borderRadius: 2,
          }}
        />
      )}
      <CardContent sx={{ flex: 1 }}>
        <Typography variant="h5" color="primary">
          {raca.name}
        </Typography>
        <Typography variant="body1">
          <strong>Origem:</strong> {raca.origin}
        </Typography>
        <Typography variant="body1">
          <strong>Temperamento:</strong> {raca.temperament}
        </Typography>
        {modoDetalhe && (
          <>
            {raca.description && (
              <Typography variant="body2" mt={2}>
                <strong>Descrição:</strong> {raca.description}
              </Typography>
            )}
            {raca.life_span && (
              <Typography variant="body2">
                <strong>Expectativa de vida:</strong> {raca.life_span} anos
              </Typography>
            )}
            {raca.weight?.metric && (
              <Typography variant="body2">
                <strong>Peso médio:</strong> {raca.weight.metric} kg
              </Typography>
            )}
            {fotos.length > 0 && (
              <Box mt={2} display="flex" gap={2} flexWrap="wrap">
                {fotos.map((foto, index) => (
                  <img
                    key={index}
                    src={foto.url}
                    alt={`Foto ${index + 1} de ${raca.name}`}
                    style={{ width: 150, height: 150, objectFit: 'cover', borderRadius: 8 }}
                  />
                ))}
              </Box>
            )}
          </>
        )}
      </CardContent>
    </Card>
  );
}

export default CardGato;
