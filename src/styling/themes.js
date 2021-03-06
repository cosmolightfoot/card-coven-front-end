import { createMuiTheme } from '@material-ui/core/styles';

export const mainTheme = createMuiTheme({
  palette: {
    primary: {
      light: '#6f74dd',
      main: '#3949ab',
      dark: '#00227b',
      contrastText: '#ffffff'
    },
    secondary: {
      light: '#9cff57',
      main: '#64dd17',
      dark: '#1faa00',
      contrastText: '#000000'
    },
    grey: {
      main: '#E0E0E0'
    }
  },
  typography: {
    h2: {
      fontSize: '2.6rem'
    }
  }
});
