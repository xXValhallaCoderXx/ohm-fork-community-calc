import { createTheme, responsiveFontSizes } from "@material-ui/core/styles";

// Create a theme instance.
let theme = createTheme({
  palette: {
    text: {
      primary: "red",
      secondary: "green",
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