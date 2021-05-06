import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    maxWidth: "215px",
  },
  materialImageContainer: {
    width: "100%",
    textAlign: "center",
    backgroundColor: theme.palette.primary.light,
  },
  materialName: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
  },
}));

export { useStyles };
