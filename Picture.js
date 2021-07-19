import React from 'react';
import {SafeAreaView,StatusBar,StyleSheet,View,Image,Text, TouchableOpacity} from 'react-native';


const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.container}>
      <View style={styles.body}>
            
            <Text style={{textAlign: 'center', padding: '30px', fontSize: '25px', fontWeight:'600'}}>
               2 Likes
            </Text>
                
        </View>
        <View style={styles.parent}>
        <TouchableOpacity>
        <Image 
            source={require('./assets/sole.jpg')}  
            style={{width: 150, height: 150, }}
            />
         </TouchableOpacity>
         <TouchableOpacity>  
         <Image 
            source={require('./assets/sole.jpg')}  
            style={{width: 150, height: 150, }}
            />
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
    justifyContent: 'space-around',
  },
 
});

export default App;
