import React from 'react';
import { Container, FormControl, InputLabel, Input, FormHelperText, Button, Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabla from './Tablas/TablaEmpleados';

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

function Empleados () {
    const classes = useStyles();
    return (
        <>
        <Container className={classes.Container} maxWidth="xs">
            <h1>Registro Nuevo Empleado</h1>
            <div className={classes.root}>
            <Paper elevation={3} className={classes.paper}>
                <Grid container>
                    <Grid item md={12}>
                        <FormControl>
                            <InputLabel htmlFor="Cédula">Cédula Empleado</InputLabel>
                            <Input id="Cédula" type="Cédula" aria-describedby="Cédula-helper"/>
                            <FormHelperText id="Cédula-helper"></FormHelperText>
                        </FormControl>
                    </Grid>
                    <Grid item md={12}>
                        <FormControl>
                            <InputLabel htmlFor="Name">Nombre Empleado</InputLabel>
                            <Input id="Name" type="name" aria-describedby="Name-helper"/>
                            <FormHelperText id="Name-helper"></FormHelperText>
                        </FormControl>
                    </Grid>
                    <Grid item md={12}>
                        <FormControl>
                            <InputLabel htmlFor="Last">Apellidos Empleado</InputLabel>
                            <Input id="Last" type="text" aria-describedby="Last-helper"/>
                            <FormHelperText id="Last-helper"></FormHelperText>
                        </FormControl>
                    </Grid>
                    <Grid item md={12}>
                        <FormControl>
                            <InputLabel htmlFor="Address">Dirección Empleado</InputLabel>
                            <Input id="Address" type="text" aria-describedby="Address-helper"/>
                            <FormHelperText id="Address-helper"></FormHelperText>
                        </FormControl>
                    </Grid>
                    <Grid item md={12}>
                        <FormControl>
                            <InputLabel htmlFor="Country">Ciudad Empleado</InputLabel>
                            <Input id="Country" type="text" aria-describedby="Country-helper"/>
                            <FormHelperText id="Country-helper"></FormHelperText>
                        </FormControl>
                    </Grid>
                    <Grid item md={12}>
                        <FormControl>
                            <InputLabel htmlFor="Phone">Teléfono Empleado</InputLabel>
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
        <div style={{height:'20px'}} >
            
        </div>
        <Container>
            <Tabla></Tabla>
        </Container>
        </>
    );


}

export default Empleados;




