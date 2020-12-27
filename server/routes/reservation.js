import express from 'express';
import { getReservation, getReservations, createReservation, deleteReservation, updateReservation } from '../controllers/reservation.js';

const router = express.Router();

router.get('/', getReservations);
router.post('/', createReservation);
router.get('/:id', getReservation);
router.delete('/:id', deleteReservation);
router.patch('/:id', updateReservation);

export default router;