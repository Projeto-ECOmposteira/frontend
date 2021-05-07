import { Grid } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Composter from "../../components/Composter";

// TODO
export default function Home() {
  return (
    <Container component="main">
      <Grid container justify="space-around">
        <Grid item>
          <Composter />
        </Grid>
        <Grid item>
          <Composter />
        </Grid>
      </Grid>
    </Container>
  );
}
