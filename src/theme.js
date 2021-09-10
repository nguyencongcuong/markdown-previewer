import { createTheme } from '@material-ui/core/styles';

let theme = createTheme({
  palette: {
    primary: {
      light: "#D4D8DB",
      main: "#576269",
      dark: "#292E31"
    }
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
    fontSize: 18,
  }
})

export { theme }