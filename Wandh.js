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
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
 
export default class Wandh extends React.Component {
  constructor(props){
    super(props);
    this.state = {weight: '0', height: '0'};
 
  }
 
  compute = () => {
    console.log('On pressed!');
    let weight = parseFloat(this.state.weight);
    let height = parseFloat(this.state.height);
  };
   render() {
    return (
      <View style={styles.container}>
      <Text style={styles.head}>Please fill in this form</Text>
        <View style={styles.group}>
        
          <Text style={styles.title}>Weight (KG)</Text>
          <TextInput style={styles.input}
            keyboardType='numeric'
            value={this.state.weight}
            onChangeText={(weight) => this.setState({weight})}/>
        </View>
        <View style={styles.group}>
          <Text style={styles.title}>Height (CM)</Text>
          <TextInput style={styles.input}
            keyboardType='numeric'
            value={this.state.height}
            onChangeText={(height) => this.setState({height})}
            />
        </View>
          <View style={styles.group}>
          <Button title="Next" 
            onPress={() => this.props.navigation.navigate('Thermo')} /> 
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
    marginTop: 20
  },
  button: {
    backgroundColor: '#C7BD9A',
    padding: 10,
    borderWidth: 1
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
    fontSize: 20
  },
  title: {
    fontSize: 20
  },
  center: {
    alignItems: 'center'
  }
});