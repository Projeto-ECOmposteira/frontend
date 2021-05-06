import clsx from "clsx";
import { ReactComponent as CompousterIcon } from "../../assets/img/compousterIcon.svg";
import { ReactComponent as WarningIcon } from "../../assets/img/warningIcon.svg";
import { ReactComponent as ProductIcon } from "../../assets/img/productIcon.svg";
import { ReactComponent as ReportIcon } from "../../assets/img/reportIcon.svg";
import { ReactComponent as SupermarketIcon } from "../../assets/img/supermarketIcon.svg";
import { SideMenuItem } from "../SideMenuItem";
import { Drawer, List } from "@material-ui/core";
import { useStyles } from "./styles";

interface SideMenuProps {
  openSideMenu: boolean;
}

export default function SideMenu(props: SideMenuProps) {
  const classes = useStyles();

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
          icon={<CompousterIcon />}
        />
        <SideMenuItem to="/a" primary="Alertas" icon={<WarningIcon />} />
        <SideMenuItem
          to="/b"
          primary="Produtos permitidos"
          icon={<ProductIcon />}
        />
        <SideMenuItem to="/c" primary="Relatórios" icon={<ReportIcon />} />
        <SideMenuItem
          to="/d"
          primary="Supermercados"
          icon={<SupermarketIcon />}
        />
      </List>
    </Drawer>
  );
}
