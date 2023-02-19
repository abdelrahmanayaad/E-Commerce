import React from 'react';
import {Dimensions, StyleSheet, Text, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import {RFValue} from 'react-native-responsive-fontsize';
import {COLORS, defaultFontFamily} from '../constants/Constants';
const {height} = Dimensions.get('window');

export default function ReusableTextInput(props) {
  const {
    bordered,
    position,
    right,
    left,
    lined,
    stacked,
    placeholder,
    borderWidth,
    borderColor,
    borderRadius,
    keyboardType,
    valid,
    time,
    style,
    ...rest
  } = props;
  return (
    <View
      style={[
        styles.container,
        bordered && {
          borderWidth: borderWidth || 1,
          borderColor: borderColor || '#bbb',
          borderRadius: borderRadius || 5,
          paddingHorizontal: RFValue(5),
        },
        (left || right) && {flexDirection: 'row', alignItems: 'center'},
        lined && [
          {
            borderBottomWidth: 1,
            borderBottomColor: '#bbb',
          },
          style,
        ],
      ]}>
      {left && (
        <Icon
          name={left}
          size={RFValue(20)}
          color={'#bbb'}
          style={{marginRight: RFValue(5)}}
        />
      )}
      {stacked ? <Text style={styles.label}>{placeholder}</Text> : null}
      <TextInput
        {...rest}
        keyboardType={keyboardType}
        placeholder={stacked ? null : placeholder}
        style={[
          [styles.input, {textAlign: position || 'left'}],
          (bordered || lined) && {flex: 1},
          stacked && {
            borderBottomWidth: 1,
            borderBottomColor: COLORS.gray3,
            paddingBottom: RFValue(8),
            padding: 0,
          },
        ]}
      />
      {right && <Icon name={right} size={RFValue(20)} color={'#bbb'} />}
      {valid && time ? (
        <Icon name={'check'} size={RFValue(20)} color={'green'} />
      ) : time ? (
        <Icon name={'x'} size={RFValue(20)} color={'red'} />
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: height * 0.06,
  },
  input: {
    fontSize: RFValue(16),
    fontFamily: defaultFontFamily,
    color: '#000',
  },
  label: {
    fontSize: RFValue(14),
    color: COLORS.gray1,
    fontFamily: defaultFontFamily,
  },
});
