import axios from 'axios';
/* 
  Action Types Go Here!
  Be sure to export each action type so you can pull it into your reducer
*/
export const ERROR = 'ERROR';
export const GETTING_SMURFS = 'GETTING_SMURFS';
export const GET_SMURFS = 'GET_SMURFS';
export const ADDING_SMURF = 'ADDING_SMURF';
export const ADD_SMURF = 'ADD_SMURF';

const URL = 'http://localhost:3333/smurfs'

/*
  For this project you'll need at least 2 action creators for the main portion,
   and 2 more for the stretch problem.
   Be sure to include action types for each type of action creator. Also, be sure to mind
     the "pending" states like, fetching, creating, updating and deleting.
   C - addSmurf
   R - getSmurfs
   U - updateSmurf
   D - deleteSmurf
*/
export const getSmurfs = () => {
  const smurfs = axios.get(`${URL}/get`);
  return dispatch => {
    dispatch({ type: GETTING_SMURFS});
    smurfs
      .then(response => {
        console.log(response);
        dispatch({ type: GET_SMURFS, payload: response.data})
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err })
      })
  }
}

export const addSmurf = smurf => {
  const newSmurf = axios.post(`${URL}/create`, smurf);
  return dispatch => {
    dispatch({ type: ADDING_SMURF });
    newSmurf
      .then(({ data }) => {
        dispatch({ type: ADD_SMURF, payload: data});
      })
      .catch(err => {
        dispatch({ type: ERROR, payload: err })
      })
  } 
}