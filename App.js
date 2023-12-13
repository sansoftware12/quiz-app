import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import Home from './screens/home'
import Quiz from './screens/quiz'
import Result from './screens/results'
import Results from './screens/results'
import MyStack from './navigation/index'

const App = () => {
  return (
      <NavigationContainer>
      <MyStack/>
    </NavigationContainer>
     
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    paddingTop: 40,
    paddingHorizontal: 30,
  }

})