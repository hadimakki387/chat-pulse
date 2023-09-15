import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';

function ToggleSideBar({ showVideosBar }) {
  return (
    <TouchableOpacity
      onPress={showVideosBar}
      style={styles.container}
    >
      <View style={styles.iconContainer}>
        <Image
          source={require('../../public/toggle-episodes-icon.svg')} // Replace with your image source
          style={styles.icon}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>Toggle Episode List</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#18273f', // Use your background color
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 20,
    width:Dimensions.get('screen').width*0.95,
    marginHorizontal: 16,
    justifyContent: 'center',
  },
  iconContainer: {
    marginRight: 8,
  },
  icon: {
    width: 50,
    height: 50,
    // Add any additional styling for the image here
  },
  textContainer: {
    flex: 1,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default ToggleSideBar;
