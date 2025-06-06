// src/lib/theme.ts
import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#a47864',
    },
    secondary: {
      main: '#c69d8f',
    },
    background: {
      default: '#fffaf5',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
  },
})

export default theme
