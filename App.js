import { StatusBar } from "expo-status-bar";
import React from "react";
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Task from "./Components/Task";

export default function App() {
  return (
    <View style={styles.container}>
     
      <View style={styles.taskWraper}>
        
        <Text style={styles.title}> Today's Tasks</Text>

        <View style={styles.todoItems}>
          <Task text= {'This is todays task'}/>
        </View>

      </View>



      <KeyboardAvoidingView 
        behavior = { Platform.OS ===  "ios" ?  "padding": "height" }
        style = {styles.writeTaskWrapper}
      >
        
        <TextInput style = {styles.input} placeholder = {"Write a task"} />

        <TouchableOpacity>
            
            <View style = {styles.addWrapper}>
              <Text style = {styles.addText}>+</Text>
            </View>

        </TouchableOpacity>
      </KeyboardAvoidingView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E8EAED',
  },
  taskWraper: { 
    paddingTop: 80, 
    paddingHorizontal: 20,

  },
  title: {
    fontSize:24,
    fontWeight: 'bold'
  },
  todoItems: {
    marginTop: 20,

  },

  writeTaskWrapper : {
    position: 'absolute',
    bottom: 60,
    width: "100%",
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  input: {
    paddingVertical:15,
    paddingHorizontal:15,
    width:250,
    borderRadius:60,
    borderColor: '#C0C0C0',
    borderWidth: 1,
    backgroundColor: '#fff'
  },
  addWrapper:{
    width:60,
    height:60,
    backgroundColor: '#fff',
    borderRadius:60,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#C0C0C0',
    borderWidth: 1,
  },
  addText:{},
});
