import React from 'react';
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
} from '@mui/material';

function CardGato({ gato }) {
  return (
    <Card sx={{ bgcolor: '#000', color: '#fff', height: '100%' }}>
      <CardMedia
        component="img"
        height="200"
        image={gato.image.url}
        alt={gato.name}
      />
      <CardContent>
        <Typography variant="h6" sx={{ color: 'red' }}>
          {gato.name}
        </Typography>
        <Typography variant="body2">
          <strong>Origem:</strong> {gato.origin}
        </Typography>
        <Typography variant="body2">
          <strong>Temperamento:</strong> {gato.temperament}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default CardGato;