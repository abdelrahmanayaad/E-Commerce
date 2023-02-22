/*
!import React, {useEffect, useState} from 'react';
!import AsyncStorage from '@react-native-async-storage/async-storage';
!import axios from 'axios';
!import {TOKEN_KEY, USER_KEY} from './src/constants/Constants';
!import AppContainer from './src/navigation/AppContainer';
!import {connect, useDispatch, useSelector} from 'react-redux';

?function App(props) {
  *const token = useSelector(state => state.auth.token);
  *const dispatch = useDispatch();
  ?useEffect(() => {
    *AsyncStorage.getItem(TOKEN_KEY).then(token => {
      *dispatch({type: 'SET_TOKEN', payload: {token}});
      *axios.defaults.headers.Authorization = 'Bearer' + token; // TODO -> send token with every time
      *AsyncStorage.getItem(USER_KEY).then(user => {
        *dispatch({type: 'SET_USER', payload: {user}});
      *});
    *});
  ?}, []);
  TODO return token != null && <AppContainer isAuth={!!token} />;
*}
!export default App;
*/
import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {TOKEN_KEY, USER_KEY} from './src/constants/Constants';
import AppContainer from './src/navigation/AppContainer';
import {connect, useDispatch, useSelector} from 'react-redux';
import reactotron from 'reactotron-react-native';
import {setToken, setUser} from './src/redux/actions/AuthActionCreators';

function App(props) {
  // ! using connect function & props
  ////const {token, setToken, setUser} = props;
  const token = useSelector(state => state.auth.token);
  const dispatch = useDispatch();
  // const setToken = token => dispatch({type: 'SET_TOKEN', payload: {token}});
  // const setUser = user => dispatch({type: 'SET_USER', payload: {user}});
  useEffect(() => {
    // !AsyncStorage.clear();
    AsyncStorage.getItem(TOKEN_KEY).then(token => {
      // ! using connect function & props
      ////setToken(res);
      // ? using useDispatchHook and useSelector
      ////dispatch({type: 'SET_TOKEN', payload: {token}});
      dispatch(setToken(token));
      axios.defaults.headers.Authorization = 'Bearer' + token; // TODO -> send token with every time
      AsyncStorage.getItem(USER_KEY).then(user => {
        // ! using connect function & props
        //// setUser(JSON.parse(user));
        ////dispatch({type: 'SET_USER', payload: {user}});
        dispatch(setUser(JSON.parse(user)));
        /**
         * ? why i do JSON.parse(user)
         * TODO -> to convert string into the origin type of user & it is object {}
         * * because the AsyncStorage accept only string , we passing user with JSON.stringify and receive it using JSON.parse
         */
      });
    });
  }, []);
  return <AppContainer isAuth={false} />;
  // return token != null && <AppContainer isAuth={!!token} />;
  // return <FetchApi />;
}
//TODO -> mapStateToProps is a function , the state come to it in params to return state.auth.token in the props
////const mapStateToProps = state => ({token: state.auth.token});
//TODO -> mapDispatchToProps is a function to return action and get this dispatch action in params & return it in the props
////const mapDispatchToProps = dispatch => ({
///// //? when i use setToken from props this function will execute
//// setToken: token => dispatch({type: 'SET_TOKEN', payload: {token}}),
////setUser: user => dispatch({type: 'SET_USER', payload: {user}}),
////});
//// export default connect(mapStateToProps, mapDispatchToProps)(App);
export default App;
