import React from 'react'
import { Container, FormControl, InputLabel, Input, FormHelperText, Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabla from './Tablas/TablaContratos';

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
        margin: '50px',
    },
    main:{
        display: 'flex'
    }

  }));

function Contratos () {
    const classes = useStyles();
    return (
        <> 
        <section className={classes.main}>
        <Container className={classes.Container} maxWidth="xs">
            <h1>Registro Nuevo Contrato</h1>
            <div className={classes.root}>
            <Paper elevation={3} className={classes.paper}>
                <Grid container>
                    <Grid item md={12}>
                        <FormControl>
                            <InputLabel htmlFor="Cédula">Cédula Cliente</InputLabel>
                            <Input id="Cédula" type="Cédula" aria-describedby="Cédula-helper"/>
                            <FormHelperText id="Cédula-helper"></FormHelperText>
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
                            <InputLabel htmlFor="Country">Ciudad Cliente</InputLabel>
                            <Input id="Country" type="text" aria-describedby="Country-helper"/>
                            <FormHelperText id="Country-helper"></FormHelperText>
                        </FormControl>
                    </Grid>
                    <Grid item md={12}>
                        <FormControl>
                            <InputLabel htmlFor="Phone">Teléfono Cliente</InputLabel>
                            <Input id="Phone" type="text" aria-describedby="Phone-helper"/>
                            <FormHelperText id="Phone-helper"></FormHelperText>
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

        <Container className={classes.Container} maxWidth="xs" display="flex">
            <h1>Servicio Contratado</h1>
            <div className={classes.root}>
            <Paper elevation={3} className={classes.paper}>
                <Grid container>
                    <Grid item md={12}>
                        <FormControl>
                            <InputLabel htmlFor="Servicio">Servicio</InputLabel>
                            <Input id="Servicio" type="Servicio" aria-describedby="Servicio-helper"/>
                            <FormHelperText id="Servicio-helper"></FormHelperText>
                        </FormControl>
                    </Grid>
                    <Grid item md={12}>
                        <FormControl>
                            <InputLabel htmlFor="Ciudad">Ciudad</InputLabel>
                            <Input id="Ciudad" type="Ciudad" aria-describedby="Ciudad-helper"/>
                            <FormHelperText id="Ciudad-helper"></FormHelperText>
                        </FormControl>
                    </Grid>
                    <Grid item md={12}>
                        <FormControl>
                            <InputLabel htmlFor="adress">Dirección</InputLabel>
                            <Input id="adress" type="adress" aria-describedby="adress-helper"/>
                            <FormHelperText id="adress-helper"></FormHelperText>
                        </FormControl>
                    </Grid>
                    <Grid item md={12}>
                        <FormControl>
                            <InputLabel htmlFor="observation">Observación</InputLabel>
                            <Input id="observation" type="text" aria-describedby="observation-helper"/>
                            <FormHelperText id="observation-helper"></FormHelperText>
                        </FormControl>
                    </Grid>
                    <Grid item md={12}>
                        <FormControl>
                            <InputLabel htmlFor="cost">Costo</InputLabel>
                            <Input id="cost" type="text" aria-describedby="cost-helper"/>
                            <FormHelperText id="cost-helper"></FormHelperText>
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
        </section>
        <div style={{height:'20px'}} >
            
        </div>
        <Container>
            <Tabla></Tabla>
        </Container>
        </>
    );


}

export default Contratos
