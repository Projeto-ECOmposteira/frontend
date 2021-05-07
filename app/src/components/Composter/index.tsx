import Typography from "@material-ui/core/Typography";
import { useStyles } from "./styles";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Grid,
} from "@material-ui/core";
import { measures } from "./measures";
import ComposterMeasure from "../ComposterMeasure";
import Warning2Icon from "../../assets/img/warning2Icon.svg";
import CheckIcon from "../../assets/img/checkIcon.svg";
import { ComposterProps } from "../../types/types";

export default function Composter(props: ComposterProps) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <Box className={classes.header}>
          <Box className={classes.infoIcon}>
            {props.status === 1 && (
              <img
                height="48px"
                width="48px"
                src={Warning2Icon}
                alt="Compostagem irregular"
              />
            )}
            {props.status === 2 && (
              <img
                height="48px"
                width="48px"
                src={CheckIcon}
                alt="Compostagem completa"
              />
            )}
          </Box>
          <Typography component="h3" variant="h4">
            {props.nome}
          </Typography>
          <Typography>
            {props.status === 0 && "Compostagem em andamento"}
            {props.status === 1 && "Compostagem irregular"}
            {props.status === 2 && "Compostagem completa"}
          </Typography>
        </Box>
        <CardContent>
          <Typography component="h4" variant="body1">
            {props.descricao}
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
                data={`${props.peso} kg`}
              />
            </Grid>
            <Grid key="2" item>
              <ComposterMeasure
                name={measures.ph.name}
                image={measures.ph.image}
                data={String(props.ph)}
              />
            </Grid>
            <Grid key="3" item>
              <ComposterMeasure
                name={measures.carbonNitrogen.name}
                image={measures.carbonNitrogen.image}
                data={`${props.cn}/1`}
              />
            </Grid>
            <Grid key="4" item>
              <ComposterMeasure
                name={measures.oxygen.name}
                image={measures.oxygen.image}
                data={`${props.o2} ml/g`}
              />
            </Grid>
            <Grid key="5" item>
              <ComposterMeasure
                name={measures.temperatureIcon.name}
                image={measures.temperatureIcon.image}
                data={`${props.temperatura} °C`}
              />
            </Grid>
            <Grid key="6" item>
              <ComposterMeasure
                name={measures.pressureIcon.name}
                image={measures.pressureIcon.image}
                data={`${props.pressao} hpa`}
              />
            </Grid>
            <Grid key="7" item>
              <ComposterMeasure
                name={measures.humidity.name}
                image={measures.humidity.image}
                data={`${props.umidade} %`}
              />
            </Grid>
            <Grid key="8" item>
              <ComposterMeasure
                name={measures.carbonDioxide.name}
                image={measures.carbonDioxide.image}
                data={`${props.co2} ppm`}
              />
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
      <CardActionArea className={classes.buttons}>
        <Button className={classes.sendEmailButton}>Enviar e-mail</Button>
        <Button className={classes.detailsButton}>Detalhes</Button>
      </CardActionArea>
    </Card>
  );
}
