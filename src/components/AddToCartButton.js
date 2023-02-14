import { StyleSheet, Text, TouchableOpacity, View,Dimensions } from 'react-native'
import React, { useState } from 'react'
import MainButton from './MainButton'

const { width, height } = Dimensions.get("window")

export default function AddToCartButton(props) {
  const [quantity , setQuantity] = useState(0)
  const increaseHandler = () => {
    // setQuantity(prevState => {prevState.quantity+1})
    setQuantity(quantity+1)
  }
  const decreaseHandler = () => {
    // setQuantity(prevState => {prevState.quantity-1}) 
    setQuantity(quantity-1)
  }
  const AddToCart = () => {
    return (
      <MainButton title="Add To Cart" onPress={increaseHandler} />
    )
  }
  const IncreaseDecreaseButton = () => {
    return (
      <View style={styles.IncreaseDecreaseButtonStyle}>
        <Text onPress={decreaseHandler} style={styles.icons}>-</Text>
        <Text style={styles.icons}>{quantity}</Text>
        <Text onPress={increaseHandler} style={styles.icons}>+</Text>
      </View>
    )
  }
  return quantity> 0 ? IncreaseDecreaseButton() : AddToCart()
}

const styles = StyleSheet.create({
  IncreaseDecreaseButtonStyle: {
    height: height * .065,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems:"center",
    backgroundColor: "#ddd",
    borderRadius: 5,
  },
  icons: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
    padding: 10,
  }
})