import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Dimensions,
} from 'react-native';
import {TouchableNativeFeedback} from 'react-native-gesture-handler';
import {PRIMARY, SECONDARY} from '_styles/color';
import Icon from 'react-native-vector-icons/AntDesign';

const W = Dimensions.get('screen').width;

const Login = ({params}) => (
  <View style={styles.container}>
    <Text>Icon</Text>
    <View style={styles.formLogin}>
      <Text>Chao mung!</Text>
      <View style={styles.input}>
        <Icon name="user" size={30} color="black" />
        <TextInput placeholder="Ten dang nhap hoac email"></TextInput>
      </View>
      <View style={styles.input}>
        <Icon name="lock" size={30} color="black" />
        <TextInput placeholder="Mat khau"></TextInput>
      </View>

      <View style={styles.option}>
        <Text>Dang ky</Text>
        <Text>Quen mat khau</Text>
      </View>

      <TouchableNativeFeedback>
        <Text>Dang nhap</Text>
      </TouchableNativeFeedback>
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: PRIMARY,
    justifyContent: 'center',
  },
  formLogin: {
    backgroundColor: 'white',
    borderRadius: 20,
    alignItems: 'center',
  },
  option: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
  },
  input: {
    flexDirection: 'row',
  },
});

export default Login;
