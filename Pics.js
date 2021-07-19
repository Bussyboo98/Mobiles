import React from 'react';
import {SafeAreaView,StatusBar,StyleSheet,View,Image,Text, TouchableOpacity, Button} from 'react-native';
import { FontAwesome} from"@expo/vector-icons"

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
      <View style={styles.body}>
            
            <Text style={{textAlign: 'center', padding: '30px', fontSize: '25px', fontWeight:'600'}}>
               Pictures
            </Text>
                
        </View>
        <View style={styles.parent}>

        <TouchableOpacity
        style={{
            color: "white",
            fontSize: 32,
            fontWeight: "400",
            backgroundColor: '#dddddd',
            width: 150,
            height: 150,
            alignItems:"center",
            borderRadius:"10px"

        }}
        >
        <FontAwesome name="plus" size={25} color={'white'} style={{marginTop:"60px"}}/>

         </TouchableOpacity>
         
        <TouchableOpacity
         style={{
            color: "white",
            fontSize: 32,
            fontWeight: "400",
            backgroundColor: '#dddddd',
            width: 150,
            height: 150,
            alignItems:"center",
            borderRadius:"10px"

        }}
        >
        <FontAwesome name="plus" size={25} color={'white'} style={{marginTop:"60px"}}/>

         </TouchableOpacity>

             
        <TouchableOpacity
         style={{
            color: "white",
            fontSize: 32,
            fontWeight: "400",
            backgroundColor: '#dddddd',
            width: 150,
            height: 150,
            alignItems:"center",
            borderRadius:"10px"

        }}
        >
        <FontAwesome name="plus" size={25} color={'white'} style={{marginTop:"60px"}}/>

         </TouchableOpacity>

             
        <TouchableOpacity
         style={{
            color: "white",
            fontSize: 32,
            fontWeight: "400",
            backgroundColor: '#dddddd',
            width: 150,
            height: 150,
            alignItems:"center",
            borderRadius:"10px"

        }}
        >
        <FontAwesome name="plus" size={25} color={'white'} style={{marginTop:"60px"}}/>

         </TouchableOpacity>
             
        <TouchableOpacity
         style={{
            color: "white",
            fontSize: 32,
            fontWeight: "400",
            backgroundColor: '#dddddd',
            width: 150,
            height: 150,
            alignItems:"center",
            borderRadius:"10px"

        }}
        >
        <FontAwesome name="plus" size={25} color={'white'} style={{marginTop:"60px"}}/>

         </TouchableOpacity>
             
        <TouchableOpacity
         style={{
            color: "white",
            fontSize: 32,
            fontWeight: "400",
            backgroundColor: '#dddddd',
            width: 150,
            height: 150,
            alignItems:"center",
            borderRadius:"10px"

        }}
        >
        <FontAwesome name="plus" size={25} color={'white'} style={{marginTop:"60px"}}/>

         </TouchableOpacity>
        </View>
      
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  parent: {
    flex: 1,
    flexDirection: 'row',
    flexWrap:'wrap'
  },
 
});

export default App;
