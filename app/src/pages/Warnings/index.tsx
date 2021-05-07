import Container from "@material-ui/core/Container";
import CustomMaterialTable from "../../components/CustomMaterialTable";

export default function Warnings() {
  return (
    <Container component="main">
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
    </Container>
  );
}
