import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around"
  },
  header: {
    marginBottom: theme.spacing(6),
  },
  reportTitle: {
    marginBottom: theme.spacing(2),
    fontWeight: 500,
  }
}));

export { useStyles };
