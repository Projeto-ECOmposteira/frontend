import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
  },
  logoContainer: {
    margin: theme.spacing(1),
    alignSelf: "center",
  },
  logo: {
    height: "96px",
    width: "96px",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    maxWidth: "400px",
    alignSelf: "center",
  },
}));

export { useStyles };
