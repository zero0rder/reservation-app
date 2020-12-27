import axios from 'axios';

const url = 'http://localhost:5000/reservations';

export const fetchReservations = () => axios.get(url);
export const fetchReservation = (id) => axios.get(`${url}/${id}`);
export const createReservation = (newRsvp) => axios.post(url, newRsvp);
export const deleteReservation = (id) => axios.delete(`${url}/${id}`);
export const updateReservation = (id, updatedReservation) => axios.patch(`${url}/${id}`, updatedReservation);