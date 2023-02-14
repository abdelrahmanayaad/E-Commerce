import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {BoldFontFamily, COLORS, CURRENCY} from '../constants/Constants';
import {actualPrice} from '../utils/HelperFunctions';

export default function Price(props) {
  const {price, discount} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.actualPrice}>
        {CURRENCY}
        {actualPrice(price, discount)}
      </Text>
      {discount && (
        <Text style={styles.oldPrice}>
          {CURRENCY}
          {price}
        </Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  actualPrice: {
    fontSize: RFValue(16),
    fontFamily: BoldFontFamily,
    color: COLORS.blue1,
    marginEnd: RFValue(5),
  },
  oldPrice: {
    fontFamily: BoldFontFamily,
    textDecorationLine: 'line-through',
    color: COLORS.gray1,
  },
});
