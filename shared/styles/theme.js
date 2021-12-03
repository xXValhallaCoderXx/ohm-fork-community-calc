import { createTheme, responsiveFontSizes } from "@material-ui/core/styles";
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
      main: "#d8cab9",
    },
    myAwesomeColor: palette.augmentColor({
      color: {
        main: "#00ff00"
      }
    }),

    background: {
      default: "#fff",
    },
  },
});
theme = responsiveFontSizes(theme);
export default theme;
