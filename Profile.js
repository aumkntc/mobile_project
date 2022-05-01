import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ImageBackground
} from 'react-native';

export default class Profileuser extends React.Component {

  render() {
    return (
      <ImageBackground style={{flex:1}} source={require('./bg.png')}>
      <View style={styles.container}>
          <View style={styles.header}></View>
          <Image style={styles.avatar} source={{uri: 'https://img.icons8.com/external-avatar-andi-nur-abdillah/344/external-avatar-business-avatar-circle-avatar-andi-nur-abdillah-24.png'}}/>
          <View style={styles.body}>

              <Text style={styles.name}>John Doe</Text>
              <Text style={styles.description}>Name : </Text>
              <Text style={styles.description}>Date of Birth : </Text>
              <Text style={styles.description}>E-mail : </Text>
              <Text style={styles.description}>Gender : </Text>
              <Text style={styles.description}>Allergic History : </Text>
              <Text style={styles.description}>Congential Disease: </Text>
                           
              <TouchableOpacity style={styles.buttonContainer}>
                <Text>Sign out</Text> 
              </TouchableOpacity>
            </View>
      </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  header:{
    backgroundColor: "white",
    height:200,
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
    alignSelf:'center',
    position: 'absolute',
    marginTop:130
  },
  name:{
    fontSize:22,
    color:"#FFFFFF",
    fontWeight:'600',
  },
  body:{
    marginTop:40,
    alignItems: 'center',
    padding: 40
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding:30,
  },
  name:{
    fontSize:28,
    color: "#696969",
    fontWeight: "600"
  },
  description:{
    fontSize: 16,
    color: "#696969",
    marginTop:10,
    textAlign: 'center',
    fontWeight: "500"
  },
  buttonContainer: {
    marginTop:10,
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:250,
    borderRadius:30,
    backgroundColor: "white",
  },
});
