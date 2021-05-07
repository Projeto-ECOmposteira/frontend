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
  buttons: {
    display: "flex",
    justifyContent: "space-between",
    padding: theme.spacing(2),
    paddingTop: 0,
  },
  sendEmailButton: {
    color: "#2C98F0",
  },
  detailsButton: {
    fontWeight: "bold",
    color: "#2C98F0",
  }
}));

export { useStyles };
