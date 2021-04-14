import { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { useStyles } from "./styles";
import LogoImage from "../../assets/img/logo.svg";
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
import InputAdornment from '@material-ui/core/InputAdornment';
import PersonIcon from '@material-ui/icons/Person';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import OutlinedInput from '@material-ui/core/OutlinedInput';

export default function SupermarketRegister() {
  const classes = useStyles();

  const [state, setState] = useState({ 
    name: "", 
    surname: "",
    cellNumber: "",
    comercialName: "",
    CNPJ: "",
    CEP: "",
    comercialCellNumber: "",
    tiedAgriculturalProducer: "",
    eMail: "",
    password: ""
  });
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const register = () =>{
    console.log(state)
  }

  return (
    <Container component="main" maxWidth="md">
      <div className={classes.container}>
        <div className={classes.logoContainer}>
          <img
            className={classes.logo}
            src={LogoImage}
            alt="Projeto ECOmposteira"
          />
        </div>
        <form className={classes.form} noValidate>
          <h3>Informações do proprietário do supermercado</h3>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={5}
          >
            <Grid item xs={3}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="name"
                label="Nome"
                name="name"
                autoComplete="given-name"
                autoFocus
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="surname"
                label="Sobrenome"
                name="surname"
                autoComplete="family-name"
                autoFocus
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="cellNumber"
                label="Telefone"
                name="cellNumber"
                autoComplete="tel-national"
                autoFocus
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <h3>Informações do supermercado</h3>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={5}
          >
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="comercialName"
                label="Nome comercial"
                name="comercialName"
                autoComplete="organization"
                autoFocus
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="CNPJ"
                label="CNPJ"
                name="CNPJ"
                autoFocus
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={5}
          >
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="CEP"
                label="CEP"
                name="CEP"
                autoComplete="postal-code"
                autoFocus
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="comercialCellNumber"
                label="Telefone"
                name="comercialCellNumber"
                autoComplete="tel-national"
                autoFocus
                onChange={handleChange}
              />
            </Grid>
          </Grid>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={5}
          >
            <Grid item xs={12}>
              <FormControl variant="outlined" fullWidth>
                <InputLabel htmlFor="outlined-age-native-simple">Produtor agrícola vinculado *</InputLabel>
                <Select
                  required
                  native
                  onChange={handleChange}
                  label="Produtor agrícola vinculado *"
                  id="tiedAgriculturalProducer"
                  name="tiedAgriculturalProducer"
                >
                  <option aria-label="None" value="" />
                  <option value={1}>José</option>
                  <option value={2}>Antônio</option>
                  <option value={3}>Adriano</option>
                </Select>
              </FormControl>
            </Grid>
          </Grid>
        </form>
        <h3>Informações de acesso</h3>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={5}
        >
          <Grid item xs={6}>
            <FormControl variant="outlined" fullWidth>
              <InputLabel htmlFor="outlined-adornment-password">E-mail *</InputLabel>
              <OutlinedInput
                required
                id="eMail"
                name="eMail"
                autoComplete="email"
                onChange={handleChange}
                endAdornment={
                  <InputAdornment position="end"><PersonIcon /></InputAdornment>
                }
                labelWidth={70}
              />
            </FormControl>
          </Grid>
          <Grid item xs={6}>
            <FormControl variant="outlined" fullWidth>
              <InputLabel htmlFor="outlined-adornment-password">Senha *</InputLabel>
              <OutlinedInput
                required
                id="password"
                name="password"
                onChange={handleChange}
                endAdornment={
                  <InputAdornment position="end"><VpnKeyIcon /></InputAdornment>
                }
                labelWidth={70}
              />
            </FormControl>
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="secondary"
          className={classes.submit}
          onClick={register}
        >
          Cadastrar
          </Button>
      </div>
    </Container>
  );
}
