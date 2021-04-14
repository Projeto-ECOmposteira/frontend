import React, { useContext, useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import { useStyles } from "./styles";
import Copyright from "../../components/Copyright";
import LogoImage from "../../assets/img/logo.svg";
import AuthContext from "../../contexts/auth";
import NativeSelect from '@material-ui/core/NativeSelect';
import FormControl from '@material-ui/core/FormControl';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';
// import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Input from '@material-ui/core/Input';
// import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
// import FormControl from '@material-ui/core/FormControl';
// import TextField from '@material-ui/core/TextField';
// import Grid from '@material-ui/core/Grid';
import PersonIcon from '@material-ui/icons/Person';
import VpnKeyIcon from '@material-ui/icons/VpnKey';
import OutlinedInput from '@material-ui/core/OutlinedInput';

export default function SupermarketRegister() {
  const classes = useStyles();

  const [email, setEmail] = useState<String>("");

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
                // id="email"
                label="Nome"
                // name="email"
                // autoComplete="email"
                autoFocus
                onChange={(event) => null}
              />
            </Grid>
            <Grid item xs={3}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                // id="email"
                label="Sobrenome"
                // name="email"
                // autoComplete="email"
                autoFocus
                onChange={(event) => null}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                // id="email"
                label="Telefone"
                // name="email"
                // autoComplete="email"
                autoFocus
                onChange={(event) => null}
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
                // id="email"
                label="Nome comercial"
                // name="email"
                // autoComplete="email"
                autoFocus
                onChange={(event) => null}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                // id="email"
                label="CNPJ"
                // name="email"
                // autoComplete="email"
                autoFocus
                onChange={(event) => null}
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
                // id="email"
                label="CEP"
                // name="email"
                // autoComplete="email"
                autoFocus
                onChange={(event) => null}
              />
            </Grid>
            <Grid item xs={6}>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                // id="email"
                label="Telefone"
                // name="email"
                // autoComplete="email"
                autoFocus
                onChange={(event) => null}
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
                  // value={state.age}
                  // onChange={handleChange}
                  label="Produtor agrícola vinculado *"
                // inputProps={{
                //   name: 'age',
                //   id: 'outlined-age-native-simple',
                // }}
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
                id="outlined-adornment-password"
                // type={values.showPassword ? 'text' : 'password'}
                // value={values.password}
                // onChange={handleChange('password')}
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
                id="outlined-adornment-password"
                // type={values.showPassword ? 'text' : 'password'}
                // value={values.password}
                // onChange={handleChange('password')}
                endAdornment={
                  <InputAdornment position="end"><VpnKeyIcon /></InputAdornment>
                }
                labelWidth={70}
              />
            </FormControl>
            {/* <FormControl>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                // id="email"
                label="Senha"
                // name="email"
                // autoComplete="email"
                autoFocus
                onChange={(event) => null}
                InputProps={{
                  startAdornment: <InputAdornment position="end"><VpnKeyIcon /></InputAdornment>,
                }}
              />
            </FormControl> */}
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="secondary"
          className={classes.submit}
        >
          Cadastrar
          </Button>
      </div>
    </Container>
  );
}
