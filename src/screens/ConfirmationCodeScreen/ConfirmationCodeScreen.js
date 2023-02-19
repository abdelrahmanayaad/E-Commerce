import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ReusableTextInput from '../../components/ReusableTextInput';
import MainButton from '../../components/MainButton';
import styles from './ConfirmationCodeScreenStyle';
import {validate} from '../../utils/Validate';
import axios from 'axios';

export default function ConfirmationCodeScreen(props) {
  const phone = props.route.phone;
  const [isLoading, setIsLoading] = useState(false);
  const {navigation} = props;
  const [input, setInput] = useState({
    value: 0,
    isValid: false,
    times: false,
  });
  const updateInput = inputValue => {
    setInput({
      ...input,
      value: inputValue,
      isValid: validate(inputValue, [{key: 'isConfirmationCode'}]),
    });
  };
  const doneHandler = () => {
    if (input.isValid) {
      setIsLoading(true);
      axios
        .post('/verify/validate', {phone, code: input.value})
        .then(res => {
          console.log(res.data);
        })
        .catch(error => console.log(error))
        .finally(() => {
          setIsLoading(false);
        });
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
