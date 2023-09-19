import React from 'react'
import { StyleSheet,Text, View,Image, TouchableOpacity, StatusBar } from 'react-native'
import logo from '../../../assets/logo.png'
import { colors,hr80 } from '../../globals/style'
const WelcomeScreen = ({navigation}) => {
  return (
    
    <View style={styles.container}>
      <StatusBar translucent backgroundColor="transparent"/>
         <Text style={styles.title}>Welcome to Foodie</Text>
         <View style={styles.logoout}>
            <Image source={logo} style={styles.logo} />
         </View>
         <View style={hr80} />
          <Text style={styles.text}>Find best food around you at lowest price.</Text>
         <View style={hr80} /> 
         <View style={styles.btnout}>
           <TouchableOpacity onPress={() => navigation.navigate('signup')}>
            <Text style={styles.btn}>Sing Up</Text>
           </TouchableOpacity>
           <TouchableOpacity>
           <Text style={styles.btn} onPress={() => navigation.navigate('login')}>Log In</Text>
          </TouchableOpacity>
         </View>
    </View>
  )
}
const styles = StyleSheet.create ({
   container:{
    flex:1,
    backgroundColor:'#ff4242',
    width:'100%',
    alignItems:'center',
    justifyContent:'center'
   },
   title:{
    fontSize: 50,
    color:colors.col1,
    textAlign:'center',
    marginVertical:10,
    fontWeight:'200'
   },
   logoout:{
      width:'80%',
      height:'30%',
      alignItems:'center',
      marginTop:'10%'
   },
   logo:{
      width:'100%',
      height:'100%'
   },

   text:{
    fontSize: 18,
    width:'80%',
    color:colors.col1,
    textAlign:'center'
   },
   btnout:{
    flexDirection:'row'
   },
   btn:{
      fontSize:20,
      color:colors.text1,
      textAlign:'center',
      marginVertical:30,
      marginHorizontal:10,
      fontWeight:'700',
      backgroundColor:'#fff',
      borderRadius:10,
      padding:10,
      paddingHorizontal:20
   }


})
export default WelcomeScreen