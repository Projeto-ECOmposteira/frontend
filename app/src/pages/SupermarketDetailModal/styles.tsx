import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#FFF",
    borderRadius: "10px",
    padding: "0px 20px 20px 20px",
  },
  marginTop: {
    marginTop: "12px",
  },
  spaceBetween:{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  icon:{
    height: "50px",
    width: "50px",
  },
  bold: {
    fontWeight: "bold",
  },
  gridContainer: {
    marginBottom: "10px",
  },
  breakLine: {
    wordBreak: 'break-all',
  }
}));

export { useStyles };
