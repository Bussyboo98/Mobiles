import React from 'react'
import { View, Button,TextInput,StyleSheet, ImageBackground, Text, TouchableOpacity, } from 'react-native'


const image = { uri: require('./assets/sole.jpg')};
export default class SignUp extends React.Component {
  state = {
    fullname: '',  email: '', password: '', confirm_password: ''
  }
  onChangeText = (key, val) => {
    this.setState({ [key]: val })
  }
  signUp = async () => {
    const { fullname,  email, password,  confirm_password } = this.state
    try {
         fullname,  email, password,  confirm_password 
      console.log('user successfully signed up!: ', success)
      this.props.navigation.navigate('login')
    } catch (err) {
      console.log('error signing up: ', err)
    }
  }
 
  render() {
      console.log(this.props.navigation);
    return (
        <View style={styles.container}>
        <ImageBackground source={image} style={styles.image}>
        <View>
        <Text style={styles.header}>
              Register
          </Text>
        <View style={styles.start}>
        <TextInput
          style={styles.input}
          placeholder='Full Name'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('fullname', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Email'
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('email', val)}
        />
       
        <TextInput
          style={styles.input}
          placeholder='Password'
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('password', val)}
        />
        <TextInput
          style={styles.input}
          placeholder='Confirm Password'
          secureTextEntry={true}
          autoCapitalize="none"
          placeholderTextColor='white'
          onChangeText={val => this.onChangeText('confirm_password', val)}
        />
       
     <View  style={styles.loginBtn}>
     <Button
          title='Sign Up'
          onPress={this.signUp}
        />
     </View>
    
       
        <View  style={styles.footer}>
        <Text style={{color:'white', paddingRight: '20px'}}>Already have an account ?   
        <View  style={styles.button}>
        <Button
          title='Sign In'
          onPress={() => this.props.navigation.navigate('login')}
        />
        </View> 

        </Text>
        </View>
        </View>
       </View>
       </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  input: {
    width: 350,
    height: 55,
    backgroundColor: 'transparent',
    borderColor: 'white',
    borderWidth: 1,
    margin: 10,
    padding: 8,
    color: 'white',
    borderRadius: 14,
    fontSize: 18,
    fontWeight: '500',
  },
  start: {
    marginTop: '10%'
  },
  header: {
    fontSize: 35,
    width: 370,
    color: 'black',
    fontWeight: 'bolder',
    textAlign: 'center',
    marginTop: '30%',
    color: 'white',
    
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    
  },
  footer: {
      marginTop:'5%', 
      margin: 20,
      alignItems: 'center',
  },
 
  loginBtn: {
    width: "70%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#42A5F5",
    marginLeft: '15%'
   
  },
  loginText:{
      fontSize: '20px',
      fontWeight:'bold',
      color:'white'
  },
  button: {
      marginLeft: 20,
      alignItems: 'center',
  }
})