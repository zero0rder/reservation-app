import express from 'express';
import { getStudyRooms, getStudyRoom } from '../controllers/studyrooms.js';

const router = express.Router();

router.get('/', getStudyRooms);
router.get('/:id', getStudyRoom);

export default router;