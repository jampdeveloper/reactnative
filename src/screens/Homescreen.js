import React from 'react'
import { View,Text, StatusBar, TextInput,StyleSheet } from 'react-native'
import HomeHeadNav from './Componets/HomeHeadNav'
import Categories from './Componets/Categories'
import OfferSlider from './Componets/OfferSlider'
import { AntDesign } from '@expo/vector-icons'
import { colors } from '../globals/style'

const Homescreen = () => {
  return (
    <View style={styles.container}>
    <StatusBar/>
    <HomeHeadNav/>
     <View style={styles.searchbox}>
         <AntDesign name='search1' size={24} color="black" style={styles.serachicon} />
         <TextInput style={styles.input} placeholder='Search'/>
    </View>
    <Categories/>
    <OfferSlider/>
    </View>
  )
}

export default Homescreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:colors.col1,
        alignItems:'center',
        width:'100%',

    },
    searchbox:{
        flexDirection:'row',
        width:'90%',
        backgroundColor:colors.col1,
        borderRadius:90,
        alignItems:'center',
        padding:10,
        margin:20,
        elevation:10,
    },
    input:{
        marginLeft:10,
        width:'90%',
        fontSize:18,
        color:colors.text1
    },
    serachicon:{
        color:colors.text1
    }
})