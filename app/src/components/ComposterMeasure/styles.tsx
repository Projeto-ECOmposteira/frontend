import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    minWidth: "100px",
    maxWidth: "100px",
    maxHeight: "120px",
    height: "100%",
    marginTop: theme.spacing(1),
  },
  title: {
    marginTop: theme.spacing(1),
    textAlign: "center",
  },
  measure: {
    fontWeight: 900,
    textAlign: "center",
  },
}));

export { useStyles };
