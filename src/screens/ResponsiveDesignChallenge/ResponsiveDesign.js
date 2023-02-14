import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Dimensions,
  Button,
} from 'react-native';
import {scale} from 'react-native-size-matters';
const {width, height} = Dimensions.get('window');
import {rem} from '../../utils/Constants';

export default function ResponsiveDesign() {
  const [realWidth, setRealWidth] = useState(width);
  useEffect(() => {
    const subscription = Dimensions.addEventListener('change', ({window}) => {
      setRealWidth(window.width);
    });
    return () => {
      subscription.remove();
      console.log('Clear');
    };
  }, []);
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Email"
        style={[
          styles.textInputStyle,
          realWidth > 500 ? {fontSize: scale(30)} : {fontSize: scale(16)},
        ]}
      />
      <View
        style={
          realWidth > 500
            ? {flexDirection: 'row', justifyContent: 'space-between'}
            : null
        }>
        <TextInput
          placeholder="Password"
          style={[
            styles.textInputStyle,
            realWidth > 500
              ? {
                  flex: 1,
                  marginEnd: realWidth * 0.02,
                  fontSize: realWidth * 0.04,
                }
              : {fontSize: realWidth * 0.04},
          ]}
        />
        <TextInput
          placeholder="Confirm Password"
          style={[
            styles.textInputStyle,
            realWidth > 500
              ? {flex: 1, fontSize: realWidth * 0.04}
              : {fontSize: realWidth * 0.04},
          ]}
        />
      </View>
      <Button title="Sign up" color={'blue'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // padding: height * .02
    padding: scale(15),
  },
  textInputStyle: {
    // fontSize: height * .06 * rem,
    // fontSize: scale(40),
    borderWidth: 1,
    marginBottom: height * 0.05,
    borderRadius: 5,
    paddingHorizontal: width * 0.025,
    borderColor: '#bbb',
  },
  test: {
    fontSize: 20,
    color: 'red',
    fontWeight: 'bold',
  },
});
//  realWidth * .04
