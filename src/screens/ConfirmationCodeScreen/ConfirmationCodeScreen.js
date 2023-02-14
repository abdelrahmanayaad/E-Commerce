import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ReusableTextInput from '../../components/ReusableTextInput';
import MainButton from '../../components/MainButton';
import styles from './ConfirmationCodeScreenStyle';

export default function ConfirmationCodeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Enter Confirmation Code</Text>
      <View style={styles.textInputView}>
        <ReusableTextInput
          bordered
          placeholder="__ __ __"
          keyboardType="number-pad"
          position="center"
        />
      </View>
      <View style={styles.buttonView}>
        <MainButton title="DONE" />
      </View>
    </View>
  );
}
