import { FETCH_ALL, CREATE, DELETE, FETCH, UPDATE } from '../constants/actionTypes';
import * as api from '../api/index';

export const getReservations = () => async (dispatch) => {
    try {
        const { data } = await api.fetchReservations();
        dispatch({ type: FETCH_ALL, payload: data });

      } catch (error) {
        console.log(error.message);
      }
}

export const getReservation = (id, reservation) => async (dispatch) => {
    try {
        const { data } = await api.fetchReservation(id, reservation);
        dispatch({ type: FETCH, payload: data });

      } catch (error) {
        console.log(error.message);
      }
}

export const createReservation = (reservation) => async (dispatch) => {
    try {
        const { data } = await api.createReservation(reservation);
        dispatch({ type: CREATE, payload: data });

      } catch (error) {
        console.log(error.message);
      }
}

export const deleteReservation = (id) => async (dispatch) => {
    try {
        await api.deleteReservation(id);
        dispatch({ type: DELETE, payload: id });

      } catch (error) {
        console.log(error.message);
      }
}

export const updateReservation = (id, reservation) => async (dispatch) => {
    try {
        const { data } = await api.updateReservation(id, reservation);
        dispatch({ type: UPDATE, payload: data });

      } catch (error) {
        console.log(error.message);
      }
}