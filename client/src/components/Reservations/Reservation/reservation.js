import React from 'react';
import { Card, CardActions, CardContent, CardMedia, Button, Typography } from '@material-ui/core/';
import DeleteIcon from '@material-ui/icons/Delete';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import moment from 'moment';
import { useDispatch } from 'react-redux';
import { deleteReservation } from '../../../actions/reservations';
import useStyles from './styles';

const Reservation = ({reservation, setCurrentId}) => {
    const dispatch = useDispatch();
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} image={'https://user-images.githubusercontent.com/194400/49531010-48dad180-f8b1-11e8-8d89-1e61320e1d82.png'}/>
            <CardContent className={classes.overlay2}>
                <Button style={{ color: 'white' }} size="small" onClick={() => setCurrentId(reservation._id)}><MoreHorizIcon fontSize="default" /></Button>
            </CardContent>
            <CardContent className={classes.overlay}>
                <Typography variant="h6">{reservation.firstName + ' ' + reservation.lastName}</Typography>
                <Typography variant="body2">{moment(reservation.createdAt).fromNow()}</Typography>
            </CardContent>
            <CardContent>
                <Typography>Time: {reservation.reserveTime}</Typography>
                <Typography>Location: {reservation.reserveLocation}</Typography>
            </CardContent>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">{reservation.comments}</Typography>
            </CardContent>
            <CardActions className={classes.cardActions}>
                <Button size="small" color="primary" onClick={() => dispatch(deleteReservation(reservation._id))}><DeleteIcon fontSize="small" /> Delete</Button>
            </CardActions>
        </Card>
    );
}

export default Reservation;