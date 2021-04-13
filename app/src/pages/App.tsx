import React from "react";
import Button from "@material-ui/core/Button";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
  palette: {
    primary: { light: "#FEFAE0", main: "#DDA15E", dark: "#BC6C25" },
    secondary: { light: "#606C38", main: "#283618" },
    success: { main: "#4CAF50" },
    error: { main: "#E10050" }
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <header>
          <Button variant="contained" color="secondary">
            Hello World
          </Button>
        </header>
      </div>
    </ThemeProvider>
  );
}

export default App;
