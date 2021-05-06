import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  navContainer: {
    paddingLeft: theme.spacing(3),
    marginBottom: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      paddingLeft: theme.spacing(2),
    },
  },
  activeNav: {
    borderLeft: `5px solid ${theme.palette.primary.main}`,
    backgroundColor: `${theme.palette.primary.main}44`,
    paddingLeft: theme.spacing(2.5),
    [theme.breakpoints.down("xs")]: {
      paddingLeft: theme.spacing(1.5),
    },
    "& span": {
      fontWeight: 600,
      color: theme.palette.primary.main,
    },
    "& svg": {
      color: theme.palette.primary.main,
    },
  },
}));

export { useStyles };
