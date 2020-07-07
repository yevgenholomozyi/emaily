import axios from 'axios';
import { FETCH_USER } from './types';

export const fetchUser = () => async dispatch => {
    const res = await axios.get('/api/current_user'); // if redux-thunk sees that actionCreator returns a function, it will automatically pass in a dispatch as arg
  
    dispatch({ type: FETCH_USER, payload: res.data }); // the idea is that we don't want to dispatch an action untill axios request is complited
};

export const handleToken = (token) => async dispatch => {
    const res = await axios.post('/api/stripe', token);

    dispatch({ type: FETCH_USER, payload: res.data });
}