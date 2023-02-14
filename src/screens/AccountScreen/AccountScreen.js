import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {Fragment} from 'react';
import styles from './AccountScreenStyle';
import Ionicons from 'react-native-vector-icons/Ionicons';

export default function AccountScreen() {
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
  const renderList = (iconName, title) => {
    return (
      <View>
        <TouchableOpacity style={styles.listViewComponent}>
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
      {renderList('person-outline', 'Profile')}
      {renderList('location-outline', 'Shipping address')}
      {renderList('cart-outline', 'Previous orders')}
      {renderList('log-out-outline', 'Log out')}
    </View>
  );
}
