import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native';
import { FontAwesome} from"@expo/vector-icons"

export default function App() {
    
  return (
    <View style={styles.container}>
        <TouchableOpacity
            style={{color: "white",fontSize: 32,fontWeight: "500", bottom: '12%',  right:"40%",  }}>
            <FontAwesome name="arrow-left" size={25} color={'black'}/>
        </TouchableOpacity>
        <TouchableOpacity
            style={{color: "white",fontSize: 32,fontWeight: "500", bottom: "15%", left:"40%", }}>
            <FontAwesome name="gear" size={25} color={'black'}/>
        </TouchableOpacity>
      <StatusBar style="auto" />
    
        <View style={styles.body}>
            <Image 
            source={require('./assets/sole.jpg')}  
            style={{width: 150, height: 150, borderRadius: 150 / 2, bottom: "10%", }}
            />
            <Text style={styles.text}>
                Cole
            </Text>
            <Text style={styles.age}>
                30
            </Text>
        </View>
    <View style={styles.box}> 
     <TouchableOpacity >
        <Text style={{ fontSize: '20px', textAlign: 'left', fontWeight:"500"}}>
        Change photo, first name, age and more 
        </Text>
         
     </TouchableOpacity>
    </View>
   <View style={styles.foot}>
   <TouchableOpacity style={styles.hootr}>
        <Text style={styles.hoot}
         >HOOTR NIGHTFALL</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.hootr}>
        <Text style={styles.hoot}
         >HOOTR DUSK</Text>
      </TouchableOpacity>
   </View>
    </View>
  );
  
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
      textAlign: 'center',
      fontSize: '40px',
      fontWeight: '700',
     
  },
  age: {
      textAlign: 'center',
      fontSize: '25px',
      fontWeight: '400',
     
  },
  body: {
      marginBottom: '20%'
  }, 
  box: {
      fontWeight: '500',
      padding: '10%',
      margin: '5%',
      bottom: '10%',
      borderRadius: '10px'
  },
  hootr: {
    width: "150%",
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    backgroundColor: "purple",
    marginLeft: '3%'
    
   
  },
  hoot:{
      fontSize: '20px',
      fontWeight:'bold',
      color:'white'
  },
  foot: {
      bottom: '10%',
    height: 50,
    alignItems: "center",
    
    marginLeft: '3%'
  }
});
