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
import OutlinedInput from '@material-ui/core/OutlinedInput';
import Link from "@material-ui/core/Link";
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import axios from 'axios';
import { useSnackbar } from 'notistack';
import { mask_cep, mask_cnpj, mask_only_one_name, mask_phone_number } from '../../utils/mask';

export default function SupermarketRegister() {
  const classes = useStyles();

  const [state, setState] = useState({
    first_name: "",
    last_name: "",
    owner_phone_number: "",
    comercial_name: "",
    cnpj: "",
    cep: "",
    phone_number: "",
    producer: "",
    email: "",
    password: ""
  });
  const handleChange = (e: any) => {
    let { name, value } = e.target;
    if (name === 'phone_number' || name === 'owner_phone_number'){
      value = mask_phone_number(value)
    }
    else if (name === 'last_name' || name === 'first_name'){
      value = mask_only_one_name(value)
    }
    else if (name === 'cnpj'){
      value = mask_cnpj(value)
    }
    else if (name === 'cep'){
      value = mask_cep(value)
    }
    setState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const register = () => {
    let url = `${process.env["REACT_APP_API_GATEWAY_BASE_URL"]}/api/register/`
    axios.post(url, {
      ...state,
      'password2': state.password,
    })
      .then(function (response: any) {
        // Redireciona pra tela de OK
      })
      .catch(function (error: any) {
        if(!error.response){
          const key = enqueueSnackbar('Erro de conexão.', { 
            variant: 'error',
            preventDuplicate: true,
            onClick: () => { closeSnackbar(key) }
          });
        }
        else{
          const key = enqueueSnackbar('Erro ao cadastrar. E-mail já cadastrado.', { 
            variant: 'error',
            preventDuplicate: true,
            onClick: () => { closeSnackbar(key) }
          });
        }
      });
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
                id="first_name"
                label="Primeiro Nome"
                name="first_name"
                autoComplete="given-name"
                autoFocus
                value={state.first_name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="last_name"
                label="Último Nome"
                name="last_name"
                autoComplete="family-name"
                value={state.last_name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="owner_phone_number"
                label="Telefone"
                name="owner_phone_number"
                autoComplete="tel-national"
                value={state.owner_phone_number}
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
                id="comercial_name"
                label="Nome comercial"
                name="comercial_name"
                autoComplete="organization"
                value={state.comercial_name}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="cnpj"
                label="CNPJ"
                name="cnpj"
                value={state.cnpj}
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
                id="cep"
                label="CEP"
                name="cep"
                autoComplete="postal-code"
                value={state.cep}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="phone_number"
                label="Telefone"
                name="phone_number"
                autoComplete="tel-national"
                value={state.phone_number}
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
                  id="producer"
                  name="producer"
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
                id="email"
                name="email"
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
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
                labelWidth={70}
              />
            </FormControl>
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
            <Link href="/" variant="body2">
              Faça login em vez disso
              </Link>
          </Grid>
          <Grid item xs={6}>
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
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}
