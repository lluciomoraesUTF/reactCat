import React from 'react';
import { ThemeProvider, CssBaseline, Container, Typography, Box } from '@mui/material';
import { Provider } from 'react-redux';
import store from './contexts/store';
import tema from './contexts/tema';

import FormularioBusca from './components/formularioBusca';
import ListaGatos from './components/listaGatos';
import ResultadoBusca from './components/resultadoBusca';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={tema}>
        <CssBaseline />
        <Container maxWidth="md" sx={{ py: 4 }}>
          <Box sx={{ textAlign: 'center', mb: 4 }}>
            <Typography variant="h3" color="primary">
              Cat Finder
            </Typography>
          </Box>

          <FormularioBusca />
          <ResultadoBusca />
          <ListaGatos />
        </Container>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
