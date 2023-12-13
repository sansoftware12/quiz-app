import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Title from '../components/title';

const Result = ({navigation, route}) => {
  const {score} = route.params

  const resultBanner= score>10?"https://img.freepik.com/premium-vector/girls-party_118813-2016.jpg?size=626&ext=jpg&ga=GA1.1.154652003.1702326952&semt=ais" :"https://img.freepik.com/free-vector/loser-failure-success-winning-businessmen-composition-with-discouraged-man-broken-egg-shellvector-illustration_1284-63222.jpg?size=626&ext=jpg&ga=GA1.1.154652003.1702326952&semt=sph"
  return (
    <View style={styles.container}>
<Title titleText='RESULTS' />
<Text style={styles.scoreValue}>{score}</Text>
<View style={styles.bannerContainer}>
  <Image
    source={{
      uri:resultBanner,
    }}
    style={styles.banner}
    resizeMode="contain"
  />
</View>
<TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.button}>
  <Text style={styles.buttonText}>GO TO HOME</Text>
</TouchableOpacity>
</View>
  );
};



export default Result;

const styles = StyleSheet.create({
  banner: {
    height: 300,
    width: 300,
  },
  bannerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
  container: {
    paddingTop: 40,
    paddingHorizontal: 20,
    height: '100%',
    backgroundColor:'white'
  },
  button: {
    width: '100%',
    backgroundColor: '#1A759F',
    padding: 16,
    borderRadius: 16,
    alignItems: 'center',
    marginBottom: 30,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: '600',
    color: 'white',
  },
  scoreValue:{
    fontSize: 24,
    fontWeight:'10000',
    alignSelf:'center',
    color:'pink'
  }
});