import React, { useState, useEffect, useContext } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Reservation from '../components/Reservations/Reservation/reservation';
import { getReservations } from '../actions/reservations'
import { Grid, CircularProgress, Typography } from '@material-ui/core';
import { AuthUserContext } from '../components/Session/index';
import useStyles from '../styles';

const AccountPage = () => {
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();
    const authUser = useContext(AuthUserContext);
    const reservations = useSelector((state) => state.reservations.filter(res => res.email === authUser.providerData[0].email));
    const classes = useStyles();

    useEffect(() => {
        dispatch(getReservations());
    }, [dispatch])
    
    return (
        !reservations.length ? <CircularProgress /> : (
            <Grid container alignItems='stretch' spacing={3}>
                <Typography className={classes.accountHeader}>Saved Reservations</Typography>
                { reservations.map(reservation => (
                    <Grid key={reservation._id} item xs={12} sm={10} md={6}>
                        <Reservation reservation={reservation} setCurrentId={setCurrentId}/>
                    </Grid>
                ))}
            </Grid>
        )
    )
}

export default AccountPage;