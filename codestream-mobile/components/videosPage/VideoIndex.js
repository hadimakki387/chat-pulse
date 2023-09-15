import React from 'react'
import { Dimensions, Image, ScrollView, View } from 'react-native'
import WebView from 'react-native-webview'
import YoutubeIframe from 'react-native-youtube-iframe'
import NextVideo from './NextVideo'
import ToggleSideBar from './ToggleSideBar'
import VideosSideBar from './VideosSideBar'

function VideoIndex() {

  const dimentionsForScreen = Dimensions.get("screen")
  return (
    <View style={{alignItems:'center', gap:9}}>
    <VideosSideBar/>
        <YoutubeIframe height={210} width={dimentionsForScreen.width} videoId='_M0X2uasgh4'/>
        <ToggleSideBar/>
        <NextVideo/>
    </View>
  )
}


export default VideoIndex