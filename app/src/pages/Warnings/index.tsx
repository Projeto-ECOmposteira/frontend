import Container from "@material-ui/core/Container";
import { useStyles } from "./styles";

// TODO
export default function Warnings() {
  const classes = useStyles();

  return (
    <Container  component="main">
      <h1 className={classes.header}>Composteiras Desconectadas</h1>
    </Container>
  );
}
