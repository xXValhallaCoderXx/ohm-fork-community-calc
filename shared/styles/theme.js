import { createTheme, responsiveFontSizes } from "@material-ui/core/styles";

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
    text: {
      primary: "#17191B",
      secondary: "#17191B",
      // disabled: "",
      // hint: ""
    },
    primary: {
      main: "#17191B",
    },
    secondary: {
      main: "#d8cab9",
    },

    background: {
      default: "#fff",
    },
  },
});
theme = responsiveFontSizes(theme);
export default theme;
