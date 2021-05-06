import Container from "@material-ui/core/Container";
import { useStyles } from "./styles";

// TODO
export default function AllowedProducts() {
  const classes = useStyles();

  return (
    <Container  component="main">
      <h1 className={classes.header}>Produtos Permitidos na Composteira</h1>
    </Container>
  );
}
