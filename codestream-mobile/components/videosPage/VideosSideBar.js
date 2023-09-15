import React from 'react'
import { Dimensions, StyleSheet, Text, View } from 'react-native'

function VideosSideBar() {
  return (
    <View style={styles.container}>
        <Text style={styles.text}>Hello</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        position:'absolute',
        top:0,
        left:0,
        zIndex:10,
        backgroundColor:'#0d131d',
        width:Dimensions.get('screen').width,
        height:Dimensions.get('screen').height,
        padding:16
    },
    text:{
        color:'white',
        fontSize:25
    }
})

export default VideosSideBar