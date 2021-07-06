import React,  { useState } from 'react'
import { View , Text, StyleSheet, Switch, TouchableOpacity,} from 'react-native'
import { FontAwesome5, FontAwesome } from '@expo/vector-icons'

const Body = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  
    return (
        <View> 
            <View style={styles.textRow}>
                <Text style={[styles.textPrimary, styles.textshadow]}>See Visibility</Text>
                <Switch
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                    ios_backgroundColor="#3e3e3e"
                    onValueChange={toggleSwitch}
                    value={isEnabled}
                />
            </View>
            <View style={styles.textRow}>
                <Text style={[styles.textPrimary, styles.textshadow]}>Change Location </Text>
                <FontAwesome5 name="arrow-right" size={30} color="#c021e0"  />
            </View>
            <View style={styles.textRow}>
                <Text style={[styles.textPrimary, styles.textshadow]}>Change Password </Text>
                <FontAwesome5 name="arrow-right" size={30} color="#c021e0"  />
            </View>
            <View style={styles.textRow}>
                <Text style={[styles.textPrimary, styles.textshadow]}>Terms of Use </Text>
                <FontAwesome5 name="arrow-right" size={30} color="#c021e0"  />
            </View>
            <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>LOGOUT</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button2}>
                <Text style={styles.buttonText2}>DELETE PERMANENTLY</Text>
            </TouchableOpacity>
            
        </View>
        
  )
}

const styles = StyleSheet.create({
    textRow:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        paddingTop:40,
        padding:20,
    },
    textPrimary: {
        color: 'black',
        marginLeft: 10,
        marginTop:10,
        fontSize:24,
        fontWeight: 'bold',
    },
    textShadow: {
        textShadowColor: 'rgba(0, 0, 0, 0.80)',
        textShadowOffset: { width: -1, height:1 },
        textShadowRadius: 10,
    },
    button: {
        width: "70%",
        height: 50,
        alignItems: "center",
        justifyContent: "center",
        marginTop: 30,
        backgroundColor: "#8d33ec",
        marginLeft: '15%'
       
      },
    button2: {
        width: "70%",
        height: 50,
        marginTop: 10,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "white",
        borderColor: '#9d2ce4',
        borderWidth:2,
        marginLeft: '15%'  
      },
      buttonText:{
          fontSize: '20px',
          fontWeight:'bold',
          color:'white'
      },
      buttonText2:{
          fontSize: '20px',
          fontWeight:'bold',
          color:'#9d2ce4'
      },
  });

export default Body;