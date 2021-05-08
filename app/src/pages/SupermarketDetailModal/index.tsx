import Container from "@material-ui/core/Container";
import { useStyles } from "./styles";
import IconButton from '@material-ui/core/IconButton';
import React from "react";
import CloseIcon from '@material-ui/icons/Close';
import Grid from "@material-ui/core/Grid";
import { useEffect, useState } from "react";
import axios from 'axios';
import { useSnackbar } from 'notistack';
import clsx from "clsx";

interface SupermarketDetailModalProps {
    closeEvent: () => void
    id: number | null
}

export default function SupermarketDetailModal(Props: SupermarketDetailModalProps) {
    const classes = useStyles();

    const { enqueueSnackbar, closeSnackbar } = useSnackbar();

    const [state, setState] = useState({
        first_name: '',
        last_name: '',
        cep: '',
        cnpj: '',
        owner_phone_number: '',
        phone_number: '',
        nome2: '',
        comercial_name: '',
        agricultural_producer: {
            email: '',
            first_name: '',
            last_name: '',
            phone_number: '',
            pk: '',
        },
    });

    useEffect(() => {
        let url = `${process.env["REACT_APP_API_GATEWAY_BASE_URL"]}/api/supermarkets/${Props.id}`
        axios.get(url)
            .then(function (response: any) {
                console.log(response.data)
                setState(response.data)
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
    }, [useStyles]);

    return (
        <Container component="main" maxWidth="sm">
            <div className={classes.paper}>
                <div className={classes.spaceBetween}>
                    <h2 id="simple-modal-title">Nome do Mercado</h2>
                    <IconButton className={classes.icon} aria-label="close" onClick={Props.closeEvent}>
                        <CloseIcon />
                    </IconButton>
                </div>

                <h3>Informações do supermercado</h3>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={1}
                    className={classes.gridContainer}
                >
                    <Grid item xs={6}>
                        <span>Nome comercial</span>
                    </Grid>
                    <Grid item xs={6}>
                        <span>CEP</span>
                    </Grid>
                    <Grid item xs={6}>
                        <span className={clsx(classes.bold, classes.breakLine)}>{state.comercial_name}</span>
                    </Grid>
                    <Grid item xs={6}>
                        <span className={classes.bold}>{state.cep}</span>
                    </Grid>
                </Grid>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={1}
                    className={classes.gridContainer}
                >
                    <Grid item xs={6}>
                        <span>CNPJ</span>
                    </Grid>
                    <Grid item xs={6}>
                        <span>Telefone</span>
                    </Grid>
                    <Grid item xs={6}>
                        <span className={classes.bold}>{state.cnpj}</span>
                    </Grid>
                    <Grid item xs={6}>
                        <span className={classes.bold}>{state.phone_number}</span>
                    </Grid>
                </Grid>

                <h3>Informações do proprietário</h3>
                <Grid
                    container
                    direction="row"
                    justify="center"
                    alignItems="center"
                    spacing={1}
                    className={classes.gridContainer}
                >
                    <Grid item xs={6}>
                        <span>Nome</span>
                    </Grid>
                    <Grid item xs={6}>
                        <span>Telefone</span>
                    </Grid>
                    <Grid item xs={6}>
                        <span className={clsx(classes.bold, classes.breakLine)}>{state['first_name'] + ' ' + state['last_name']}</span>
                    </Grid>
                    <Grid item xs={6}>
                        <span className={classes.bold}>{state['owner_phone_number']}</span>
                    </Grid>
                </Grid>
            </div>
        </Container>
    );
}
