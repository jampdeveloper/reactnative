import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Swiper from 'react-native-swiper'
import { colors } from '../../globals/style'
import { AntDesign } from '@expo/vector-icons'
const OfferSlider = () => {
  return (
    <View>
      <View style={styles.offersliders}>
        <Swiper autoplay={true} autoplayTimeout={5} showsButtons={true} dotColor={colors.text2} activeDotColor={colors.text1}
            nextButton = {<AntDesign name="rightcircle" size={24} color={colors.col1} />}
            prevButton = {<AntDesign name="leftcircle" size={24} color={colors.col1} />}
        >
            <View style={styles.slide}>
                <Image style={styles.image} source={require('../../../assets/offer-slider/slide-1.jpg')} />
            </View>
            <View style={styles.slide}>
                <Image style={styles.image} source={require('../../../assets/offer-slider/slide-2.jpg')} />
            </View>
            <View style={styles.slide}>
                <Image style={styles.image} source={require('../../../assets/offer-slider/slide-3.jpg')} />
            </View>
            <View style={styles.slide}>
                <Image style={styles.image} source={require('../../../assets/offer-slider/slide-4.jpg')} />
            </View>
        </Swiper>
      </View>
    </View>
  )
}

export default OfferSlider

const styles = StyleSheet.create({
    offersliders:{
        width:'100%',
        height:200,
        backgroundColor:colors.col1,
        paddingVertical:10,
        justifyContent:'center',
        alignItems:'center',
        marginVertical:10,
    },
    slide:{
        width:'100%',
        height:200,
        
    },
    image:{
        height:'90%',
        width:'100%',
        borderRadius:20
        
    },
    buttonText:{
        color:colors.text1,
        fontSize:40,
        fontWeight:'500',
        backgroundColor:'white',
        borderRadius:20,
        width:40,
        height:40,
        textAlign:'center',
        lineHeight:40

    }
})