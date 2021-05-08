import Container from "@material-ui/core/Container";
import { useStyles } from "./styles";
import Modal from '@material-ui/core/Modal';
import SupermarketDetailModal from '../SupermarketDetailModal'
import React from "react";

// TODO
export default function Supermarket() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container  component="main">
      <h1 className={classes.header}>Supermercados</h1>
      <button type="button" onClick={handleOpen}>
        Detalhes
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <SupermarketDetailModal closeEvent={handleClose} id={2} />
      </Modal>
    </Container>
  );
}
