import Container from "@material-ui/core/Container";
import { useStyles } from "./styles";
import Modal from '@material-ui/core/Modal';
import CreateComposterModal from '../CreateComposterModal'
import React from "react";

// TODO
export default function Home() {
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
      <h1 className={classes.header}>Homepage</h1>
      <button type="button" onClick={handleOpen}>
        Cadastrar composteira
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <CreateComposterModal closeEvent={handleClose} />
      </Modal>
      <h1 className={classes.header}>Composteiras</h1>
    </Container>
  );
}
