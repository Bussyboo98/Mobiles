import React,  { useState } from 'react'
import { View , Text, StyleSheet, Switch} from 'react-native'

const Body = () => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  
    return (
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
  )
}

const styles = StyleSheet.create({
    textRow:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
    },
    textPrimary: {
        color: 'black',
        marginLeft: 10,
        marginTop:10,
        fontSize:24,
        fontWeight: 'bold',
        paddingTop:50,
    },
    textShadow: {
        textShadowColor: 'rgba(0, 0, 0, 0.80)',
        textShadowOffset: { width: -1, height:1 },
        textShadowRadius: 10,
    },
  });

export default Body;