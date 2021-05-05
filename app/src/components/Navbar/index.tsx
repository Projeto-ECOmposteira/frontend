import React, { useContext } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Avatar from "@material-ui/core/Avatar";
import { Button } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import LogoImage from "../../assets/img/logo.svg";
import AuthContext from "../../contexts/auth";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    appBar: {
      backgroundColor: theme.palette.primary.light,
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

export default function MenuAppBar() {
  const history = useHistory();
  const { signOut } = useContext(AuthContext);
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSignOut = () => {
    signOut();
    history.push('/');
  };

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="static">
        <Toolbar style={{ justifyContent: "space-between" }}>
          <div>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="secondary"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Button
              disableFocusRipple
              component={Link}
              to="/home"
              disableRipple
            >
              <img className={classes.logo} src={LogoImage} alt="Logo" />
              <Typography component="h1" variant="h6" className={classes.title}>
                ECOMPOSTEIRA
              </Typography>
            </Button>
          </div>
          <div className={classes.userContainer}>
            <div className={classes.userInfo}>
              <Typography
                component="h3"
                variant="h5"
                color="secondary"
                className={classes.userRole}
              >
                Produtor agrícola
              </Typography>
              <Typography
                component="h4"
                variant="h5"
                color="secondary"
                className={classes.username}
              >
                Welison Almeida
              </Typography>
            </div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleMenu}
              color="inherit"
              className={classes.logout}
            >
              <Avatar className={classes.avatar} alt="Welison Almeida">
                WA
              </Avatar>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorEl}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={open}
              onClose={handleClose}
            >
              <MenuItem onClick={handleSignOut}>Sair</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
