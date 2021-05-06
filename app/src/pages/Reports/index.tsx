import Container from "@material-ui/core/Container";
import { useStyles } from "./styles";

// TODO
export default function Reports() {
  const classes = useStyles();

  return (
    <Container  component="main">
      <h1 className={classes.header}>Relatórios das Composteiras</h1>
    </Container>
  );
}
