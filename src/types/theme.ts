import { createTheme } from '@mui/material/styles';
import { deepPurple } from '@mui/material/colors';

declare module '@mui/material/styles' {
  interface Theme {
    status: {
      danger: string;
      primary: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
      primary?: string;
    };
  }
}

const theme = createTheme({
  status: {
    danger: deepPurple[500],
    primary: deepPurple[600]
  }
});

export default theme;
