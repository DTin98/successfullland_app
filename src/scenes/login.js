import React from 'react'
import { StyleSheet, Text, View, Button, Image, Dimensions, TextInput } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';

const W = Dimensions.get("screen").width;

const Login = () => {
  return (
    <LinearGradient colors={['rgba(2, 16, 72, 1)',
      'rgba(7, 23, 89, 0.8139)',
      'rgba(14, 33, 110, 0.5871)',
      'rgba(23, 46, 141, 0.2417)',
      'rgba(30, 56, 163, 0)']} style={styles.container}>
      <View style={styles.logo}>
        <Image source={require("../assets/img/logo.png")}></Image>
      </View>
      <View style={styles.form_login}>
        <Text style={{ fontSize: 24, fontWeight: "bold" }}>Chào mừng!</Text>
        <View style={styles.inputgroup}> 
        <TextInput
          placeholder={'Tên đăng nhập hoặc email'}
          style={styles.input}
        />
        <TextInput
          placeholder={'Mật khẩu'}
          secureTextEntry={true}
          style={styles.input}
        />

        <Image source={require("../assets/img/login-button.png")}></Image>
        </View>
      </View>

    </LinearGradient>
  )
}

export default Login

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center'
  },
  logo: {
    textAlign: 'center',
    justifyContent: "center",
  },
  inputgroup:{
    marginTop:50,
    alignItems:'center'
  },
  form_login: {
    width: 0.9 * W,
    height: 0.9 * W,
    backgroundColor: 'white',
    borderRadius: 30,
    alignItems: 'center'
  },
  input: {
    width: 0.8 * W,
    height: 50,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    marginBottom: 10,
    borderRadius: 27,
    marginTop:20
  },
})
