import React, { useContext } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { useStyles } from "./styles";
import Copyright from "../../components/Copyright";
import LogoImage from "../../assets/img/logo.svg";
import AuthContext from "../../contexts/auth";

export default function SignIn() {
  const classes = useStyles();
  const { signIn } = useContext(AuthContext);

  async function handleSign(event:any) {
    event.preventDefault();
    signIn();
  }

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.paper}>
        <div className={classes.logoContainer}>
          <img
            className={classes.logo}
            src={LogoImage}
            alt="Projeto ECOmposteira"
          />
        </div>
        <form className={classes.form} noValidate onSubmit={handleSign}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="E-mail"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Senha"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
          >
            Entrar
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Esqueceu a senha?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Cadastrar supermercado"}
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}
