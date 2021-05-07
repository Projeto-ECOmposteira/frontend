import { Grid } from "@material-ui/core";
import Container from "@material-ui/core/Container";
import { useEffect, useState } from "react";
import Composter from "../../components/Composter";
import { getComposters } from "../../services/composter";
import { ComposterProps } from "../../types/types";

export default function Home() {
  const [composters, setComposters] = useState<Array<ComposterProps>>([]);

  useEffect(() => {
    async function loadComposters() {
      const response = getComposters();
      setComposters(response);
    }

    loadComposters();
  }, []);

  return (
    <Container component="main">
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
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
