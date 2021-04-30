import { Container } from "@material-ui/core";
import SuccessMail from "../../assets/img/successMail.svg";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./styles";

export default function PasswordRecoverySuccess() {
  const classes = useStyles();
  return (
    <Container component="main" maxWidth="xs">
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={5}
      >
        <div className={classes.container}>
          <div className={classes.logoContainer}>
            <img
              src={SuccessMail}
              alt="Projeto ECOmposteira"
            />
          </div>
          <p className={classes.paragraph}>Caso exista uma conta com este e-email ele irá receber instruções para recuperar a senha em breve.</p>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
            href="/"
          >
            IR PARA TELA DE LOGIN
          </Button>
        </div>
      </Grid>
    </Container>
  );
}
