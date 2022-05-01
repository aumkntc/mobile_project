import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  Alert,
  ScrollView,
  ImageBackground
} from 'react-native';

export default class Followupuser extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
       modalVisible:false,
      userSelected:[],
      
      data: [
        {id:1,  name: "Follow-up", image:"https://img.icons8.com/external-smashingstocks-circular-smashing-stocks/344/external-calendar-education-smashingstocks-circular-smashing-stocks.png"}
      ]
    };
  }

  clickEventListener = (item) => {
    Alert.alert('Message', 'Item clicked. '+item.name);
  }

  render() {
    return (
      <ImageBackground style={{flex:1}} source={require('./bg.png')}>
      <View style={styles.container}>
        <FlatList 
          style={styles.contentList}
          columnWrapperStyle={styles.listContainer}
          data={this.state.data}
          keyExtractor= {(item) => {
            return item.id;
          }}
          renderItem={({item}) => {
          return (
            
            <TouchableOpacity style={styles.card} onPress={() => {this.clickEventListener(item)}}>
              <Image style={styles.image} source={{uri: item.image}}/>
                <Text style={styles.name}>{item.name}</Text>
                <Text style={styles.followButton}> 30/12/2022</Text>
            </TouchableOpacity>
          )}}/>
      </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    marginTop:20,
  },
  contentList:{
    flex:1,
  },
  cardContent: {
    marginLeft:20,
    marginTop:10
  },
  image:{
    width:90,
    height:90,
    borderRadius:45,
    borderWidth:2,
    borderColor:"#ebf0f7"
  },

  card:{
    shadowColor: '#00000021',
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.37,
    shadowRadius: 7.49,
    elevation: 12,

    marginLeft: 20,
    marginRight: 20,
    marginTop:20,
    backgroundColor:"white",
    padding: 10,
    flexDirection:'row',
    borderRadius:30,
  },

  name:{
    fontSize:18,
    flex:1,
    alignSelf:'center',
    color:"#3399ff",
    fontWeight:'bold'
  },
  count:{
    fontSize:14,
    flex:1,
    alignSelf:'center',
    color:"#6666ff"
  },
  followButton: {
    marginTop:10,
    height:35,
    width:100,
    padding:10,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "white",
    borderColor:"#dcdcdc",
  },
  followButtonText:{
    color: "black",
    fontSize:12
  },
}); 