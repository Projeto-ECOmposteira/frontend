import { Grid } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import { useStyles } from "./styles";
import Modal from "@material-ui/core/Modal";
import CreateComposterModal from "../CreateComposterModal";
import React from "react";
import { useEffect, useState } from "react";
import Composter from "../../components/Composter";
import { getComposters } from "../../services/composter";
import { ComposterProps } from "../../types/types";
import Button from "@material-ui/core/Button";
import ContactEmail from "../ContactEmail";

export default function Home() {
  const classes = useStyles();

  const [composters, setComposters] = useState<Array<ComposterProps>>([]);
  const [contactUsOpen, setContactUsOpen] = React.useState<boolean>(false);

  useEffect(() => {
    async function loadComposters() {
      const response = getComposters();
      setComposters(response);
    }

    loadComposters();
  }, []);

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Container component="main">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <CreateComposterModal closeEvent={handleClose} />
      </Modal>
      <div className={classes.titleButton}>
        <h1 className={classes.header}>Composteiras</h1>
        <Button
          type="button"
          onClick={handleOpen}
          variant="contained"
          color="secondary"
          className={classes.button}
        >
          Cadastrar composteira
        </Button>
      </div>
      <Grid container justify="space-around">
        {composters.map((composter) => (
          <Grid key={composter._id} item>
            <Composter
              _id={composter._id}
              peso={composter.peso}
              ph={composter.ph}
              cn={composter.cn}
              o2={composter.o2}
              temperatura={composter.temperatura}
              pressao={composter.pressao}
              umidade={composter.umidade}
              co2={composter.co2}
              dataHoraMedida={composter.dataHoraMedida}
              macAddress={composter.macAddress}
              nome={composter.nome}
              descricao={composter.descricao}
              status={composter.status}
              emailSupermercado={composter.emailSupermercado}
              emailProdutorAgricola={composter.emailProdutorAgricola}
              setContactUsOpen={setContactUsOpen}
            />
          </Grid>
        ))}
      </Grid>
      {contactUsOpen && (
        <ContactEmail open={contactUsOpen} setOpen={setContactUsOpen} />
      )}
    </Container>
  );
}
