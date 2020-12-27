import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createReservation, updateReservation} from '../../actions/reservations';
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import useStyles from './styles';

const Form = ({currentId, setCurrentId}) => {
    const [reservationData, setReservationData] = useState({student: '', itemName: '', cclNum: '', comments: ''});
    const reservation = useSelector((state) => (currentId ? state.reservations.find((reservation) => reservation._id === currentId) : null));
    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() => {
        if (reservation) setReservationData(reservation);
    }, [reservation]);

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if(currentId === 0){
            dispatch(createReservation(reservationData));
            clear();
        } else {
            dispatch(updateReservation(currentId, reservationData));
            clear();
        }
    };

    const clear = () => {
        setCurrentId(0);
        setReservationData({student: '', itemName: '', cclNum: '', comments: ''});
    };

    return (
        <Paper className={classes.paper}>
            <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant='h6'>{currentId ? "Editing A Reservation": 'Making A Reservation'}</Typography>
                <TextField name='name' variant='outlined' label='Name' fullWidth value={reservationData.student} onChange={(e) => setReservationData({ ...reservationData, student: e.target.value })}/>
                <Paper className={classes.reservedPaper}>
                    <Typography>Reserved Items</Typography>
                    <TextField name='itemName' variant='outlined' label='Item Name' fullWidth value={reservationData.itemName} onChange={(e) => setReservationData({ ...reservationData, itemName: e.target.value })}/>
                    <TextField name='cclNum' variant='outlined' label='CCL #' fullWidth value={reservationData.cclNum} onChange={(e) => setReservationData({ ...reservationData, cclNum: e.target.value })}/>
                </Paper>
                <TextField name='comments' variant='outlined' label='Comments' fullWidth multiline rows={4} value={reservationData.comments} onChange={(e) => setReservationData({ ...reservationData, comments: e.target.value })}/>
                <Button className={classes.buttonSubmit} variant='contained' color='primary' size="large" type='submit' fullWidth>Submit</Button>
                <Button variant='contained' color='secondary' size='small' onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    )
}

export default Form;