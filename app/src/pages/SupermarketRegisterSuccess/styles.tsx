import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  logoContainer: {
    margin: theme.spacing(1),
    alignSelf: "center",
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export { useStyles };
