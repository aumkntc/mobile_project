import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  Switch,
  TextInput,
  Alert,
  Button,
  TouchableOpacity
} from 'react-native';
export default class Homem extends Component {
  render() {
    return (
      
     <View style={styles.green} >
     <View>
      <Text style={[styles.green]}>Patient Under Investigation</Text>
    </View>
      <View>
 
       <View style={styles.black} >
      <View>
      <Text style={[styles.black]}>Contact with Nurse Administrator</Text>
    </View>
    </View>
 
       <View style={styles.group}>
          
            <TouchableOpacity style={styles.button}
              onPress={this.compute}>
              <Text style={styles.buttonText}>Line Chat</Text>
            </TouchableOpacity>
          </View>
          
      </View>
      </View>
 
         
    );
  }
}
const styles = StyleSheet.create({
  green: {
    backgroundColor: '#DBD4C3',
    color: '#617C58',
    fontWeight: 'bold',
    fontSize: 25,
    alignItems: 'center',
    
    flex:1,
        flexDirection: 'column',
        justifyContent: 'center',
        
  },
 
   black: {
    backgroundColor: '#DBD4C3',
    color: 'grey',
    fontSize: 20,
    alignItems: 'center',
    marginTop: 20,
    
    flex:1,
        flexDirection: 'column',
        justifyContent: 'center',
        
  },
 
   button: {
    backgroundColor: '#B3CBB2',
    padding: 10,
    borderWidth: 1,
    marginTop: 30,
    alignItems: 'center',
  },
 
  buttonText: {
    fontSize: 30,
    margin : 5,
  },
  lower: {
    flex:2,
        justifyContent: 'flex-start',
        flexDirection: 'row',
        justifyContent:'space-evenly'
  },
  
});
