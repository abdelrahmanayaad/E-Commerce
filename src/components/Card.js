import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';

export default function Card(props) {
  const {style, ...rest} = props;
  return <View {...rest} style={[styles.card, style]} />;
}

const styles = StyleSheet.create({
  card: {
    elevation: 3,
    padding: RFValue(0),
    backgroundColor: '#fff',
    alignSelf: 'flex-start',
  },
});
