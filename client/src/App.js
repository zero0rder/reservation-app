import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import { Container, Grow, Grid } from '@material-ui/core';
import Reservations from './components/Reservations/reservations';
import Navigation from './components/Navigation/navigation';
import Form from './components/Form/form';
import { getReservations } from './actions/reservations';
import * as ROUTES from './constants/routes';
import LandingPage from './LandingPage';
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
            <Router>
                <Navigation />
                <hr/>
                // adds routes
                <Route exact path={ROUTES.LANDING} component={LandingPage} />
            </Router>
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
        </Container>
    );
}

export default App;