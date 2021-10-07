import { combineReducers } from 'redux';
import reservations from './reservations';
import studyrooms from './studyrooms';

export const reducers = combineReducers({ reservations, studyrooms });