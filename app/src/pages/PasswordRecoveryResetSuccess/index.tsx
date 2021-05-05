import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { useStyles } from "./styles";
import SuccessRegister from "../../assets/img/successRegister.svg";

export default function PasswordRecoveryReset() {
  const classes = useStyles();
  return (
    <Container>
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
              src={SuccessRegister}
              alt="Projeto ECOmposteira"
            />
          </div>
          <p className={classes.paragraph}>Senha alterada com sucesso! Você pode seguir em frente e fazer login agora.</p>
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
