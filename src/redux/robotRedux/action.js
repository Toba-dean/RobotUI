import { robotActionTypes } from "./type";

const {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOT_FAILED,
  REQUEST_ROBOT_PENDING,
  REQUEST_ROBOT_SUCCESS
} = robotActionTypes;


export const setSearchField = text => ({
  type: CHANGE_SEARCH_FIELD,
  payload: text
})

export const requestRobot = () => dispatch => {
  dispatch({ type: REQUEST_ROBOT_PENDING });
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => dispatch({ type: REQUEST_ROBOT_SUCCESS, payload: data }))
    .catch(e => dispatch({ type: REQUEST_ROBOT_FAILED, payload: e }))
}