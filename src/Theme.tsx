import { createTheme } from '@mui/material/styles';

// Theme For Log In Page
const theme = createTheme({
  palette: {
    primary: {
      main: '#6A39F1',
    },
  },
  typography: {
    h1: {
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: '34px',
      lineHeight: '64px',
      letterSpacing: '0.25px',
      color: '#1C1C28',
    },
    caption: {
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: '400',
      fontSize: '16px',
      lineHeight: '28px',
      letterSpacing: '0.3px',
      color: '#555770',
    },
    overline: {
      fontFamily: 'Inter',
      fontStyle: 'normal',
      fontWeight: '700',
      fontSize: '14px',
      lineHeight: '24px',
      letterSpacing: '0.3px',
      textTransform: 'none',
      textDecoration: 'none',
      color: '#555770',
    },
  },
});

export default theme;
