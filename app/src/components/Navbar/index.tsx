import React, { useContext, useState } from "react";
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
import { useStyles } from "./styles";

export interface NavbarProps {
  handleSideMenu: () => void;
}

export default function Navbar(props: NavbarProps) {
  const classes = useStyles();
  const history = useHistory();
  const { user, signOut } = useContext(AuthContext);
  const [userMenu, setUserMenu] = useState<null | HTMLElement>(null);
  const openUserMenu = Boolean(userMenu);

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

  return (
    <AppBar className={classes.appBar} position="fixed">
      <Toolbar style={{ justifyContent: "space-between" }}>
        <div>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="secondary"
            aria-label="menu"
            onClick={props.handleSideMenu}
          >
            <MenuIcon />
          </IconButton>
          <Button disableFocusRipple component={Link} to="/home" disableRipple>
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
  );
}
