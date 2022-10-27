import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const Product = (props) => {
 const [product,setProducts]=useState(props.route.params.item);
  return (
    <View>
      <Text>{JSON.stringify(product)}</Text>
    </View>
  )
}

export default Product

const styles = StyleSheet.create({})