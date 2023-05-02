import React, {useEffect} from 'react'
import { StyleSheet, View, Text, TextInput} from 'react-native'
import Button from '../components/Button'
import {auth} from '../firebase';
import { signInWithEmailAndPassword } from '@firebase/auth';
import { useNavigation } from '@react-navigation/core';
import Email from '../Email';
import Password from '../Password';

const SignIn = () => {

    const {email, setEmail} = Email()
    const {password, setPassword} = Password()
    const navigation = useNavigation()

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(user => {
            if(user){
                navigation.navigate("Home")
            }
        })

        return unsubscribe
    }, [])

    const signIn = () => {
        console.log("Signing In");
        try {
            signInWithEmailAndPassword(auth, email, password)
                .then(userCredientals => {
                    const user = userCredientals.user;
                    console.log("Signed in with " + user.email)
                })
        }
        catch(error){
            console.log("SignIn didn't work: " + error.message);
        }
    }

    return (
        <View style={styles.container}>
            <Text style = {styles.welcomeText}>Welcome to Kong Posh!</Text>
            {/* <Text>Please sign in</Text> */}
            <View style = {styles.inputContainer}>
                <TextInput
                    placeholder="Email"
                    value={email}
                    onChangeText={text => setEmail(text)}
                    style={styles.input}
                />
                <TextInput
                    placeholder="Password"
                    value={password}
                    onChangeText={text => setPassword(text)}
                    style={styles.input}
                />
            </View>
            <Button
                title = "Sign In"
                onPress={signIn}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        //paddingTop: 50,
    }, inputContainer: {
        margin: 30,
        width: '80%',
        alignItems: 'center',
    }, input: {
        backgroundColor: 'white',
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 30,
        width: 250,
    }, welcomeText: {
        fontSize: 24,
        alignItems: 'center',
        paddingVertical: 20,
    }
});


export default SignIn
