import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      backgroundColor: theme.palette.primary.light,
      zIndex: theme.zIndex.drawer + 1,
      transition: theme.transitions.create(["width", "margin"], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
    },
    logo: {
      height: "48px",
      width: "48px",
    },
    logout: {
      marginLeft: theme.spacing(1.5),
    },
    avatar: {
      backgroundColor: theme.palette.primary.main,
    },
    userRole: {
      fontSize: "14px",
      fontWeight: "bold",
    },
    username: {
      fontSize: "20px",
    },
    menuButton: {
      marginRight: theme.spacing(1),
      [theme.breakpoints.down("xs")]: {
        marginRight: 0,
      },
    },
    userContainer: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
    },
    userInfo: {
      marginRight: "1rem",
      [theme.breakpoints.down("xs")]: {
        display: "none",
      },
    },
    title: {
      flexGrow: 1,
      fontWeight: 500,
      marginLeft: "0.5rem",
      [theme.breakpoints.down("xs")]: {
        fontSize: "16px",
      },
    },
  })
);

export { useStyles };
