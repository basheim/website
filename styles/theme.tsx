import { createMuiTheme } from '@material-ui/core/styles';
import { red, yellow } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    warning: {
      main: yellow.A400
    },
    
  },
});

export default theme;