import { useState, useEffect } from "react";
import { Container, TextField } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { useStyles } from "./styles";
import { useForm } from "react-hook-form";
import { mask_mac_address } from '../../utils/mask';
import Button from "@material-ui/core/Button";
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
import { useHistory } from "react-router-dom";
import CloseIcon from '@material-ui/icons/Close';

interface CreateComposterModalProps {
  closeEvent: () => void
}

export default function CreateComposterModal(Props: CreateComposterModalProps) {
  const classes = useStyles();

  const [state, setState] = useState({
    composter_name: "",
    composter_description: "",
    mac_address: "",
    supermarket: null,
  });
  const handleChange = (e: any) => {
    let { name, value } = e.target;
    if (name === 'mac_address') {
      value = mask_mac_address(value)
    }
    setValue(name, value)
    setState(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const { register, formState: { errors }, handleSubmit, setValue } = useForm({ reValidateMode: 'onBlur' });

  useEffect(() => {
    register("mac_address", {
      pattern: /^(([0-9a-fA-F]{2}):){5}([0-9a-fA-F]{2})$/i
    })
    register("composter_name")
    register("composter_description")
  }, [register]);

  return (
    <Container component="main" maxWidth="sm">
      <div className={classes.paper}>
        <div className={classes.spaceBetween}>
          <h2 id="simple-modal-title">Cadastro de Composteira</h2>
          <IconButton className={classes.icon} aria-label="close" onClick={Props.closeEvent}>
            <CloseIcon />
          </IconButton>
        </div>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          spacing={1}
        >
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="composter_name"
              label="Nome da Composteira"
              name="composter_name"
              autoFocus
              value={state.composter_name}
              onChange={handleChange}
            />
            {errors.composter_name && "Campo nome da composteira inválido"}
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="composter_description"
              label="Descrição da composteira"
              name="composter_description"
              value={state.composter_description}
              onChange={handleChange}
            />
            {errors.composter_description && "Campo descrição da composteira inválido"}
          </Grid>
          <Grid item xs={12} className={classes.marginTop}>
            <FormControl variant="outlined" fullWidth>
              <InputLabel htmlFor="outlined-age-native-simple">Supermercado *</InputLabel>
              <Select
                required
                native
                onChange={handleChange}
                label="Supermercado *"
                id="supermarket"
                name="supermarket"
              >
                <option aria-label="None" value="" />
                <option value={1}>Supermercado da Vovó</option>
                <option value={2}>Supermercado do Seu Zé</option>
                <option value={3}>Supermercado do Dedé</option>
              </Select>
              {errors.supermarket && "Campo produtor agrícula vinculado inválido"}
            </FormControl>
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="mac_address"
              label="Endereço MAC da ESP32"
              name="mac_address"
              value={state.mac_address}
              onChange={handleChange}
            />
            {errors.mac_address && "Campo endereço MAC da ESP32 inválido"}
          </Grid>
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            spacing={5}
            className={classes.marginTop}
          >
            <Grid item xs={6}>
            <Button
                onClick={Props.closeEvent}
                fullWidth
                variant="contained"
                color="inherit"
                
                // className={classes.submit}
              >
                Cancelar
          </Button>
            </Grid>
            <Grid item xs={6}>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="secondary"
                // className={classes.submit}
              >
                Cadastrar
          </Button>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </Container>
  );
}
