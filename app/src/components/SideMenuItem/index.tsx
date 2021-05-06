import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { NavLink } from "react-router-dom";
import { useStyles } from "./styles";

export interface SideMenuItemProps {
  to: string;
  primary: string;
  icon: any;
}

export const SideMenuItem = (props: SideMenuItemProps) => {
  const classes = useStyles();
  return (
    <ListItem
      className={classes.navContainer}
      activeClassName={classes.activeNav}
      button
      component={NavLink}
      exact
      to={props.to}
    >
      <ListItemIcon>{props.icon}</ListItemIcon>
      <ListItemText primary={props.primary} />
    </ListItem>
  );
};
