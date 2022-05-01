//import React, { Component } from 'react';
import { useNavigation } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
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
 ImageBackground,
 KeyboardAvoidingView,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { auth } from './firebase'
 
//export default class Logpage extends React.Component {
  const Loginpage = () => {
 const [email, setEmail] = useState('')
 const [password, setPassword] = useState('')
 
 const navigation = useNavigation()
 
 //constructor(props) {
   //super(props);
 
   //this.state = {
     //Email: "",
     //Password: "",
   //};
    const handleLogin = () => {
     auth
       .signInWithEmailAndPassword(email, password)
       .then(userCredentials => {
         const user = userCredentials.user;
         console.log('Logged in with:', user.email);
         if (user) {
           navigation.replace("Mainmenu");
         }
       })
       .catch(error => alert(error.message))
   }
 
 //render()
   return (
   <KeyboardAvoidingView
     style={styles.container}
     behavior="padding"
   >
     <View style={styles.inputContainer}>
       <TextInput
         placeholder="Email"
         value={email}
         onChangeText={text => setEmail(text)}
         style={styles.input}
       />
       <TextInput
         placeholder="Password"
         value={password}
         onChangeText={text => setPassword(text)}
         style={styles.input}
         secureTextEntry
       />
     </View>
 
     <View style={styles.buttonContainer}>
       <TouchableOpacity
         onPress={handleLogin}
         style={styles.button}
       >
         <Text style={styles.buttonText}>Login</Text>
       </TouchableOpacity>
       <TouchableOpacity
         onPress={() => navigation.navigate('Signin')}
         style={[styles.button, styles.buttonOutline]}
       >
         <Text style={styles.buttonOutlineText}>Register</Text>
       </TouchableOpacity>
     </View>
   </KeyboardAvoidingView>
   )
 
}
 
export default Loginpage
 
const styles = StyleSheet.create({
 container: {
   flex: 1,
   justifyContent: 'center',
   alignItems: 'center'
 },
 inputContainer: {
   width: '80%'
 },
 input: {
   backgroundColor: 'white',
   paddingHorizontal: 15,
   paddingVertical: 10,
   borderRadius: 10,
   marginTop: 5
 },
 buttonContainer: {
   width: '60%',
   justifyContent: 'center',
   alignItems: 'center',
   marginTop: 40
 },
 button: {
   backgroundColor: '#DBD4C3',
   width: '100%',
   padding: 15,
   borderRadius: 10,
   alignItems: 'center'
 },
 buttonOutline: {
   backgroundColor: 'white',
   marginTop: 5,
   borderColor: '#DBD4C3',
   borderWidth: 2
 },
 buttonText: {
   color: 'white',
   fontWeight: '700',
   fontSize: 16
 },
 buttonOutlineText: {
   color: '#DBD4C3',
   fontWeight: '700',
   fontSize: 16
 },
})
