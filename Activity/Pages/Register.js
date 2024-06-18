import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Button, Image, Alert } from 'react-native';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const Register = () => {
  const navigation = useNavigation();

  const [firstName, setFirstName] = useState('');
  const [firstNameVerify, setFirstNameVerify] = useState(false);
  const [lastName, setLastName] = useState('');
  const [lastNameVerify, setLastNameVerify] = useState(false);
  const [email, setEmail] = useState('');
  const [emailVerify, setEmailVerify] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordVerify, setPasswordVerify] = useState(false);

  const validateFirstName = (text) => {
    setFirstName(text);
    setFirstNameVerify(text.length > 0);
  };

  const validateLastName = (text) => {
    setLastName(text);
    setLastNameVerify(text.length > 0);
  };

  const validateEmail = (text) => {
    setEmail(text);
    setEmailVerify(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(text));
  };

  const validatePassword = (text) => {
    setPassword(text);
    setPasswordVerify(text.length >= 6);
  };

  const handleRegister = () => {
    const userData = {
      fname: firstName,
      lname: lastName,
      email,
      password,
    };
    
    if (firstNameVerify && lastNameVerify && emailVerify && passwordVerify) {
      axios
        .post('http://localhost:5002/register', userData)
        .then((res) => {
          console.log(res.data);
          if (res.data.status === 'ok') {
            Alert.alert('Registered Successfully!');
            navigation.navigate('Login');
          } else {
            Alert.alert(JSON.stringify(res.data));
          }
        })
        .catch((e) => console.log(e));
    } else {
      Alert.alert('Fill mandatory details');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={require('../assets/Logo.png')} // Update with correct path
          style={styles.image}
        />
        <Text style={styles.title}>Register Account</Text>

        <View style={[styles.inputContainer, { flexDirection: 'row' }]}>
          <View style={styles.inputWrapper}>
            <Text>First Name:</Text>
            <TextInput
              style={styles.input}
              placeholder="First Name"
              value={firstName}
              onChangeText={validateFirstName}
            />
          </View>
          <View style={styles.inputWrapper}>
            <Text>Last Name:</Text>
            <TextInput
              style={styles.input}
              placeholder="Last Name"
              value={lastName}
              onChangeText={validateLastName}
            />
          </View>
        </View>

        <View style={styles.inputContainer}>
          <Text>Email Address:</Text>
          <TextInput
            style={styles.input}
            placeholder="Email Address"
            value={email}
            onChangeText={validateEmail}
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
            onChangeText={validatePassword}
            secureTextEntry
          />
        </View>

        <View style={styles.buttonContainer}>
          <Button title="Register" onPress={handleRegister} />
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
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    padding: 20,
    width: '80%',
    maxWidth: 400,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 100,
    marginBottom: 20,
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
  inputWrapper: {
    flex: 1,
    marginRight: 10,
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
    marginTop: 10,
  },
});

export default Register;
