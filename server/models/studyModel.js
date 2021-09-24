import mongoose from 'mongoose';

const studyRoomSchema = mongoose.Schema({
    capacity: Number,
    availability: Array,
    vending: Boolean,
    max_time: Number,
    room_number: Number
});

var StudyModel = mongoose.model('StudyModel', studyRoomSchema);

export default StudyModel;