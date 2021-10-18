import { FETCH_ALL, FETCH,  CREATE, DELETE, UPDATE } from '../constants/actionTypes';
//reducers = pure functions
//takes currState + action as params
//returns newState
export default (reservations = [], action) => {
    switch (action.type) {
      case FETCH_ALL:
        return action.payload;
        case FETCH:
        return reservations.map((reservation) => (reservation._id === action.payload._id ? action.payload : reservation));
      case CREATE:
        return [...reservations, action.payload];
      case UPDATE:
        return reservations.map((reservation) => (reservation._id === action.payload._id ? action.payload : reservation));
      case DELETE:
        return reservations.filter((reservation) => reservation._id !== action.payload);
      default:
        return reservations;
    }
};