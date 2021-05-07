import { Box, Typography } from "@material-ui/core";
import { useStyles } from "./styles";
import { MaterialProps } from "../../types/types"; 


export default function Material(props: MaterialProps) {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.materialImageContainer}>
        <img src={props.imageLink} height="100" width="100" alt={props.name} />
      </Box>
      <Typography className={classes.materialName} variant="h5" component="h3" gutterBottom>
        {props.name}
      </Typography>
    </Box>
  );
}
