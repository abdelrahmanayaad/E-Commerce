// TODO function return the object of action {type:"" , payload:{}}

import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {TOKEN_KEY, USER_KEY} from '../../constants/Constants';
import * as ActionType from './ActionTypes';
//? Different between plain JS action or sync action and async action
// ! sync action return plain object
// ! async action return function

export const setToken = token => ({
  type: ActionType.SET_TOKEN,
  payload: {token},
});

export const setUser = user => ({
  type: ActionType.SET_USER,
  payload: {user},
});

export const signInStart = () => ({type: ActionType.SIGNIN_START});

export const signInSuccess = () => ({type: ActionType.SIGNIN_SUCCESS});

export const signInFailure = () => ({type: ActionType.SIGNIN_FAILURE});

export const confirmCodeStart = () => ({type: ActionType.CONFIRM_CODE_START});

export const confirmCodeSuccess = () => ({
  type: ActionType.CONFIRM_CODE_SUCCESS,
});

export const confirmCodeFailure = () => ({
  type: ActionType.CONFIRM_CODE_FAILURE,
});

export const signIn = phone => {
  return (dispatch, getState) => {
    // ! api request
    dispatch(signInStart());
    axios
      .post('/verify', {phone})
      .then(res => {
        console.log(res.data);
        dispatch(signInSuccess());
        ////navigation.navigate('ConfirmationCodeScreen', {phone: phone});
      })
      .catch(error => {
        console.log('Error is ' + error);
        dispatch(signInFailure());
      });
  };
};

export const confirmationCode = (phone, code) => {
  return (dispatch, getState) => {
    dispatch(confirmCodeStart());
    axios
      .post('/verify/validate', {phone, code})
      .then(res => {
        console.log(res.data);
        const {token, userData} = res.data;
        axios.defaults.headers.Authorization = 'Bearer' + token;
        AsyncStorage.setItem(TOKEN_KEY, token);
        AsyncStorage.setItem(USER_KEY, JSON.stringify(userData));
        dispatch(setToken(token));
        dispatch(setUser(userData));
        dispatch(confirmCodeSuccess());
      })
      .catch(error => {
        console.log(error);
        dispatch(confirmCodeFailure());
      });
  };
};
