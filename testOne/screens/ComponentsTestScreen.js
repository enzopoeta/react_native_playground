import React from 'react';
import {Text,StyleSheet} from 'react-native'

const ComponentsTestScreen = () =>{
    return <Text style={styles.textStyle}>Welcome to my text component !</Text>
};

const styles = StyleSheet.create({
        textStyle:{fontSize: 30}
})


ComponentsTestScreen.navigationOptions = {
    title: 'Teste do Enzo',
  };



export default  ComponentsTestScreen;

