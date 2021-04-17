import { Container } from "@material-ui/core";
import SuccessRegister from "../../assets/img/successRegister.svg";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./styles";

export default function SupermarketRegisterSuccess() {
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
          <h2>Informações do proprietário do supermercado</h2>
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
