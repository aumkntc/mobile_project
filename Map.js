import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StyleSheet,
  StatusBar,
  ImageBackground
} from 'react-native';

import { WebView } from 'react-native-webview'

import html_script from './html_script.js'

export default class Gmap extends React.Component {

  _goToMyPosition = (lat, lon) => {
    this.refs['Map_Ref'].injectJavaScript(`
      mymap.setView([${lat}, ${lon}], 10)
      L.marker([${lat}, ${lon}]).addTo(mymap)
    `)
  }
  render() {
    return (
      
      <ImageBackground style={{flex:1}} source={require('./bg.png')}>
        <SafeAreaView style={styles.Container}>
          <WebView ref={'Map_Ref'}  source={{html: html_script }} style={styles.Webview} />
          <View style={styles.ButtonArea}>
            <TouchableOpacity style={styles.Button} onPress={() => this._goToMyPosition(13.7730253, 100.5729621)}>
              <Text style={styles.ButtonText}>Bangkok International Clinic</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Button} onPress={() => this._goToMyPosition(13.7578286, 100.4853786754602)}>
              <Text style={styles.ButtonText}>Siriraj Hospital</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.Button} onPress={() => this._goToMyPosition(13.7580444, 100.51893708963655)}>
              <Text style={styles.ButtonText}>Bangkok Adventist Hospital</Text>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
        </ImageBackground>
      
    );
  }
  
};

const styles = StyleSheet.create({
  Container: {
    flex:1,
    padding: 10,
  
  },
  Webview: {
    flex: 2,
    
  },
  ButtonArea: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  Button: {
    width: 150,
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#B89087',
    alignItems: 'center'
  },
  ButtonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 14,
  }
});