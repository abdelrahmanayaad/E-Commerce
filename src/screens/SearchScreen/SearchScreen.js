import React from 'react';
import {Text, View} from 'react-native';
import ReusableTextInput from '../../components/ReusableTextInput';
import styles from './SearchScreenStyle';

export default function SearchScreen() {
  return (
    <View style={styles.container}>
      <ReusableTextInput bordered right="search" placeholder="Search" />
    </View>
  );
}
