import { robotActionTypes } from "./type";

const INITIALSTATE = {
  robot: [],
  isPending: false,
  error: ''
}

const INITIALSEARCH = {
  searchField: '',
}

const {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOT_FAILED,
  REQUEST_ROBOT_PENDING,
  REQUEST_ROBOT_SUCCESS
} = robotActionTypes;

export const searchReducer = (state = INITIALSEARCH, action) => {
  switch (action.type) {
    case CHANGE_SEARCH_FIELD:
      return {
        ...state,
        searchField: action.payload
      }
    default:
      return state;
  }
}

export const robotReducer = (state = INITIALSTATE, action) => {
  switch (action.type) {
    case REQUEST_ROBOT_PENDING:
      return {
        ...state,
        isPending: true
      }
    case REQUEST_ROBOT_SUCCESS:
      return {
        ...state,
        isPending: false,
        robot: action.payload
      }
    case REQUEST_ROBOT_FAILED:
      return {
        ...state,
        error: action.payload
      }
    default:
      return state;
  }
}