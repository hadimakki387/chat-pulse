import React from "react";
import { GlobalStyles } from "../styles/GlobalStyles";
import { Button, Dimensions, StyleSheet, Text, View , ScrollView, StatusBar} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import NavBar from "./standards/NavBar";
import VideoIndex from "./videosPage/VideoIndex";
import NextVideo from "./videosPage/NextVideo";
import VideosSideBar from "./videosPage/VideosSideBar";

function Index() {
  const name = "hadimakki";

  const setItem = async () => {
    await AsyncStorage.setItem("name", name, (err, done) => {
      if (err) {
        console.log(err);
      } else {
        console.log("Item set");
      }
    });
  };

  const getItem = async () => {
    await AsyncStorage.getItem("name", (err, value) => {
      console.log("Item value:", value);
    });
  };

 

  return (
    <ScrollView style={{marginTop:StatusBar.currentHeight}}>
    
      <NavBar />
      <View style={[GlobalStyles.PageBG,styles.container]}>
        <VideoIndex />
        <Button title="set Item" onPress={setItem} />
        <Button title="getItem" onPress={getItem} />
      
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height:Dimensions.get('screen').height,
    alignItems: "center",
    gap: 16,
    
  },
});

export default Index;
