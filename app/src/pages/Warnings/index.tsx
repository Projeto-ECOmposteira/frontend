import { Box } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import CustomMaterialTable from "../../components/CustomMaterialTable";
import { useStyles } from "./styles";

export default function Warnings() {
  const classes = useStyles();

  return (
    <Container component="main">
      <Box className={classes.desconectedDevices}>
        <Typography variant="h5" component="h2">
          Composteiras desconectadas
        </Typography>
        <CustomMaterialTable
          columns={[
            { title: "Composteira", field: "name" },
            {
              title: "Alerta",
              field: "surname",
              align: "left",
              cellStyle: { width: "50%" },
            },
            { title: "Dia", field: "birthYear", align: "left" },
            { title: "Horário", field: "birthCity", align: "left" },
          ]}
          data={[
            {
              name: "Composteira 1",
              surname: "Desconectada há mais de 30 dias",
              birthYear: "09/03/2021",
              birthCity: "00h00",
            },
            {
              name: "Composteira 2",
              surname: "Desconectada há 01 dia",
              birthYear: "09/03/2021",
              birthCity: "00h00",
            },
          ]}
          actions={[
            {
              icon: "search",
              tooltip: "Visualizar composteira",
              onClick: (event, rowData: any) => console.log(rowData.name),
            },
          ]}
        />
      </Box>
      <Box className={classes.desconectedDevices}>
        <Typography variant="h5" component="h2">
          Últimos alertas registrados
        </Typography>
        <CustomMaterialTable
          columns={[
            { title: "Composteira", field: "name" },
            {
              title: "Alerta",
              field: "surname",
              align: "left",
              cellStyle: { width: "50%" },
            },
            { title: "Dia", field: "birthYear", align: "left" },
            { title: "Horário", field: "birthCity", align: "left" },
          ]}
          data={[
            {
              name: "Composteira 1",
              surname: "Desconectada há mais de 30 dias",
              birthYear: "09/03/2021",
              birthCity: "00h00",
            },
            {
              name: "Composteira 2",
              surname: "Desconectada há 01 dia",
              birthYear: "09/03/2021",
              birthCity: "00h00",
            },
          ]}
          actions={[
            {
              icon: "search",
              tooltip: "Visualizar composteira",
              onClick: (event, rowData: any) => console.log(rowData.name),
            },
          ]}
        />
      </Box>
    </Container>
  );
}
