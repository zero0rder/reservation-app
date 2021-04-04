import express from 'express';
import mongoose from 'mongoose';
import ReservationModel from '../models/reservationModel.js';

const router = express.Router();

export const getReservations = async (req, res) => {
    try {
        const reservations = await ReservationModel.find();
        res.status(200).json(reservations);
    } catch(err) {
        res.status(404).json({message: err.message});
    }
}

export const getReservation = async (req, res) => {
    const { id } = req.params;

    try {
        const reservation = await ReservationModel.findById(id);
        res.status(200).json(reservation);
    } catch(err) {
        res.status(404).json({message: err.message});
    }
}

export const createReservation = async (req, res) => {
    const { firstName, lastName, email, reserveDateTime, reserveLocation, comments} = req.body;
    const newReservation = new ReservationModel({ firstName, lastName, email, reserveDateTime, reserveLocation, comments });
    
    try {
       await newReservation.save();
        res.status(201).json(newReservation);
    } catch(err) {
        res.status(404).json({message: err.message});
    }
}

export const deleteReservation = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    await ReservationModel.findByIdAndRemove(id);

    res.json({message: 'Post deleted successfully.' });
}

export const updateReservation = async (req, res) => {
    // logic
}

export default router;