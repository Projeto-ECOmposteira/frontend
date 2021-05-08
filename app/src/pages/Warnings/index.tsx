import { Box } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import { useEffect, useState } from "react";
import CustomMaterialTable from "../../components/CustomMaterialTable";
import { getWarnings } from "../../services/warnings";
import { WarningProps } from "../../types/types";
import { useStyles } from "./styles";

export default function Warnings() {
  const [warnings, setWarnings] = useState<Array<WarningProps>>([]);
  const classes = useStyles();

  const addHourField = (warnings: Array<WarningProps>) => {
    const finalWarnings = warnings.map((warning) => {
      let warningDate = new Date(Date.parse(warning.startTimestamp));

      return {
        ...warning,
        day: warningDate.toLocaleDateString("pt-BR"),
        hour: warningDate.toLocaleTimeString("pt-BR"),
      };
    });

    return finalWarnings;
  };

  useEffect(() => {
    async function loadWarnings() {
      const response = getWarnings();
      const finalWarnings = addHourField(response);
      setWarnings(finalWarnings);
    }

    loadWarnings();
  }, []);

  return (
    <Container component="main">
      <Box className={classes.desconectedDevices}>
        <Typography variant="h5" component="h2">
          Últimos alertas registrados
        </Typography>
        <CustomMaterialTable
          columns={[
            { title: "Composteira", field: "composterName" },
            {
              title: "Alerta",
              field: "description",
              align: "left",
              cellStyle: { width: "50%" },
            },
            { title: "Dia", field: "day", align: "left" },
            { title: "Horário", field: "hour", align: "left" },
          ]}
          data={warnings}
          actions={[
            {
              icon: "search",
              tooltip: "Visualizar composteira",
              onClick: (event, rowData: any) =>
                console.log(rowData.composterName),
            },
          ]}
        />
      </Box>
    </Container>
  );
}
