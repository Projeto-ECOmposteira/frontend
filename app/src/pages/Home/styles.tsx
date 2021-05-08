import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  header: {
    width: "100%",
  },
  titleButton: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    width: "400px",
    height: "40px",
  },
}));

export { useStyles };
