import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {RFValue} from 'react-native-responsive-fontsize';
import {COLORS, defaultFontFamily} from '../constants/Constants';
import Card from './Card';

const {width, height} = Dimensions.get('window');

const imageWidth = width / 2.2;
const imageHeight = imageWidth * 1.5;

export default function Category(props) {
  const {category, style} = props;
  const navigation = useNavigation();
  return (
    // <View style={{alignItems: 'flex-start'}}>
    <View style={style}>
      <Card>
        <TouchableOpacity onPress={() => navigation.navigate('CategoryScreen')}>
          <Image source={{uri: category.image}} style={styles.categoryImage} />
        </TouchableOpacity>
      </Card>
      <Text style={styles.title}>{category.title}</Text>
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
    fontSize: RFValue(16),
    color: COLORS.black,
  },
});
