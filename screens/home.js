import { View, Text,TouchableOpacity , Image,StyleSheet} from 'react-native'
import React from 'react'
import Title from '../components/title'


const Home = ({navigation}) => {
  return (
    <View style={styles.container} >
      <Title/>
      <View style={styles.bannerContainer}>
        <Image source={{uri:'https://img.freepik.com/free-vector/flat-creativity-concept-illustration_52683-64279.jpg?size=626&ext=jpg&ga=GA1.1.154652003.1702326952&semt=ais'}}
        style={styles.banner}
        resizeMode="contain"
        />
      </View>
      <TouchableOpacity onPress={()=>navigation.navigate("Quiz")} 
      style={styles.button} >
        <Text style={styles.buttontext}> START!</Text>

      </TouchableOpacity>
    </View>
  )
}

export default Home
const styles=StyleSheet.create({
  banner:{
    height:300,
    width:300,
  },
  bannerContainer:{
    justifyContent:'center',
    alignItems:'center',
    flex:1,
    
  },
  container:{
    paddingTop:40,
    paddingVerticle:40,
    height:"100%",
    backgroundColor:"white",
    

  },
  button:{
    width: '100%',
    backgroundColor:"#ffa62b",
    padding: 20,
    borderRadius: 16,
    alignItems:"center",
    marginBottom:30,
  },
  buttontext:{
    fontSize: 24,
    fontWeight: '600',
    color:"white",
  }
 

});