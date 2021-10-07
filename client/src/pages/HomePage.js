import React, { useState, useEffect }  from 'react';
import { useDispatch } from 'react-redux';
import Form from '../components/Form/form';
import { getReservations } from '../actions/reservations';
import Reservations from '../components/Reservations/reservations';
import { Container, Grow, Grid } from '@material-ui/core';
import useStyles from '../styles';

const HomePage = () => {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();
    const classes = useStyles();
    
    useEffect(() => {
        dispatch(getReservations());
        
    }, [dispatch])

    return (
        <Container>
            <Grow in>
                <Container className={classes.contentContainer}>
                    <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
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
    )
}

export default HomePage;