import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    maxWidth: "500px",
  },
  header: {
    padding: theme.spacing(2),
    textAlign: "center",
    backgroundColor: theme.palette.primary.light,
  },
  measures: {
    alignContent: "space-between",
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

export { useStyles };
