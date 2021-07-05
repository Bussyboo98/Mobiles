import React from 'react'
import { View , Text, StyleSheet} from 'react-native'
import { FontAwesome5, FontAwesome } from '@expo/vector-icons'

export default function TopBar2() {
  return (
    <View style={styles.container}> 
      <FontAwesome5 name="arrow-left" size={20} color="black" type="entypo" />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
     height:60,
     flexDirection:'row',
     padding:15,
     backgroundColor:'white',
     shadowColor: '#000',
     shadowOffset:{
         width: 0,
         height: 10,
     },
     shadowOpacity:0.12,
     shadowRadius:5.46,
     elevation:9,
    },
  });