import { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { useStyles } from "./styles";
import LogoImage from "../../assets/img/logo.svg";
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import PersonIcon from '@material-ui/icons/Person';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import axios from 'axios';
import { useSnackbar } from 'notistack';
import { mask_email } from '../../utils/mask';
import { useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import Link from "@material-ui/core/Link";

export default function PasswordRecovery() {
  let history = useHistory();

  const classes = useStyles();

  const [state, setState] = useState({
    email: "",
  });
  const handleChange = (e: any) => {
    let { name, value } = e.target;
    if (name === 'email') {
      value = mask_email(value)
    }
    setValue(name, value)
    setState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const { register, formState: { errors }, handleSubmit, setValue } = useForm({ reValidateMode: 'onBlur' });

  useEffect(() => {
    register("email", {
      pattern: /^(.+)@(.+)\.(.+)$/i
    })
  }, [register]);

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const recoveryPassword = (data: any) => {
    let url = `${process.env["REACT_APP_API_GATEWAY_BASE_URL"]}/api/recovery_password/`
    axios.post(url, {
      ...data,
    })
      .then(function () {
        return history.push('/esqueceu_senha/success')
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
  }

  return (
    <Container component="main" maxWidth="xs">
      <div className={classes.container}>
        <div className={classes.logoContainer}>
          <img
            className={classes.logo}
            src={LogoImage}
            alt="Projeto ECOmposteira"
          />
        </div>
        <p className={classes.paragraph}>Esqueceu a senha?! Sem problemas, enviaremos um e-mail para trocá-la</p>
        <form className={classes.form} onSubmit={handleSubmit(recoveryPassword)}>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={5}
        >
          <Grid item xs={12}>
            <FormControl variant="outlined" fullWidth>
              <InputLabel htmlFor="outlined-adornment-password">E-mail *</InputLabel>
              <OutlinedInput
                required
                autoFocus
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
              {errors.email && "E-mail inválido"}
            </FormControl>
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="secondary"
          className={classes.submit}
        >
          Recuperar Senha
          </Button>
          </form>
          <Grid container>
            <Grid item xs>
              <Link href="/" variant="body2">
              Retornar à página de login
              </Link>
            </Grid>
          </Grid>
      </div>
    </Container>
  );
}
