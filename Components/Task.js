import React from "react";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function Task(props) {
  return (
    <View style={styles.container}>
      <View style={styles.leftItem}>
        <View style={styles.square}></View>
        <Text style={styles.text}> {props.text} </Text>
      </View>

      <View style={styles.circular}></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems:"center",
    marginBottom:20,
    justifyContent: 'space-between'

  },
  leftItem: {
      flexDirection: 'row',
      alignItems:"center",
      flexWrap: 'wrap'
     
  },
  
  square:{
    width:24,
    height:24,
    borderRadius:5,
    marginRight:5,
    backgroundColor:'#55BCF6',
    opacity: 0.4
  },
  text: {
    maxWidth: '80%'
  },
  rightItem: {

  },
  circular: {
    width:12,
    height:12,
    borderColor: '#55BCF6',
    borderWidth: 2,
    borderRadius:5
  }

});
