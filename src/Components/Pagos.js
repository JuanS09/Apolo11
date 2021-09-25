import React from 'react'
import { Container, FormControl, InputLabel, Input, FormHelperText, Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabla from './Tablas/TablaPagos';

const useStyles = makeStyles((theme) => ({
    root: {
        
      display: 'flex',
      flexWrap: 'wrap',
      minHeight: '50%',

    },
    paper: {
        border: '1px solid black',
        padding: '20px',
        minWidth: '20vw',
        textAlign: 'center'
    },
    container: {
        margin: '50px'
    }
  }));

function Pagos () {
    const classes = useStyles();
    return (
        <>
        <Container maxWidth="xs">
            <h1>Pagos</h1>
            <div className={classes.root}>
                <Paper elevation={3} className={classes.paper}>
                    <Grid container>
                        <Grid item md={12}>
                            <FormControl>
                                <InputLabel htmlFor="contract">Número de Contrato</InputLabel>
                                <Input id="contract" type="text" aria-describedby="contract-helper"/>
                                <FormHelperText id="contract-helper"></FormHelperText>
                            </FormControl>
                        </Grid>
                        <Grid item md={12}>
                            <FormControl>
                                <InputLabel htmlFor="Name">Nombre Cliente</InputLabel>
                                <Input id="Name" type="name" aria-describedby="Name-helper"/>
                                <FormHelperText id="Name-helper"></FormHelperText>
                            </FormControl>
                        </Grid>
                        <Grid item md={12}>
                            <FormControl>
                                <InputLabel htmlFor="Last">Apellidos Cliente</InputLabel>
                                <Input id="Last" type="text" aria-describedby="Last-helper"/>
                                <FormHelperText id="Last-helper"></FormHelperText>
                            </FormControl>
                        </Grid>
                        <Grid item md={12}>
                            <FormControl>
                                <InputLabel htmlFor="Address">Dirección Cliente</InputLabel>
                                <Input id="Address" type="text" aria-describedby="Address-helper"/>
                                <FormHelperText id="Address-helper"></FormHelperText>
                            </FormControl>
                        </Grid>
                        <Grid item md={12}>
                            <FormControl>
                                <InputLabel htmlFor="sub">Sub-Total</InputLabel>
                                <Input id="sub" type="text" aria-describedby="sub-helper"/>
                                <FormHelperText id="sub-helper"></FormHelperText>
                            </FormControl>
                        </Grid>
                        <Grid item md={12}>
                            <FormControl>
                                <InputLabel htmlFor="total">Total</InputLabel>
                                <Input id="total" type="text" aria-describedby="total-helper"/>
                                <FormHelperText id="total-helper"></FormHelperText>
                            </FormControl>
                        </Grid>
                        <Grid item md={12}>
                                <Button variant="contained" color="primary">
                                    Guardar
                                </Button>
                        </Grid>
                    </Grid>
                </Paper>
            </div>
        </Container>
        <div style={{height:'20px'}} >
            
        </div>
            <Container>
                <Tabla></Tabla>
            </Container>
            </>
    )
}

export default Pagos
