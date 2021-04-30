import { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import { useStyles } from "./styles";
import LogoImage from "../../assets/img/logo.svg";
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import axios from 'axios';
import { useSnackbar } from 'notistack';
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router-dom";
import Link from "@material-ui/core/Link";
import IconButton from '@material-ui/core/IconButton';

export default function PasswordRecoveryReset() {
  let history = useHistory();

  const classes = useStyles();

  interface ParamTypes {
    user: string,
    token: string
  }
  let { user, token } = useParams<ParamTypes>();

  const [state, setState] = useState({
    new_password1: "",
    new_password2: "",
  });
  const handleChange = (e: any) => {
    let { name, value } = e.target;
    setValue(name, value)
    setState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const { register, formState: { errors }, handleSubmit, setValue } = useForm({ reValidateMode: 'onBlur' });

  useEffect(() => {
    register("new_password1", {
      minLength: {
        value: 8,
        message: "Senha muito curta"
      }
    })
    register("new_password2", {
      minLength: {
        value: 8,
        message: "Senha muito curta"
      }
    })
  }, [register]);

  const { enqueueSnackbar, closeSnackbar } = useSnackbar();

  const recoveryPassword = (data: any) => {
    if(data.new_password1 !== data.new_password2){
      const key = enqueueSnackbar('As senhas não coincidem.', {
        variant: 'error',
        preventDuplicate: true,
        onClick: () => { closeSnackbar(key) }
      });
      return;
    }
    let url = `${process.env["REACT_APP_API_GATEWAY_BASE_URL"]}/api/password_recovery/reset/${user}/${token}/`
    axios.post(url, {
      ...data,
    })
      .then(function () {
        return history.push('/esqueceu_senha/reset/success')
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

  const [showPassword, setShowPassword] = useState(false)

  const handleClickShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const handleMouseDownPassword = (event: any) => {
    event.preventDefault();
  };

  const [showPassword2, setShowPassword2] = useState(false)

  const handleClickShowPassword2 = () => {
    setShowPassword2(!showPassword2);
  };

  const handleMouseDownPassword2 = (event: any) => {
    event.preventDefault();
  };

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
        <p className={classes.paragraph}>Por favor, informe sua nova senha duas vezes para que possamos verificar se você a digitou corretamente.</p>
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
                <InputLabel htmlFor="outlined-adornment-password">Senha *</InputLabel>
                <OutlinedInput
                  required
                  id="new_password1"
                  name="new_password1"
                  onChange={handleChange}
                  value={state.new_password1}
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
                {errors.new_password1 && "Campo senha inválido. Este campo deve conter no mínimo 8 caracteres."}
              </FormControl>
          </Grid>
          <Grid item xs={12}>
          <FormControl variant="outlined" fullWidth>
                <InputLabel htmlFor="outlined-adornment-password">Confirme a Senha *</InputLabel>
                <OutlinedInput
                  required
                  id="new_password2"
                  name="new_password2"
                  onChange={handleChange}
                  value={state.new_password2}
                  type={showPassword2 ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword2}
                        onMouseDown={handleMouseDownPassword2}
                      >
                        {showPassword2 ? <Visibility /> : <VisibilityOff />}
                      </IconButton>
                    </InputAdornment>
                  }
                  labelWidth={150}
                />
                {errors.new_password2 && "Campo senha inválido. Este campo deve conter no mínimo 8 caracteres."}
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
          Alterar Minha Senha
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
