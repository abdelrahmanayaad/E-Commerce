import React from 'react';
import {Text, View} from 'react-native';
import ReusableTextInput from '../../components/ReusableTextInput';
import MainButton from '../../components/MainButton';
import styles from './AddAddressScreenStyle';
export default function AddAddressScreen() {
  const renderInput = placeholder => {
    return (
      <View>
        <ReusableTextInput stacked placeholder={placeholder} />
        <View style={styles.seperateView} />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      {renderInput('Name')}
      {renderInput('Phone')}
      {renderInput('City')}
      {renderInput('Area')}
      {renderInput('Street')}
      {renderInput('Building')}
      <View style={styles.buttonView}>
        <MainButton title="ADD" />
      </View>
    </View>
  );
}
