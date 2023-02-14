import React from 'react';
import {ImageBackground, Text, View} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Price from '../../components/Price';
import MainButton from '../../components/MainButton';
import AddToCartButton from '../../components/AddToCartButton';
import {COLORS, ICONS} from '../../constants/Constants';
import {DummyProduct, DummyProductWithDiscount} from '../../utils/DummyData';
import styles from './ProductScreenStyle';

export default function ProductScreen(props) {
  const {productId} = props.route.params; // passing params from component to another component
  const getProduct = productId => {
    // console.log(productId);
    return DummyProduct;
  };
  const product = getProduct(productId);
  return (
    <View style={styles.container}>
      <ImageBackground
        style={styles.productImage}
        source={{uri: product.image}}>
        <View style={styles.headerView}>
          <AntDesign
            name="arrowleft"
            size={ICONS.xlIcon}
            color={COLORS.white}
          />
          <View style={styles.productNameView}>
            <Text style={styles.productName}>{product.name}</Text>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.footerView}>
        <Price price={product.price} discount={product.discount} />
        <View style={styles.descriptionView}>
          <Text style={styles.descriptionTitle}>Description</Text>
          <Text style={styles.description}>{product.description}</Text>
        </View>
        <View style={styles.buttonView}>
          <AddToCartButton />
          {/* <MainButton title="Add to Cart" /> */}
        </View>
      </View>
    </View>
  );
}
