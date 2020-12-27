import mongoose from 'mongoose';

const reservationSchema = mongoose.Schema({
    student: String,
    itemName: String,
    cclNum: Number,
    comments: String,
    createdAt: {
        type: Date,
        default: new Date()
    }
});

var ReservationModel = mongoose.model('ReservationModel', reservationSchema);

export default ReservationModel;