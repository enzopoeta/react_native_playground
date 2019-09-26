import React from 'react';
import {Text,StyleSheet,View} from 'react-native'

const ListScreen = () =>{

    const mensagem = 'uma mensagem';
    const jsxInaVariable = <Text>JSX In a Variable !</Text>;

    return (<View>    
      <Text style={styles.textStyle}>Welcome to my text component !</Text>
      <Text>{mensagem}</Text>
      {jsxInaVariable}
    </View>);
};

const styles = StyleSheet.create({
        textStyle:{fontSize: 20}
})


ListScreen.navigationOptions = {
    title: 'List Screen',
  };



export default  ListScreen;

