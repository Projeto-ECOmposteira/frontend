import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  materialsContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-around"
  },
  header: {
    marginBottom: theme.spacing(4),
  }
}));

export { useStyles };
