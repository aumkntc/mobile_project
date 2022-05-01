import React, {Component} from 'react';
import { RadioButton } from 'react-native-paper';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
TouchableOpacity

} from 'react-native';
 
export default class Fingert extends Component {
  constructor(props){
    super(props);
   
    this.state = {spo: '0'};
    this.state = {checked:'first'};
   
 
  }
 
  compute = () => {
    console.log('On pressed!');
    let spo = parseFloat(this.state.spo);
    
  };
   render() {
    return (
      <View style={styles.container}>
      <Text style={styles.head}>Do you have fingertip pulse oximeter?</Text>
 
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
          <Text style={styles.title}>SpO2</Text>
          <TextInput style={styles.input}
            keyboardType='numeric'
            value={this.state.bt}
            onChangeText={(spo) => this.setState({spo})}/>
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
            onPress={() => this.props.navigation.navigate('Homem')} /> 
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
