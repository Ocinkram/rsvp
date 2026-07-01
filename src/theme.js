import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#555f4c',
      dark: '#6f7c61',
      contrastText: '#E4E2E0',
    },
    background: {
      default: '#E4E2E0',
      paper: '#ffffff',
    },
    text: {
      primary: '#444444',
    },
  },
  typography: {
    fontFamily: '"Cormorant Garamond", serif',
    h1: {
      fontFamily: '"Great Vibes", cursive',
      fontSize: '3rem',
      '@media (min-width:900px)': {
        fontSize: '5rem',
      },
    },
    h2: {
      fontFamily: '"Great Vibes", cursive',
      fontSize: '2rem',
      '@media (min-width:900px)': {
        fontSize: '3rem',
      },
    },
    h3: {
      fontFamily: '"Cormorant Garamond", serif',
      fontWeight: 600,
      fontSize: '1.75rem',
      '@media (min-width:900px)': {
        fontSize: '2.5rem',
      },
    },
    h4: {
      fontFamily: '"Great Vibes", cursive',
      fontSize: '1.5rem',
      '@media (min-width:900px)': {
        fontSize: '2.125rem',
      },
    },
    h5: {
      fontFamily: '"Cormorant Garamond", serif',
      fontWeight: 600,
      fontSize: '1.25rem',
      '@media (min-width:900px)': {
        fontSize: '1.5rem',
      },
    },
    h6: {
      fontFamily: '"Cormorant Garamond", serif',
      fontWeight: 600,
    },
    subtitle1: {
      fontFamily: '"Cormorant Garamond", serif',
    },
    subtitle2: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    },
    body1: {
      fontFamily: '"Cormorant Garamond", serif',
    },
    body2: {
      fontFamily: '"Cormorant Garamond", serif',
    },
    caption: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    },
    button: {
      fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: 'none',
        },
        containedPrimary: {
          color: '#E4E2E0',
          '&:hover': {
            backgroundColor: '#6f7c61',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: '0 8px 24px rgba(0,0,0,0.08)',
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 12,
        },
      },
    },
  },
});

export default theme;
