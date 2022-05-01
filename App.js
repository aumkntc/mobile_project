import React, { Component } from 'react';
import {
 AppRegistry,
 StyleSheet,
 Text,
 View,
 Image,
 Switch,
 TextInput,
 Button,
 TouchableOpacity,
 Route,
 ImageBackground,
 RadioButton,
 KeyboardAvoidingView,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
 
//อยากเพิ่มหน้าอะไรก็ import js from "./js";
import Logpage from "./Loginpage.js";
import Signin from "./Sign.js";
import Mainmenu from "./Menu.js";
import Wandh from "./Wandh.js";
import Thermo from "./Ther.js";
import Bloodp from "./Blood.js";
import Fingert from "./Finger.js";
import Homem from "./Homemenu.js";
import Tryl from "./Try.js";
import Gmap from "./Map.js";
import Profileuser from "./Profile.js";
import Historyuser from "./History.js";
import Followupuser from "./Followup.js";
 
class Homepage extends React.Component {
 render() {
   return (
     <ImageBackground style={{flex:1}} source={require('./bg.png')}>
     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
     <Text style={styles.buttonText}>Welcome To Health U </Text>
     <Image
     style={{height:250, width:300}}
     source={require('./HU.png')}
      />
      <Text style={styles.buttonText}>I help your health</Text>
      <Button title="Get start"
      onPress={() => this.props.navigation.navigate('Logpage')} />
      </View>
     </ImageBackground>
       
   );
 }
}
 
const Stack = createStackNavigator();
 
export default class App extends React.Component {
 render() {
   return ( //เพิ่มหน้าในนี้ด้วย
     <NavigationContainer>
       <Stack.Navigator initialRouteName="Home">
         <Stack.Screen name="Home" component={Homepage} />
         <Stack.Screen name="Logpage" component={Logpage} />
         <Stack.Screen name="Signin" component={Signin} />
         <Stack.Screen name="Mainmenu" component={Mainmenu} />
         <Stack.Screen name="Wandh" component={Wandh} />
         <Stack.Screen name="Thermo" component={Thermo} />
         <Stack.Screen name="Bloodp" component={Bloodp} />
         <Stack.Screen name="Fingert" component={Fingert} />
         <Stack.Screen name="Homem" component={Homem} />
         <Stack.Screen name="Tryl" component={Tryl} />
         <Stack.Screen name="Gmap" component={Gmap} />
         <Stack.Screen name="Profileuser" component={Profileuser} />
         <Stack.Screen name="Followupuser" component={Followupuser} />
         <Stack.Screen name="Historyuser" component={Historyuser} />
       </Stack.Navigator>
     </NavigationContainer>
 
    );
 }
}
 
const styles = StyleSheet.create({
 container: {
   flex:1,
   alignItems: "center",
   justifyContent: "center",
 },
 buttonText: {
  color: 'black',
  fontWeight: '700',
  fontSize: 16
},
});

