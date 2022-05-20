import usereducer from './UserReducers';
import User_Select from './UserActionReducers';
import EventReducers from './EventReducers';
import Event_Select from './EventActionReducers';
import { combineReducers } from 'redux';

export default combineReducers({ usereducer, EventReducers, User_Select, Event_Select });