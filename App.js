import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { Keyboard, KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import Task from "./Components/Task";

export default function App() {
  
  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const completeTask = (index) => {

    let itemsCopy = [...taskItems]
    itemsCopy.splice(index,1);
    setTaskItems(itemsCopy);

  }


  
  const taskHandler = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task]);
    setTask(null);
  }
  return (
    <View style={styles.container}>
     
      <View style={styles.taskWraper}>
        
        <Text style={styles.title}> Today's Tasks</Text>

        <View style={styles.todoItems}>

          {taskItems.map( (task,index) => {
            return (
              <TouchableOpacity  key={index} onPress={ () => completeTask(index)}>
                <Task text= {task}/>
              </TouchableOpacity>
            ) 
          })}
        
        </View>

      </View>



      <KeyboardAvoidingView 
        behavior = { Platform.OS ===  "ios" ?  "padding": "height" }
        style = {styles.writeTaskWrapper}
      >
        
        <TextInput style = {styles.input} placeholder = {"Write a task"} value={task} onChangeText= { (text) => setTask(text)}/>

        <TouchableOpacity onPress={ () => taskHandler()}>
            
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
