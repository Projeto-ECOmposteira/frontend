import Container from "@material-ui/core/Container";
import { useStyles } from "./styles";

// TODO
export default function SignIn() {
  const classes = useStyles();

  return (
    <Container  component="main">
      <h1 className={classes.header}>Homepage</h1>
    </Container>
  );
}
