import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createReservation, updateReservation} from '../../actions/reservations';
import { TextField, Button, Typography, Paper, Select, MenuItem, InputLabel, FormControl } from '@material-ui/core';
import useStyles from './styles';
const availLocals  = ['rm01', 'rm02', 'rm03', 'rm04', 'rm05', 'rm06'];
const availTimes  = ['8:30', '9:15', '10:00', '10:30', '11:45', '12:30'];

const Form = ({currentId, setCurrentId}) => {
    const [reservationData, setReservationData] = useState({firstName: '', lastName: '', email: '', comments: '', reserveTime: '', reserveLocation: ''});
    const reservation = useSelector((state) => (currentId ? state.reservations.find((reservation) => reservation._id === currentId) : null));
    const dispatch = useDispatch();
    const classes = useStyles();

    useEffect(() => {
        if (reservation) setReservationData(reservationData);
    }, [reservation, reservationData]);

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
        setReservationData({firstName: '', lastName: '', email: '', comments: '', reserveTime: '', reserveLocation: ''});
    };

    return (
        <Paper className={classes.paper}>
            <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant='h6'>{currentId ? "Editing A Reservation": 'Making A Reservation'}</Typography>

                {/* STUDENT INFO TEXT FIELDS */}
                <TextField name='firstName' variant='outlined' label='First Name' fullWidth value={reservationData.firstName} 
                onChange={(e) => setReservationData({ ...reservationData, firstName: e.target.value })}/>
                <TextField name='lastName' variant='outlined' label='Last Name' fullWidth value={reservationData.lastName} 
                onChange={(e) => setReservationData({ ...reservationData, lastName: e.target.value })}/>
                <TextField name='email' variant='outlined' label='Email' fullWidth value={reservationData.email} 
                onChange={(e) => setReservationData({ ...reservationData, email: e.target.value })}/>
                <FormControl className={classes.formCtrl}>
                    <InputLabel id='reserveTime'>Times</InputLabel>
                    <Select value={reservationData.reserveTime} labelId='reserveTime' onChange={(e) => setReservationData({...reservationData, reserveTime: e.target.value})}>
                        { availTimes.map((l, i) => ( 
                            <MenuItem key={i} id={`timeOpt-${i}`} value={l}>{l.toUpperCase()}</MenuItem> 
                        ))}
                    </Select>
                </FormControl>
                <FormControl className={classes.formCtrl}>
                    <InputLabel id='reserveLocation'>Locations</InputLabel>
                    <Select value={reservationData.reserveLocation} labelId='reserveLocation' onChange={(e) => setReservationData({...reservationData, reserveLocation: e.target.value})}>
                        { availLocals.map((l, i) => ( 
                            <MenuItem key={i} id={`localeOpt-${i}`} value={l}>{l.toUpperCase()}</MenuItem> 
                        ))}
                    </Select>
                </FormControl>
                {/* COMMENT SECTION  */}
                <TextField name='comments' variant='outlined' label='Comments' fullWidth multiline rows={4} value={reservationData.comments} 
                onChange={(e) => setReservationData({ ...reservationData, comments: e.target.value })}/>

                {/* FORM SUBMIT AND CLEAR BUTTONS */}
                <Button className={classes.buttonSubmit} variant='contained' color='primary' size="large" type='submit' fullWidth>Submit</Button>
                <Button variant='contained' color='secondary' size='small' onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    )
}

export default Form;