import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ReusableTextInput from '../../components/ReusableTextInput';
import MainButton from '../../components/MainButton';
import styles from './LoginScreenStyle';

export default function LoginScreen(props) {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Your Phone Number</Text>
      <View style={styles.textInputView}>
        <ReusableTextInput
          lined
          left="phone"
          placeholder="Phone"
          keyboardType="number-pad"
        />
      </View>
      <View style={styles.buttonView}>
        <MainButton
          title="DONE"
          onPress={() => {
            navigation.navigate('ConfirmationCodeScreen');
          }}
        />
      </View>
    </View>
  );
}
