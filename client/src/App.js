import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import Reservations from './components/Reservations/reservations';
import Form from './components/Form/form';
import { getReservations } from './actions/reservations';
import useStyles from './styles';

const App = () => {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(()=> {
        dispatch(getReservations());
    }, [dispatch]);
    
    return (
        <Container maxWidth='lg'>
            <AppBar position="static" color="inherit">
                <Typography className={classes.heading} variant="h2" align="center">Tech Lab Reservations</Typography>
            </AppBar>
            <Grow in>
                <Container className={classes.contentContainer}>
                    <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={6}>
                            <Reservations setCurrentId={setCurrentId}/>
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <Form currentId={currentId} setCurrentId={setCurrentId}/>
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
            {/* TODO: Admin Dashbord */}
        </Container>
    );
}

export default App;