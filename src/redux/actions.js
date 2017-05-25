import { SIGNED_IN, SET_GOALS, SET_COMPLETED  } from './actionTypes';

export const logUser = (email) => {
  return {
    type: SIGNED_IN,
    email
  };
};

export const setGoals = (goals) => {
  return {
    type: SET_GOALS,
    goals
  };
};

export const setCompleted = (completedGoals) => {
  return {
    type: SET_COMPLETED,
    completedGoals
  }
}
