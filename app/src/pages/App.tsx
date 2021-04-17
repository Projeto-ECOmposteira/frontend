import CssBaseline from "@material-ui/core/CssBaseline";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import { AuthProvider } from "../contexts/auth";
import Routes from "../routes";
import { SnackbarProvider } from 'notistack';

const theme = createMuiTheme({
  palette: {
    primary: { light: "#FEFAE0", main: "#DDA15E", dark: "#BC6C25" },
    secondary: { light: "#606C38", main: "#283618" },
    success: { main: "#4CAF50" },
    error: { main: "#E10050" },
  },
});

function App() {
  return (
    <SnackbarProvider maxSnack={3}>
      <AuthProvider>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes />
        </ThemeProvider>
      </AuthProvider>
    </SnackbarProvider>
  );
}

export default App;
