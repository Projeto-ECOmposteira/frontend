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

export default function PasswordRecoveryReset() {
  return (
    <Container component="main" maxWidth="xs">
      <p>Deu bom familia!</p>
    </Container>
  );
}
