import Typography from "@material-ui/core/Typography";
import { useStyles } from "./styles";
import { Box } from "@material-ui/core";

export interface ComposterMeasureProps {
  name: string;
  image: any;
  data: string;
}

export default function ComposterMeasure(props: ComposterMeasureProps) {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <img src={props.image} alt="Peso da composteira" />
      <Typography className={classes.title} component="h5" variant="body2">
        {props.name}
      </Typography>
      <Typography className={classes.measure} component="h5" variant="h6">
        {props.data}
      </Typography>
    </Box>
  );
}
