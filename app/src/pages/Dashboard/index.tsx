import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import SideMenu from "../../components/SideMenu";
import InternalRoutes from "../../routes/InternalRoutes";
import { useStyles } from "./styles";

export default function Dashboard() {
  const classes = useStyles();
  const [openSideMenu, setOpenSideMenu] = useState(false);

  const handleSideMenu = () => {
    setOpenSideMenu(!openSideMenu);
  };

  return (
    <div className={classes.root}>
      <Navbar handleSideMenu={handleSideMenu} />
      <SideMenu openSideMenu={openSideMenu} />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <InternalRoutes />
      </main>
    </div>
  );
}
