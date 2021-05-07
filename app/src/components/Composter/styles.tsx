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
  infoIcon: {
    position: "absolute",
    top: 10,
    right: 10,
  },
  measures: {
    alignContent: "space-between",
    marginTop: theme.spacing(1),
  },
  buttons: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing(1),
  },
  sendEmailButton: {
    color: "#2C98F0",
  },
  detailsButton: {
    fontWeight: "bold",
    color: "#2C98F0",
  },
}));

export { useStyles };
