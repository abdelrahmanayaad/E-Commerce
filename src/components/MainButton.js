import React, { Children, useState } from 'react'
import { StyleSheet, Text, View, Platform, TouchableOpacity, TouchableNativeFeedback, Dimensions, TouchableHighlight, ActivityIndicator } from 'react-native'
import { BoldFontFamily} from '../constants/Constants'
const {width,height} = Dimensions.get("window")

export default function MainButton(props) {
  const {title,style,textStyle,isLoading,...rest} = props
  const ButtonTouchable = Platform.select({"android" : TouchableOpacity , "ios":TouchableNativeFeedback})
  // const ButtonTouchable = Platform.OS ==="android" ? TouchableNativeFeedback : TouchableOpacity
  return (
    <ButtonTouchable
      {...rest}
      disabled={isLoading}
      style={[styles.button, style, isLoading ? { backgroundColor: "#aaa" } : null]}
    >
      {isLoading ? <ActivityIndicator size={30} color="#fff" /> : <Text style={[styles.title, textStyle]}>{title}</Text>}
    </ButtonTouchable>
  )
}

const styles = StyleSheet.create({
  button: {
    height: height * .065,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    backgroundColor:"#000"
  },
  title: {
    fontSize: 20,
    fontFamily: BoldFontFamily,
    color:"#fff"
  }
})