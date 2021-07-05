import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image, Animated, PanResponder,  } from 'react-native';  
import SwipeCards from './Panresponder';
import SignUp from './SignUp';
import LogIn from './Login'
import Profile from './Profile'
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';


import { createStackNavigator } from '@react-navigation/stack';



const SCREEN_HEIGHT = Dimensions.get('window').height 
const SCREEN_WIDTH = Dimensions.get('window').width



const Foods = [
  { id: "1", uri: require('./assets/sole.jpg') },
  { id: "2", uri: require('./assets/fo.jpg') },
  { id: "3", uri: require('./assets/sos.jpg') },
  { id: "4", uri: require('./assets/do.jpg') },
  { id: "5", uri: require('./assets/bob.jpg') },


]

export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='profile'>
       <Stack.Screen component={Profile} name='profile' options={{ headerShown: false}} />
        <Stack.Screen component={SignUp} name='register' />
        <Stack.Screen component={LogIn} name='login' />
        <Stack.Screen component={SwipeCards} name='Hootr' />
      </Stack.Navigator>
      
    </NavigationContainer>
    
  );
}



// export default function App() {
//   return (
//     <SignUp  />
//   );
// }



// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
