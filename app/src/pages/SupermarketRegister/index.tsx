import { useState, useEffect } from "react";
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
import { mask_cep, mask_cnpj, mask_email, mask_only_one_name, mask_phone_number } from '../../utils/mask';
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";

export default function SupermarketRegister() {
  let history = useHistory();

  const classes = useStyles();

  const [state, setState] = useState({
    first_name: "",
    last_name: "",
    owner_phone_number: "",
    comercial_name: "",
    cnpj: "",
    cep: "",
    phone_number: "",
    agricultural_producer: "",
    email: "",
    password: ""
  });
  const handleChange = (e: any) => {
    let { name, value } = e.target;
    if (name === 'phone_number' || name === 'owner_phone_number') {
      value = mask_phone_number(value)
    }
    else if (name === 'last_name' || name === 'first_name') {
      value = mask_only_one_name(value)
    }
    else if (name === 'cnpj') {
      value = mask_cnpj(value)
    }
    else if (name === 'cep') {
      value = mask_cep(value)
    }
    else if (name === 'email') {
      value = mask_email(value)
    }
    setValue(name, value)
    setState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const { register, formState: { errors }, handleSubmit, setValue } = useForm({ reValidateMode: 'onBlur' });

  const [producers, setProducers] = useState(new Map());

  useEffect(() => {
    register("first_name", {
      pattern: /^[A-Za-z]+$/i
    })
    register("last_name", {
      pattern: /^[A-Za-z]+$/i
    })
    register("owner_phone_number", {
      pattern: /^\(\d{2}\)( \d | )(\d{4})-(\d{4})$/i
    })
    register("comercial_name")
    register("cnpj", {
      pattern: /^(\d{2}).(\d{3}).(\d{3})\/(\d{4})-(\d{2})$/i
    })
    register("cep", {
      pattern: /^(\d{5})-(\d{3})$/i
    })
    register("phone_number", {
      pattern: /^\(\d{2}\)( \d | )(\d{4})-(\d{4})$/i
    })
    register("agricultural_producer", {
      pattern: /^(\d)+$/i
    })
    register("email", {
      pattern: /^(.+)@(.+)\.(.+)$/i
    })
    register("password", {
      minLength: {
        value: 8,
        message: "Senha muito curta"
      }
    })
    let url = `${process.env["REACT_APP_API_GATEWAY_BASE_URL"]}/api/producers/`
    axios.get(url)
      .then(function (response: any) {
        for (let i in response.data) {
          setProducers(new Map(producers.set(response.data[i].pk, response.data[i].first_name + ' ' + response.data[i].last_name)));
        }
      })
      .catch(function (error: any) {
        if (!error.response) {
          const key = enqueueSnackbar('Erro de conexão.', {
            variant: 'error',
            preventDuplicate: true,
            onClick: () => { closeSnackbar(key) }
          });
        } else {
          const key = enqueueSnackbar('Erro interno do servidor.', {
            variant: 'error',
            preventDuplicate: true,
            onClick: () => { closeSnackbar(key) }
          });
        }

      });
  }, [register]);

  const [showPassword, setShowPassword] = useState(false)
  const [emailError, setEmailError] = useState(false)

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const registerSupermarket = (data: any) => {
    setEmailError(false)

    let url = `${process.env["REACT_APP_API_GATEWAY_BASE_URL"]}/api/register/`
    axios.post(url, {
      ...data,
      'password2': state.password,
    })
      .then(function () {
        return history.push('/cadastrar_supermercado/success')
      })
      .catch(function (error: any) {
        if (!error.response) {
          const key = enqueueSnackbar('Erro de conexão.', {
            variant: 'error',
            preventDuplicate: true,
            onClick: () => { closeSnackbar(key) }
          });
        } else if (error.response.data['email']) {
          setEmailError(true)
        } else {
          const key = enqueueSnackbar('Erro interno do servidor.', {
            variant: 'error',
            preventDuplicate: true,
            onClick: () => { closeSnackbar(key) }
          });
        }

      });
  }

  function getProducers() {
    const prods: any = [];
    producers.forEach((value: string, key: string) => {
      prods.push(<option key={key} value={key}>{value}</option>)
    });
    return prods;
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
        <form className={classes.form} onSubmit={handleSubmit(registerSupermarket)}>
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
              {errors.first_name && "Campo primeiro nome inválido"}
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
              {errors.first_name && "Campo ultimo nome inválido"}
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
              {errors.owner_phone_number && "Campo telefone pessoal inválido"}
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
              {errors.comercial_name && "Campo nome comercial inválido"}
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
              {errors.cnpj && "Campo CNPJ inválido"}
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
              {errors.cep && "Campo CEP inválido"}
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
              {errors.phone_number && "Campo telefone do supermercado inválido"}
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
                  id="agricultural_producer"
                  name="agricultural_producer"
                >
                  <option aria-label="None" value="" />
                  {getProducers()}
                </Select>
                {errors.agricultural_producer && "Campo produtor agrícula vinculado inválido"}
              </FormControl>
            </Grid>
          </Grid>

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
                  value={state.email}
                  endAdornment={
                    <InputAdornment position="end"><PersonIcon /></InputAdornment>
                  }
                  labelWidth={70}
                />
                {(emailError || errors.email) && "E-mail inválido ou em uso"}
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
                {errors.password && "Campo senha inválido. Este campo deve conter no mínimo 8 caracteres."}
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
              >
                Cadastrar
          </Button>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
}
