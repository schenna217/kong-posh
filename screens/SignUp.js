import React from 'react'
<<<<<<< HEAD
import { View } from 'react-native'
=======
import { StyleSheet, View, Text, TextInput } from 'react-native'
import Button from '../components/Button';
import {auth} from '../firebase';
import { createUserWithEmailAndPassword } from '@firebase/auth';
import { useNavigation } from '@react-navigation/core';

>>>>>>> f777baddb74d9adc91fbc960c0c08f732bec6246

const SignUp = () => {
    
    return (
<<<<<<< HEAD
        <View>
            
=======
        <View style={styles.container}>
            <Text>Sign Up</Text>
            <View style = {styles.inputContainer}>
                <TextInput
                    placeholder="Email"
                    style={styles.input}
                />
                <TextInput
                    placeholder="Password"
                    style={styles.input}
                />
            </View>
            <Button
                title = "Sign Up"
            />
>>>>>>> f777baddb74d9adc91fbc960c0c08f732bec6246
        </View>
    )
}

<<<<<<< HEAD
export default SignUp
=======
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 50,
    }, inputContainer: {
        margin: 30,
        width: '80%',
        alignItems: 'center'
    }, input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 30,
    }, 
});
export default SignUp
>>>>>>> f777baddb74d9adc91fbc960c0c08f732bec6246
