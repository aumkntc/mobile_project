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
  TouchableOpacity,
  Route,
  ImageBackground
} from 'react-native';
import { RadioButton } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
 
export default class Thermo extends React.Component {

    constructor(props){
        super(props);
        this.state = {bt: '0'};
        this.state = {checked:'first'};
      }
     
      compute = () => {
        console.log('On pressed!');
        let bt = parseFloat(this.state.bt);
        
      };

   render() {
    return (
      <View style={styles.container}>
      <Text style={styles.head}>Do you have thermometer?</Text>
 
       <View>
      <View style={styles.gy}>
  
      <RadioButton
        value="first"
        status={ this.state.checked == 'first' ? 'checked' : 'unchecked' }
        onPress={() => this.setState({checked:'first'})}
      />
      <Text style={styles.y}>Yes</Text>
       </View>
 
       <View style={styles.group}>
          <Text style={styles.title}>Please fill in : </Text>
          <Text style={styles.title}>Body Temperature (°C)</Text>
          <TextInput style={styles.input}
            keyboardType='numeric'
            value={this.state.bt}
            onChangeText={(bt) => this.setState({bt})}/>
        </View>
 
       <View style={styles.gy}>
     
      <RadioButton
        value="second"
        status={ this.state.checked === 'second' ? 'checked' : 'unchecked' }
        onPress={() => this.setState({checked:'second'})}
      />
       <Text style={styles.y}>No</Text>
      </View>
 
      </View>
          <View>
          <Button title="Next" 
            onPress={() => this.props.navigation.navigate('Bloodp')} /> 
          </View>
 
        </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#DBD4C3',
 
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'column',
    padding: 50
  },
  group: {
    marginTop: 15
  },
  button: {
    backgroundColor: '#C7BD9A',
    padding: 10,
    borderWidth: 1,
    alignItems: 'center'
  },
  buttonText: {
    fontSize: 30
  },
  input: {
    backgroundColor: 'white',
    padding: 10,
    height: 40,
    borderWidth: 1
  },
  head: {
    fontSize: 19
  },
  title: {
    fontSize: 20
  },
  center: {
    alignItems: 'center'
  },
  gy:{
    flexDirection: 'row',
    marginTop :30
  },
  
  y:{
    fontSize: 20,
    height: 40,
    
  }
});
