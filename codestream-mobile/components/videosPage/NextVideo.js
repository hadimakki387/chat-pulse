import { faAngleDown, faAngleLeft, faAngleRight, faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import React from 'react';
import { View, Text, Button, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';

const NextVideo = () => {
  return (
    <View style={styles.container} >
      <View style={styles.leftSection}>
        <TouchableOpacity  style={styles.button}>
          <FontAwesomeIcon icon={faAngleLeft} style={styles.icons}/>
        </TouchableOpacity>

        <Text style={styles.title}>Hello</Text>
      </View>

      <TouchableOpacity  style={styles.button}>
        <FontAwesomeIcon icon={faAngleRight} style={styles.icons}/>
      </TouchableOpacity>

      <Image
        source={require('../../public/laravel-from-scratch-2021.png')} // Replace with your image source
        style={styles.backgroundImage}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#ef4663', // Use your background color
    padding: 16,
    borderRadius: 20,
    height:120,
    width:Dimensions.get('screen').width*0.95,
    overflow:'hidden',

  },
  leftSection: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    width: '85%', // 85% of the container's width
  },
  button: {
    backgroundColor: 'pink', // Use your button background color
    width: 30,
    height: 30,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    maxWidth: 200, // Max width for the title
    marginLeft:16,
    color:'white'
  },
  backgroundImage: {
    position: 'absolute',
    height:170,
    width:170,
    bottom: -55,
    opacity: 0.2,
    left: '50%',
    transform: [{ translateX: 0 }], // Adjust the image positioning
  },
  icons:{
    color:'white'
  }
});

export default NextVideo;