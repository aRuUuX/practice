import React from 'react';
import { Button, StyleSheet, Text, TextInput, View, Image } from 'react-native';

const Forgot = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png' }}
                style={styles.image1}
            />
            <View style={styles.card}>
                <Text style={styles.title}>Find Your Account</Text>
                <Text>Please enter your email or mobile number to search for your account</Text>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Email Address or Number"
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                    <View style={styles.buttonContainer}>
                        <Button title="Cancel" onPress={() => navigation.navigate('Login')} />
                        <Button title="Reset Password" onPress={() => navigation.navigate('Login')} />
                    </View>
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
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    image1: {
        width: 80,
        height: 80,
        borderRadius: 40,
        marginBottom: 20,
        alignSelf: 'center',
    },
    inputContainer: {
        width: '100%',
    },
    input: {
        width: '100%',
        borderWidth: 1,
        borderColor: 'black',
        marginVertical: 10,
        padding: 10,
        borderRadius: 8,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 10,
    },
});

export default Forgot;
