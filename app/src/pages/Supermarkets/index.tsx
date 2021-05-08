import Container from "@material-ui/core/Container";
import { useStyles } from "./styles";
import Modal from '@material-ui/core/Modal';
import SupermarketDetailModal from '../SupermarketDetailModal'
import { Box } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import { useEffect, useState } from "react";
import CustomMaterialTable from "../../components/CustomMaterialTable";
import React from "react";
import { getSupermarkets } from "../../services/supermarkets";
import { SupermarketReportProps } from "../../types/types";

// TODO
export default function Supermarket() {
  const classes = useStyles();

  const [open, setOpen] = React.useState(false);

  const handleOpen = (pk: number) => {
    setSupermarketId(pk)
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const [supermarkets, setSupermarkets] = useState<Array<SupermarketReportProps>>([]);

  const [supermarketId, setSupermarketId] = useState<number | null>(null);

  useEffect(() => {
    async function loadSupermarkets() {
      const response = await getSupermarkets();
      setSupermarkets(response)
    }

    loadSupermarkets()
  }, []);

  return (
    <Container component="main">
      <Box>
        <Typography variant="h5" component="h2" className={classes.header}>
          Supermercados
        </Typography>
        <CustomMaterialTable
          columns={[
            { title: "Supermercado", field: "comercial_name" },
            {
              title: "Proprietário",
              field: "owner_name",
              align: "left",
            },
            { title: "E-mail", field: "email", align: "left" },
            { title: "pk", field: "pk", hidden: true },
          ]}
          data={supermarkets}
          actions={[
            {
              icon: "search",
              tooltip: "Visualizar composteira",
              onClick: (event, rowData: any) =>
                handleOpen(rowData.pk)
            },
          ]}
        />
      </Box>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <SupermarketDetailModal closeEvent={handleClose} id={supermarketId} />
      </Modal>
    </Container>
  );

  // return (
  //   <Container  component="main">
  //     <h1 className={classes.header}>Supermercados</h1>
  //     <button type="button" onClick={handleOpen}>
  //       Detalhes
  //     </button>
      
  //   </Container>
  // );
}
