import React, {Fragment} from 'react';
import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {COLORS, defaultFontFamily} from '../constants/Constants';
import Card from './Card';
import Price from './Price';

const {width, height} = Dimensions.get('window');

const imageWidth = width / 2 - 15;
const imageHeight = imageWidth * 1.5;

export default function Product(props) {
  const {product, style} = props;
  return (
    // <View style={{alignItems: 'flex-start'}}>
    <View style={style}>
      <Card>
        <Image source={{uri: product.image}} style={styles.categoryImage} />
      </Card>
      <Price price={product.price} discount={product.discount} />
      <Text style={styles.title}>{product.name}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  categoryImage: {
    width: imageWidth,
    height: imageHeight,
  },
  title: {
    fontFamily: defaultFontFamily,
    fontSize: RFValue(18),
    color: COLORS.black,
  },
});
