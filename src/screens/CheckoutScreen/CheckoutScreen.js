import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import styles from './CheckoutScreenStyle';
import MainButton from '../../components/MainButton';
import {CURRENCY} from '../../constants/Constants';

export default function CheckoutScreen(props) {
  const renderOrderInfo = () => {
    return (
      <View style={styles.orderView}>
        <Text style={styles.shiptoText}>Ship to</Text>
        <View>
          <Text style={styles.addressText}>Egypt,Tanta</Text>
          <Text style={styles.addressText}>House no: 74</Text>
          <Text style={styles.addressText}>Road no: 72</Text>
        </View>
        <TouchableOpacity style={styles.updateTouch}>
          <Text style={styles.updateText}>Update</Text>
        </TouchableOpacity>
      </View>
    );
  };

  const renderComponent = (title, price) => {
    return (
      <View style={styles.componentView}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>{price}</Text>
      </View>
    );
  };

  const renderPriceInfo = () => {
    return (
      <View>
        <View>{renderComponent('Subtotal', CURRENCY + '160.00')}</View>
        <View>{renderComponent('Shipping', 'FREE')}</View>
        <View style={styles.line} />
        <View>{renderComponent('Total', CURRENCY + '160.00')}</View>
      </View>
    );
  };

  const renderButton = () => {
    return <MainButton title="BUY" />;
  };

  return (
    <View style={styles.container}>
      {renderOrderInfo()}
      {renderPriceInfo()}
      {renderButton()}
    </View>
  );
}
