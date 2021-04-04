import mongoose from 'mongoose';

const reservationSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    reserveDateTime: Date,
    reserveLocation: String,
    comments: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
});

var ReservationModel = mongoose.model('ReservationModel', reservationSchema);

export default ReservationModel;