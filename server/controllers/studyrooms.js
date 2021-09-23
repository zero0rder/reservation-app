import StudyModel from '../models/studyModel.js';

export const getStudyRooms = async (req, res) => {
    try {
        const studyrooms = await StudyModel.find();
        res.status(200).json(studyrooms);
    } catch(err) {
        res.status(404).json({message: err.message});
    }
}

export const getStudyRoom = async (req, res) => {
    const { id } = req.params;

    try {
        const studyroom = await StudyModel.findById(id);
        res.status(200).json(studyroom);
    } catch(err) {
        res.status(404).json({message: err.message});
    }
}