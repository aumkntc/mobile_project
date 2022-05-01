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
  ImageBackground
} from 'react-native';
export default class Homem extends Component {
  render() {
    return (
      
        <ImageBackground style={{flex:1}} source={require('./bg.png')}>
        <View style={styles.container}>

        <Text style={styles.head}>Patient Under Investigation</Text>
        <View>
          <Button title="Contact with Nurse Administrator" 
              onPress={() => this.props.navigation.navigate('Tryl')}/>
          </View>
         </View>

        </ImageBackground>
   
      );
    }
  }
  
  const styles = StyleSheet.create({
      container: {
        flex:1,
        alignItems: "center",
        justifyContent: "center"
      },
      head: {
          fontWeight: '700',
          fontSize: 30
        },
    });