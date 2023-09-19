import React,{useState} from 'react';

import {ScrollView, StyleSheet,Text,TextInput,TouchableOpacity,View,StatusBar} from 'react-native'
import { colors,hr80,titles,btn1 } from '../../globals/style'
import { AntDesign,Octicons,MaterialCommunityIcons,FontAwesome5, Entypo, Feather } from '@expo/vector-icons';
const SignupScreen = ({navigation}) => {
 const [namefocus,setNamefocus] = useState(false);   
 const [emailfocus,setEmailfocus] = useState(false);
 const [phonefocus,setPhonefocus] = useState(false);
 const [passwordfocus,setPasswordfocus] = useState(false);
 const [cpasswordfocus,setCpasswordfocus] = useState(false);
 const [showpassword,setShowpassword] = useState(false);
 



  return (
    <ScrollView>
    <View style={styles.container}>
        <StatusBar translucent backgroundColor="transparent"/>
        <Text style={styles.head1}>Sign Up</Text> 
        <View style={styles.inputout}>
                <AntDesign name="user" size={24} color={namefocus === true ? colors.text1 : colors.text2} />
            <TextInput style={styles.input} placeholder='Full Name' 
            onFocus={() => {
                setNamefocus(true)
                setEmailfocus(false)
                setPasswordfocus(false)
                setShowpassword(false)
                setCpasswordfocus(false)
                setPhonefocus(false)
            }} />
        </View>
  
        <View style={styles.inputout}>
             <Entypo name="email" size={24} color={emailfocus === true ? colors.text1 : colors.text2} />
            <TextInput style={styles.input} placeholder='Email' 
            onFocus={() => {
                setEmailfocus(true)
                setNamefocus(false)
                setPasswordfocus(false)
                setShowpassword(false)
                setCpasswordfocus(false)
                setPhonefocus(false)
            }} />
        </View>
        <View style={styles.inputout}>
             <Feather name="smartphone" size={24} color={phonefocus === true ? colors.text1 : colors.text2} />
            <TextInput style={styles.input} placeholder='Phone Number' 
            onFocus={() => {
                setPhonefocus(true)
                setEmailfocus(false)
                setNamefocus(false)
                setPasswordfocus(false)
                setShowpassword(false)
                setCpasswordfocus(false)
            }} />
        </View>
        <View style={styles.inputout}>
            <MaterialCommunityIcons name="lock-outline" size={24} color={passwordfocus === true ? colors.text1 : colors.text2} />
            <TextInput style={styles.input} placeholder='Password'
            onFocus={() => {
                setPasswordfocus(true)
                setNamefocus(false)
                setEmailfocus(false)
                setCpasswordfocus(false)
                setPhonefocus(false)
            }} 
            secureTextEntry = {showpassword === false ? true : false }     
            />
            <Octicons name= {showpassword === false ? 'eye-closed' : 'eye'} size={24} color="black" onPress={() => setShowpassword(!showpassword) } />
           
        </View>
        <View style={styles.inputout}>
            <MaterialCommunityIcons name="lock-outline" size={24} color={cpasswordfocus === true ? colors.text1 : colors.text2} />
            <TextInput style={styles.input} placeholder='Confirm Password'
            onFocus={() => {
                setCpasswordfocus(true)
                setNamefocus(false)
                setPasswordfocus(false)
                setEmailfocus(false)
                setPhonefocus(false)
            }} 
            secureTextEntry = {showpassword === false ? true : false }     
            />
            <Octicons name= {showpassword === false ? 'eye-closed' : 'eye'} size={24} color="black" onPress={() => setShowpassword(!showpassword) } />
           
        </View>
        <Text style={styles.address}>Please enter your address</Text>
        <View style={styles.inputout}>
            <TextInput style={styles.input1} placeholder='Enter your address'></TextInput>
        </View>
        <TouchableOpacity style={btn1}>
            <Text style={{color:colors.col1,fontSize:titles.btntext,fontWeight:'bold'}}>Sign Up</Text>
        </TouchableOpacity>
        <Text style={styles.or}>OR</Text>
        <Text style={styles.gftext}>Sign In with</Text>
        <View style={styles.gf}>
            <TouchableOpacity>
              <View style={styles.gficon}>
              <AntDesign name="google" size={24} color="#EA4335" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={styles.gficon}>
              <FontAwesome5 name="facebook-f" size={24} color="#426782" />
              </View>
            </TouchableOpacity>
        </View>    
        <View style={hr80}/>
        <Text>Already have an account?
            <Text style={styles.signup} onPress={() => navigation.navigate('login')}> Sign In</Text>
        </Text>

    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create ({
    container:{
     flex:1,
     width:'100%',
     alignItems:'center',
     justifyContent:'center',
     marginTop:'10%'
    },
    head1:{
        fontSize:titles.title1,
        color:colors.text1,
        textAlign:'center',
        marginVertical:10
    },
    inputout:{
        flexDirection:'row',
        width:'80%',
        marginVertical:10,
        backgroundColor:colors.col1,
        borderRadius:10,
        paddingHorizontal:10,
        paddingVertical:10,
        elevation:20
    },
    input:{
        fontSize:18,
        marginLeft:10,
        width:'80%'
    },
    forget:{
       color:colors.text2,
       marginTop:20,
       marginBottom:10,
    },
    or:{
        color:colors.text1,
        marginVertical:10,
        fontWeight:'bold'
    },
    gftext:{
        color:colors.text2,
        marginVertical:10,
        fontSize:25
    },
    gf:{
        flexDirection:'row',
    },
    gficon:{
        backgroundColor:'white',
        width:50,
        margin:10,
        borderRadius:10,
        padding:10, 
        alignItems:'center',
        elevation:20
    },
    signup:{
        color:colors.text1
    },
    address:{
        fontSize:18,
        color:colors.text2,
        textAlign:'center',
        marginTop:20    
    }


 
 
 })
export default SignupScreen