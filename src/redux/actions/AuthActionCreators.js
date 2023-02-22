// TODO function return the object of action {type:"" , payload:{}}

import * as ActionType from './ActionTypes';

export const setToken = token => ({
  type: ActionType.SET_TOKEN,
  payload: {token},
});

export const setUser = user => ({
  type: ActionType.SET_USER,
  payload: {user},
});
