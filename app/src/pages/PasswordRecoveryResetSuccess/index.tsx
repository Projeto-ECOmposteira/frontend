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
import { mask_email } from '../../utils/mask';
import { useForm } from "react-hook-form";
import { useHistory, useParams } from "react-router-dom";
import Link from "@material-ui/core/Link";
import IconButton from '@material-ui/core/IconButton';
import SuccessRegister from "../../assets/img/successRegister.svg";

export default function PasswordRecoveryReset() {
  const classes = useStyles();
  return (
    <Container>
      <Grid
        container
        direction="row"
        justify="center"
        alignItems="center"
        spacing={5}
      >
        <div className={classes.container}>
          <div className={classes.logoContainer}>
            <img
              src={SuccessRegister}
              alt="Projeto ECOmposteira"
            />
          </div>
          <p className={classes.paragraph}>Senha alterada com sucesso! Você pode seguir em frente e fazer login agora.</p>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="secondary"
            className={classes.submit}
            href="/"
          >
            IR PARA TELA DE LOGIN
          </Button>
        </div>
      </Grid>
    </Container>
  );
}
