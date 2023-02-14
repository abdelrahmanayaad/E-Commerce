import React from 'react';
import {Text, View} from 'react-native';
import ReusableTextInput from '../../components/ReusableTextInput';
import MainButton from '../../components/MainButton';
import styles from './UpdateProfileScreenStyle';
export default function UpdateProfileScreen() {
  return (
    <View style={styles.container}>
      <ReusableTextInput stacked placeholder="Name" />
      <View style={styles.seperateView} />
      <ReusableTextInput stacked placeholder="Phone" />
      <View style={styles.buttonView}>
        <MainButton title="SAVE" />
      </View>
    </View>
  );
}
