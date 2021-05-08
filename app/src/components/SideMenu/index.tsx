import clsx from "clsx";
import { ReactComponent as ComposterIcon } from "../../assets/img/composterIcon.svg";
import { ReactComponent as WarningIcon } from "../../assets/img/warningIcon.svg";
import { ReactComponent as ProductIcon } from "../../assets/img/productIcon.svg";
import { ReactComponent as ReportIcon } from "../../assets/img/reportIcon.svg";
import { ReactComponent as SupermarketIcon } from "../../assets/img/supermarketIcon.svg";
import { SideMenuItem } from "../SideMenuItem";
import { Drawer, List } from "@material-ui/core";
import { useStyles } from "./styles";
import { useContext } from "react";
import AuthContext from "../../contexts/auth";

interface SideMenuProps {
  openSideMenu: boolean;
}

export default function SideMenu(props: SideMenuProps) {
  const classes = useStyles();

  const { user } = useContext(AuthContext);

  return (
    <Drawer
      variant="permanent"
      className={clsx(classes.drawer, {
        [classes.drawerOpen]: props.openSideMenu,
        [classes.drawerClose]: !props.openSideMenu,
      })}
      classes={{
        paper: clsx(classes.drawer, {
          [classes.drawerOpen]: props.openSideMenu,
          [classes.drawerClose]: !props.openSideMenu,
        }),
      }}
    >
      <div className={classes.toolbar} />
      <List>
        <SideMenuItem
          to="/home"
          primary="Composteiras"
          icon={<ComposterIcon />}
        />
        <SideMenuItem to="/warnings" primary="Alertas" icon={<WarningIcon />} />
        <SideMenuItem
          to="/allowed-products"
          primary="Produtos permitidos"
          icon={<ProductIcon />}
        />
        <SideMenuItem to="/reports" primary="Relatórios" icon={<ReportIcon />} />
        {
          Boolean(user?.data?.isSupermarket) == false &&
          <SideMenuItem
            to="/supermarkets"
            primary="Supermercados"
            icon={<SupermarketIcon />}
          />
        }
      </List>
    </Drawer>
  );
}
