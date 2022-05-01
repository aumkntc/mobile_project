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
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default class Mainmenu extends React.Component {

  render() {
    return (
    <ImageBackground style={{flex:1}} source={require('./bg.png')}>
    <View style={styles.container}>

      <Text style={styles.head}>Menu</Text>
      <View>
        <Button title="Patient Under Investigation" 
            onPress={() => this.props.navigation.navigate('Wandh')}/>
        <Button title="Follow Up" 
            onPress={() => this.props.navigation.navigate('Followupuser')}/>
        </View>
        <View>
            <Button title="Profile" 
            onPress={() => this.props.navigation.navigate('Profileuser')}/>
            <Button title="History "
            onPress={() => this.props.navigation.navigate('Historyuser')}/>
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
