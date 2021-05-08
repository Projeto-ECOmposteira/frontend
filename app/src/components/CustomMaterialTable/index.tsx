import { Box } from "@material-ui/core";
import MaterialTable, { MaterialTableProps } from "material-table";
import React from "react";
import { useStyles } from "./styles";

export default function CustomMaterialTable<T extends object>(
  props: MaterialTableProps<T>
) {
  const classes = useStyles();

  return (
    <Box className={classes.root}>
      <MaterialTable
        localization={{
          body: {
            emptyDataSourceMessage: "Nenhum dado encontrado",
            addTooltip: "Adicionar",
            deleteTooltip: "Deletar",
            editTooltip: "Editar",
            filterRow: {
              filterTooltip: "Filtrar",
            },
            editRow: {
              deleteText: "Você deseja deletar essa linha?",
              cancelTooltip: "Cancelar",
              saveTooltip: "Salvar",
            },
          },
          grouping: {
            placeholder: "Arraste os cabeçalhos",
            groupedBy: "Agrupar por:",
          },
          header: {
            actions: "",
          },
          pagination: {
            labelDisplayedRows: "{from}-{to} de {count}",
            labelRowsSelect: "linhas",
            labelRowsPerPage: "linhas por página:",
            firstAriaLabel: "Primeira página",
            firstTooltip: "Primeira página",
            previousAriaLabel: "Página anterior",
            previousTooltip: "Página anterior",
            nextAriaLabel: "Página seguinte",
            nextTooltip: "Página seguinte",
            lastAriaLabel: "Última página",
            lastTooltip: "Última página",
          },
          toolbar: {
            addRemoveColumns: "Adicionar ou remover colunas",
            nRowsSelected: "{0} linhas(s) selecionadas",
            showColumnsTitle: "Mostrar colunas",
            showColumnsAriaLabel: "Mostrar colunas",
            exportTitle: "Exportar",
            exportAriaLabel: "Exportar",
            searchTooltip: "Pesquisar",
            searchPlaceholder: "Pesquisar",
          },
        }}
        options={{
          toolbar: false,
          search: false,
          showTitle: false,
          headerStyle: {
            backgroundColor: "#FEFAE0",
            color: "#283618",
            fontWeight: "bold",
            fontSize: "1rem",
          },
        }}
        {...props}
      />
    </Box>
  );
}
