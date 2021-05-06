import { Box, Grid, Typography } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import React, { useEffect, useState } from "react";
import Material from "../../components/Material";
import { getMaterials } from "../../services/material";
import { MaterialProps } from "../../types/types";
import { useStyles } from "./styles";

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
      <Box className={classes.header}>
        <Typography variant="h5" component="h2">
          Materiais permitidos na composteira
        </Typography>
        <Typography variant="body1" component="h2" gutterBottom>
          Ricos em carbono
        </Typography>
      </Box>
      <Grid container className={classes.materialsContainer} spacing={6}>
        {getSpecificMaterial("1").map((material) => (
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
    </Container>
  );
}
