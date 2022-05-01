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
 
 
export default class Signin extends React.Component {
 
   constructor(props){
       super(props);
       this.state = {name: '', dob: '' , tele: '', email: '', pw: '', gender: '', ah: '', cd: ''};
    }
   
     compute = () => {
       console.log('On pressed!');
       let name = parseFloat(this.state.name);
       let dob = parseFloat(this.state.dob);
       let tele = parseFloat(this.state.tele);
       let email = parseFloat(this.state.email);
       let pw = parseFloat(this.state.pw);
       let gender = parseFloat(this.state.gender);
       let ah = parseFloat(this.state.ah);
       let cd = parseFloat(this.state.cd);
     };   
 
 render() {
   return (
   <ImageBackground style={{flex:1}} source={require('./bg.png')}>
     <View style={styles.container}>
       <View >
       <Text style={styles.head}>Registration</Text>
       </View>
       <View>
           <Text style={styles.textfont}>Name</Text>
           <TextInput
         placeholder="Name"
         style={styles.input}
       />
       </View>
       <View>
         <Text style={styles.textfont}>Date of Birth</Text>
         <TextInput
         placeholder="dd/mm/yy"
         style={styles.input}
       />
       </View>
       <View>
         <Text style={styles.textfont}>Telephone</Text>
         <TextInput
         placeholder="Tel no."
         style={styles.input}
       />
       </View>
       <View>
         <Text style={styles.textfont}>E-mail</Text>
         <TextInput
         placeholder="Email"
         style={styles.input}
       />
       </View>
       <View>
         <Text style={styles.textfont}>Password</Text>
         <TextInput
         placeholder="Password"
         style={styles.input}
       />
       </View>
     
      <View>
         <Text style={styles.textfont}>Gender</Text>
         <TextInput
         placeholder="Gender"
         style={styles.input}
       />
       </View>
       <View>
         <Text style={styles.textfont}>Allergic History</Text>
         <TextInput
         placeholder="Type here"
         style={styles.input}
       />
       </View>
       <View>
         <Text style={styles.textfont}>Congential Disease</Text>
         <TextInput
         placeholder="Type here"
         style={styles.input}
       />
       </View>
       <View>
           <Button title="Sign in here"
           onPress={() => this.props.navigation.navigate('Logpage')} />      
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
   input: {
       backgroundColor: 'white',
       paddingHorizontal: 15,
       paddingVertical: 10,
       borderRadius: 10,
       marginTop: 5
     },
   textfont: {
       color: 'black',
       fontWeight: '700',
       fontSize: 16
     },
 });