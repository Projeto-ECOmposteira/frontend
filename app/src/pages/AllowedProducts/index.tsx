import { Box, Grid, Typography } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import React, { useEffect, useState } from "react";
import Material from "../../components/Material";
import { getMaterials } from "../../services/material";
import { MaterialProps } from "../../types/types";
import { useStyles } from "./styles";

interface SpecificMaterialsProps {
  materials: Array<MaterialProps>;
}

function SpecificMaterials(props: SpecificMaterialsProps) {
  const classes = useStyles();

  return (
    <Grid container className={classes.materialsContainer} spacing={6}>
      {props.materials.map((material) => (
        <Grid key={material._id} item>
          <Material
            _id={material._id}
            name={material.name}
            imageLink={material.imageLink}
            materialType={material.materialType}
          />
        </Grid>
      ))}
    </Grid>
  );
}

export default function AllowedProducts() {
  const classes = useStyles();
  const [materials, setMaterials] = useState<Array<MaterialProps>>([]);

  function getSpecificMaterial(materialType: string): Array<MaterialProps> {
    const specificMaterial = materials.filter(
      (material: MaterialProps) => material.materialType === materialType
    );

    return specificMaterial;
  }

  useEffect(() => {
    async function loadMaterials() {
      const response = getMaterials();
      setMaterials(response);
    }

    loadMaterials();
  }, []);

  return (
    <Container component="main">
      <Box m={2}>
        <Box className={classes.header}>
          <Typography variant="h5" component="h2">
            Materiais permitidos na composteira
          </Typography>
          <Typography variant="h5" component="h3" gutterBottom>
            Ricos em carbono
          </Typography>
        </Box>
        <SpecificMaterials materials={getSpecificMaterial("1")} />
      </Box>
      <Box m={2}>
        <Box className={classes.header}>
          <Typography variant="h5" component="h2">
            Materiais permitidos na composteira
          </Typography>
          <Typography variant="h5" component="h3" gutterBottom>
            Ricos em nitrogênio
          </Typography>
        </Box>
        <SpecificMaterials materials={getSpecificMaterial("2")} />
      </Box>
      <Box m={2}>
        <Box className={classes.header}>
          <Typography variant="h5" component="h2">
            Materiais permitidos com moderação
          </Typography>
        </Box>
        <SpecificMaterials materials={getSpecificMaterial("3")} />
      </Box>
      <Box m={2}>
        <Box className={classes.header}>
          <Typography variant="h5" component="h2">
            Materiais não permitidos na composteira
          </Typography>
        </Box>
        <SpecificMaterials materials={getSpecificMaterial("4")} />
      </Box>
    </Container>
  );
}
