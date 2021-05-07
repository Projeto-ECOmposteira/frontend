import Typography from "@material-ui/core/Typography";
import { useStyles } from "./styles";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Grid,
} from "@material-ui/core";
import { measures } from "./measures";
import ComposterMeasure from "../ComposterMeasure";

export default function Composter() {
  const classes = useStyles();
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <Box className={classes.header}>
          <Typography component="h3" variant="h4">
            Composteira 1
          </Typography>
          <Typography>Compostagem em andamento</Typography>
        </Box>
        <CardContent>
          <Typography component="h4" variant="body1">
            Composteira situada no patio superior do supermercado Dona de Casa
            sob responsabilidade do fiscal de qualidade de produtos do
            estabelecimento
          </Typography>
          <Grid
            container
            className={classes.measures}
            spacing={2}
            justify="space-around"
          >
            <Grid key="1" item>
              <ComposterMeasure
                name={measures.weightIcon.name}
                image={measures.weightIcon.image}
              />
            </Grid>
            <Grid key="2" item>
              <ComposterMeasure
                name={measures.ph.name}
                image={measures.ph.image}
              />
            </Grid>
            <Grid key="3" item>
              <ComposterMeasure
                name={measures.carbonNitrogen.name}
                image={measures.carbonNitrogen.image}
              />
            </Grid>
            <Grid key="4" item>
              <ComposterMeasure
                name={measures.oxygen.name}
                image={measures.oxygen.image}
              />
            </Grid>
            <Grid key="5" item>
              <ComposterMeasure
                name={measures.temperatureIcon.name}
                image={measures.temperatureIcon.image}
              />
            </Grid>
            <Grid key="6" item>
              <ComposterMeasure
                name={measures.pressureIcon.name}
                image={measures.pressureIcon.image}
              />
            </Grid>
            <Grid key="7" item>
              <ComposterMeasure
                name={measures.humidity.name}
                image={measures.humidity.image}
              />
            </Grid>
            <Grid key="8" item>
              <ComposterMeasure
                name={measures.carbonDioxide.name}
                image={measures.carbonDioxide.image}
              />
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
