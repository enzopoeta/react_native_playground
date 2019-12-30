import React from 'react';
import {Text,StyleSheet,View,FlatList} from 'react-native'
//import { FlatList } from 'react-native-gesture-handler';

const ListScreen = () =>{

    const items = [{name:'item 1' },{name:'item 2'},{name:'item 3'}] ;


    

    return (
      <View>
        <Text>List Item Demo</Text>
      <FlatList 
        horizontal={false}
        keyExtractor={(item)=>item.name}
        data={items} 
        renderItem={({item}) =>{
        return <Text style={styles.textStyle}>{item.name}</Text>;
      }} />
      </View>
    );
};

const styles = StyleSheet.create({
        textStyle:{marginVertical: 100}
})


ListScreen.navigationOptions = {
    title: 'List Screen',
  };



export default  ListScreen;

