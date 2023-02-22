import React, {useState, useEffect, useRef} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ReusableTextInput from '../../components/ReusableTextInput';
import MainButton from '../../components/MainButton';
import styles from './ConfirmationCodeScreenStyle';
import {validate} from '../../utils/Validate';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {TOKEN_KEY, USER_KEY} from '../../constants/Constants';
import {connect, useDispatch, useSelector} from 'react-redux';
import {
  confirmationCode,
  setToken,
  setUser,
} from '../../redux/actions/AuthActionCreators';
import {showError} from '../../utils/HelperFunctions';

function ConfirmationCodeScreen(props) {
  const phone = props.route.phone;
  const dispatch = useDispatch();
  // const [isLoading, setIsLoading] = useState(false);
  const isLoading = useSelector(state => state.auth.isConfirmCode);
  const success = useSelector(state => state.auth.confirmCodeSuccess);
  const failure = useSelector(state => state.auth.confirmCodeFailure);
  //! using it with connect function
  ////const {navigation, setToken, setUser} = props;
  const {navigation} = props;
  const [input, setInput] = useState({
    value: 0,
    isValid: false,
    times: false,
  });

  useEffect(() => {
    showError('Code is wrong');
  }, [failure]);

  const updateInput = inputValue => {
    setInput({
      ...input,
      value: inputValue,
      isValid: validate(inputValue, [{key: 'isConfirmationCode'}]),
    });
  };
  const doneHandler = () => {
    if (input.isValid) {
      /*
      setIsLoading(true);
      axios
        .post('/verify/validate', {phone, code: input.value})
        .then(res => {
          console.log(res.data);
          const {token, userData} = res.data;
          axios.defaults.headers.Authorization = 'Bearer' + token;
          AsyncStorage.setItem(TOKEN_KEY, token);
          AsyncStorage.setItem(USER_KEY, JSON.stringify(userData));
          dispatch(setToken(token));
          dispatch(setUser(userData));
          /*.then(() => {
            AsyncStorage.getItem(TOKEN_KEY).then(res => {
              //! to confirm if the token store or not getItem return in promise the value
              console.log(res);
            });
          });*/
      // })
      // .catch(error => console.log(error))
      // .finally(() => {
      //   setIsLoading(false);
      // });
      dispatch(confirmationCode(phone, input.value));
    }
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Confirmation Code</Text>
      <View style={styles.textInputView}>
        <ReusableTextInput
          bordered
          placeholder="__ __ __"
          keyboardType="number-pad"
          position="center"
          onChangeText={updateInput}
          onSubmitEditing={doneHandler}
        />
      </View>
      {input.times === false ? (
        <Text />
      ) : (
        <Text
          style={{
            fontFamily: defaultFontFamily,
            color: input.isValid ? 'green' : 'red',
          }}>
          {input.isValid
            ? 'Correct code'
            : input.value.length === 0
            ? 'Must Enter code'
            : 'Wrong code'}
        </Text>
      )}
      <View style={styles.buttonView}>
        <MainButton
          title="DONE"
          onPress={doneHandler}
          disabled={input.isValid}
          isLoading={isLoading}
        />
      </View>
    </View>
  );
}
// ? using connect function from react-redux
////const mapDispatchToProps = dispatch => ({
/**
 * TODO setToken is a attribute in object , the value of it is a function take parameter to do action , ...
 * TODO type is SET_TOKEN, take param and put it in the token in global state ,
 * * again this for setUser
 */
////setToken: token => dispatch({type: 'SET_TOKEN', payload: {token}}),
////setUser: user => dispatch({type: 'SET_USER', payload: {user}}),
////});
////export default connect(null, mapDispatchToProps)(ConfirmationCodeScreen);

export default ConfirmationCodeScreen;
