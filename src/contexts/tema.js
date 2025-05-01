import { createTheme } from '@mui/material/styles';

const tema = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#d32f2f', 
    },
    secondary: {
      main: '#000000', 
    },
    background: {
      default: '#ffffff', 
    },
    text: {
      primary: '#000000',
      secondary: '#d32f2f',
    },
  },
  typography: {
    fontFamily: 'Arial, sans-serif',
  },
});

export default tema;
