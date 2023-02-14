import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {Fragment} from 'react';
import styles from './AccountScreenStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function AccountScreen(props) {
  const {navigation} = props;
  const renderHeader = () => {
    return (
      <View style={styles.header}>
        <Ionicons name="person" style={styles.icon} />
        <View style={styles.lineVertical} />
        <View style={styles.nameView}>
          <Text style={styles.nameStyle}>Abdelrahman Ayad</Text>
          <Text style={styles.phoneNumber}>01026669167</Text>
        </View>
      </View>
    );
  };
  const renderList = (iconName, title, onPress) => {
    return (
      <View>
        <TouchableOpacity style={styles.listViewComponent} onPress={onPress}>
          <Ionicons name={iconName} style={styles.iconList} />
          <Text style={styles.titleList}>{title}</Text>
        </TouchableOpacity>
        <View style={styles.horizontalLine} />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      {renderHeader()}
      {renderList('person-outline', 'Profile', () =>
        navigation.navigate('UpdateProfileScreen'),
      )}
      {renderList('location-outline', 'Shipping address', () =>
        navigation.navigate('AddAddressScreen'),
      )}
      {renderList('cart-outline', 'Previous orders', () =>
        navigation.navigate('OrderScreen'),
      )}
      {renderList('log-out-outline', 'Log out', () =>
        navigation.navigate('UpdateProfileScreen'),
      )}
    </View>
  );
}
