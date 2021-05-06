import React, { useContext, useState } from "react";
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "@material-ui/core/Menu";
import Avatar from "@material-ui/core/Avatar";
import { Button, MenuItem } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";
import LogoImage from "../../assets/img/logo.svg";
import AuthContext from "../../contexts/auth";
import { getUsernameInitialsLetters } from "../../utils/userDataTransform";
import InternalRoutes from "../../routes/InternalRoutes";
import SideMenu from "../SideMenu";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
      "& .MuiPaper-elevation4": {
        boxShadow:
          "rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.06) 0px 1px 2px 0px",
      },
    },
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
    toolbar: {
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
      padding: theme.spacing(0, 1),
      // necessary for content to be below app bar
      ...theme.mixins.toolbar,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
  })
);

export default function Navbar() {
  const history = useHistory();
  const { user, signOut } = useContext(AuthContext);
  const classes = useStyles();
  const [userMenu, setUserMenu] = useState<null | HTMLElement>(null);
  const openUserMenu = Boolean(userMenu);
  const [openSideMenu, setOpenSideMenu] = useState(false);

  const handleUserMenu = (event: React.MouseEvent<HTMLElement>) => {
    setUserMenu(event.currentTarget);
  };

  const handleUserMenuClose = () => {
    setUserMenu(null);
  };

  const handleSignOut = () => {
    signOut();
    history.push("/");
  };

  const handleSideMenu = () => {
    setOpenSideMenu(!openSideMenu);
  };

  return (
    <div className={classes.root}>
      <AppBar className={classes.appBar} position="fixed">
        <Toolbar style={{ justifyContent: "space-between" }}>
          <div>
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="secondary"
              aria-label="menu"
              onClick={handleSideMenu}
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
                {user?.data?.isSupermarket === true
                  ? "Supermercado"
                  : "Produtor agrícola"}
              </Typography>
              <Typography
                component="h4"
                variant="h5"
                color="secondary"
                className={classes.username}
              >
                {user?.data?.name || "Sem nome"}
              </Typography>
            </div>
            <IconButton
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleUserMenu}
              color="inherit"
              className={classes.logout}
            >
              <Avatar className={classes.avatar} alt="Username abbreviation">
                {getUsernameInitialsLetters(user?.data?.name || "Sem nome")}
              </Avatar>
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={userMenu}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={openUserMenu}
              onClose={handleUserMenuClose}
            >
              <MenuItem onClick={handleSignOut}>Sair</MenuItem>
            </Menu>
          </div>
        </Toolbar>
      </AppBar>
      <SideMenu openSideMenu={openSideMenu} />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <InternalRoutes />
      </main>
    </div>
  );
}
