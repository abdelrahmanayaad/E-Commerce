import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  BoldFontFamily,
  COLORS,
  FONTS,
  MARGIN,
  PADDING,
} from '../constants/Constants';
import AddToCartButton from './AddToCartButton';
import Card from './Card';
import Price from './Price';

export default function CartItem(props) {
  const {cartItem, style} = props;
  return (
    <Card style={[styles.card, style]}>
      <View style={styles.container}>
        <Image source={{uri: cartItem.image}} style={styles.image} />
        <View style={styles.rightView}>
          <Text style={styles.productNameText}>{cartItem.name}</Text>
          <Price price={cartItem.price} />
          <AddToCartButton />
        </View>
      </View>
    </Card>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: PADDING.mdPadding,
    flexDirection: 'row',
  },
  image: {
    width: RFValue(100),
    height: RFValue(100),
    marginEnd: MARGIN.mdMargin,
  },
  card: {
    alignSelf: 'stretch',
  },
  rightView: {
    flex: 1,
    justifyContent: 'space-between',
  },
  productNameText: {
    fontSize: FONTS.h4,
    color: COLORS.black,
    fontFamily: BoldFontFamily,
    // marginTop: RFValue(-6),
  },
});
