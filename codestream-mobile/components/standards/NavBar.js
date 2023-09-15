import React from 'react'
import { Image, StatusBar, StyleSheet, Text, View } from 'react-native'

function NavBar() {


  return (
    <View style={styles.navContainer}>
        <Image source={require('../../public/logo-white.png')} style={styles.LogoImg} />
        <Image source={require('../../public/User.png')} style={styles.UserImg}/>
    </View>
  )
}

const styles = StyleSheet.create({
    navContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        backgroundColor:'#151f32',
        
        padding:8,
        paddingHorizontal:10
    },
    UserImg:{
        width:40,
        height:40,
        borderRadius:10
    },
    LogoImg:{
        width:100,
        height:50,
        resizeMode:'contain'
    }
})

export default NavBar