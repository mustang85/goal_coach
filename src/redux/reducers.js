import { combineReducers } from 'redux';

import { SIGNED_IN, SET_GOALS, SET_COMPLETED } from './actionTypes';

export const user = (state = { email: null }, action) => {
  if (action.type === SIGNED_IN) {
    return { ...state, email: action.email }
  }

  return state;
};

export const goals = (state = [], action) => {
  if (action.type === SET_GOALS) {
    return action.goals;
  }
  return state;
}

export const completedGoals = (state = [], action) => {
  if (action.type === SET_COMPLETED) {
    return [...state, ...action.completedGoals]
  }
  return state;
}

export default combineReducers({
  user,
  goals,
  completedGoals
})
