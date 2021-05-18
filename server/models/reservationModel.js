import mongoose from 'mongoose';

const reservationSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    comments: String,
    reserveTime: String,
    reserveLocation: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
});

var ReservationModel = mongoose.model('ReservationModel', reservationSchema);

export default ReservationModel;