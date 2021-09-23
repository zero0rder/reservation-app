import mongoose from 'mongoose';

const studyRoomSchema = mongoose.Schema({
    capacity: Number,
    availability: Array,
    vending: Boolean,
    maxTime: Number,
    roomNumber: Number
});

var StudyModel = mongoose.model('StudyModel', studyRoomSchema);

export default StudyModel;