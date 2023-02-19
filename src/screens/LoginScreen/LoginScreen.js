import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ReusableTextInput from '../../components/ReusableTextInput';
import MainButton from '../../components/MainButton';
import styles from './LoginScreenStyle';
import {validate} from '../../utils/Validate';
import {defaultFontFamily} from '../../constants/Constants';
import axios from 'axios';

export default function LoginScreen(props) {
  const {navigation} = props;
  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState({
    value: '',
    isValid: false,
    times: false,
  });

  const updateInput = inputValue => {
    setInput({
      ...input,
      value: inputValue,
      isValid: validate(inputValue, [{key: 'isPhone'}]),
    });
  };

  const handleButton = () => {
    if (input.isValid) {
      setIsLoading(true);
      axios
        .post('/verify', {phone: input.value})
        .then(res => {
          console.log(res.data);
          navigation.navigate('ConfirmationCodeScreen', {phone: input.value});
        })
        .catch(error => {
          console.log('Error is ' + error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
    setInput({...input, times: true});
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Your Phone Number</Text>
      <View style={styles.textInputView}>
        <ReusableTextInput
          lined
          left="phone"
          placeholder="Phone"
          keyboardType="number-pad"
          onChangeText={updateInput}
          valid={input.isValid}
          time={input.times}
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
            ? 'Correct Phone'
            : input.value.length === 0
            ? 'Must Enter Phone'
            : 'Wrong Phone'}
        </Text>
      )}
      <View style={styles.buttonView}>
        <MainButton
          title="DONE"
          onPress={handleButton}
          disabled={input.isValid}
          isLoading={isLoading}
        />
      </View>
    </View>
  );
}
