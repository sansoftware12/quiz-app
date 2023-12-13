import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Title = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Quizzzy</Text>
    </View>
  )
}

export default Title
const styles= StyleSheet.create({
  title:{
    fontSize:36,
    fontWeight:'600',
    color:'black',
  },
  container:{
    paddingVerticle: 16,
    justifyContent:'center',
    alignItems:'center',
  }

});