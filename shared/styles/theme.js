import { createTheme, responsiveFontSizes } from '@mui/material/styles';
const { palette } = createTheme();
// Create a theme instance.
let theme = createTheme({
  // typography: {
  //   fontFamily: [
  //     "Montserrat",
  //     "Roboto",
  //     '"Helvetica Neue"',
  //     "Arial",
  //     "sans-serif",
  //   ].join(","),
  // },
  palette: {
    primary: {
      main: "#17191B",
    },
    secondary: {
      main: "#F22828",
    },
    info: {
      main: "hsla(0, 0%, 100%, .6)"
    },

    background: {
      default: "#fff",
    },
  },
});
theme = responsiveFontSizes(theme);
export default theme;
