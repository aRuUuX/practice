import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Image, Alert, ScrollView } from 'react-native';
import axios from 'axios';

const Login = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');


  function handleLogin() {
    console.log(email, password)

    const userData = {
      email: email,
      password
    };
    axios.post('http://localhost:5002/login-user', userData).then(res => {
      console.log(res.data)
    if(res.data.status=="ok"){
      Alert.alert('Logged in Successfully');
      navigation.navigate('Dashboard')
    }
    });
  }



  return (
    <View style={styles.container} keyboardShouldPersistTaps={"always"}>
      <View style={styles.card}>
        <Image
          source={require('../assets/Logo.png')} // Update with correct path
          style={styles.image}
        />
        <Text style={styles.title}>Login</Text>

        <View style={styles.inputContainer}>
          <Text>Email Address:</Text>
          <TextInput
            style={styles.input}
            placeholder="Email Address"
            value={email}
            onChangeText={text => setEmail(text)}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View style={styles.inputContainer}>
          <Text>Password:</Text>
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={text => setPassword(text)}
            secureTextEntry
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button title="Login" onPress={handleLogin} />
        </View>

        <Text
          style={styles.forgotPassword}
          onPress={() => navigation.navigate('Forgot')}
        >
          Forgot Password?
        </Text>

        <View style={styles.buttonContainer}>
          <Button
            title="Sign Up"
            onPress={() => navigation.navigate('Register')}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#BACD92',
    alignItems: 'center',
    justifyContent: 'center',
  },
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 8,
    width: '80%',
    maxWidth: 400,
  },
  image: {
    width: 120,
    height: 120,
    marginBottom: 20,
    borderRadius: 100,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
    width: '100%',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  buttonContainer: {
    width: '100%',
    marginVertical: 10,
  },
  forgotPassword: {
    marginTop: 10,
    fontStyle: 'italic',
    textDecorationLine: 'underline',
  },
});

export default Login;
