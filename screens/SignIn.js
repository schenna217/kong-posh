import React from 'react'
import { StyleSheet, View, Text, TextInput} from 'react-native'
import Button from '../components/Button'

const SignIn = () => {
    return (
        <View style={styles.container}>
            <Text>Sign In</Text>
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
                title = "Sign In"
            />
        </View>
    )
}

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

export default SignIn
