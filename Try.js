import React, { useCallback, useEffect, useState } from "react";
import { Alert, Button, Linking, Platform, StyleSheet, Text, View, ImageBackground, Image,Route } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import 'react-native-gesture-handler';

const LinkingPage = () => {

    const navigation = useNavigation();
    const openLine = () => {
        Linking.openURL('https://line.me/ti/p/kFt6ImfxYX')
            .catch(() => {
                Linking.openURL('https://line.me/en/');
            })
    const navigation = useNavigation();
    }
    return (
        <ImageBackground style={{flex:1}} source={require('./bg.png')}>
     
        <View style={styles.container}>
        <Image
            style={{height:200, width:200}}
            source={require('./Line.png')}/>

            <View style={styles.buttonContainer}>
                <Button title="Open Line" onPress={openLine} color="steelblue" />
            </View>

            <View style={styles.buttonContainer}>
            <Button onPress = {() => navigation.navigate('Gmap')} title="Open Map"/>
            </View>

            <View style={styles.buttonContainer}>
            <Button onPress = {() => navigation.navigate('Mainmenu')} title="Back to Menu"/>
            </View>
        </View>
    </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: "center",
        justifyContent: "center",
      },
    buttonContainer: {
        margin: 10
    }
});

export default LinkingPage