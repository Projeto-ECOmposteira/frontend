import Container from "@material-ui/core/Container";
import { useStyles } from "./styles";

// TODO
export default function Supermarket() {
  const classes = useStyles();

  return (
    <Container  component="main">
      <h1 className={classes.header}>Supermercados</h1>
    </Container>
  );
}
