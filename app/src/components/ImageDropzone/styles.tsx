import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  uploadPreviewContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    flexWrap: "wrap",
    paddingLeft: 0,
  },
  imagePreviewContainer: {
    display: "flex",
    justifyContent: "center",
    position: "relative",
    height: "64px",
    width: "100px",
    margin: theme.spacing(0, 1.5, 2, 1.5),
  },
  imagePreviewStyle: {
    position: "absolute",
    borderRadius: "5px",
    height: "100%",
    maxWidth: "100px",
  },
  removeImageIcon: {
    position: "absolute",
    backgroundColor: "white",
    borderRadius: "50%",
    cursor: "pointer",
    fill: "black",
    top: "2px",
    right: "2px",
    zIndex: 2,
  },
}));

export { useStyles };
