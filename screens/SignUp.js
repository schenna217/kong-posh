import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TextInput, Image } from 'react-native';
import Button from '../components/Button';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from '@firebase/auth';
import { useNavigation } from '@react-navigation/core';
import Email from '../Email';
import Password from '../Password';
import colors from '../config/colors';

const SignUp = () => {
  const { email, setEmail } = Email();
  const { password, setPassword } = Password();
  const navigation = useNavigation();
  const goToSignIn = () => {
    navigation.navigate('SignIn');
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      if (user) {
        navigation.navigate('StackHome');
      }
    });

    return unsubscribe;
  }, []);

  const signUp = () => {
    console.log('Signing Up');
    try {
      createUserWithEmailAndPassword(auth, email, password).then(
        userCredientals => {
          const user = userCredientals.user;
          console.log('Signed up with ' + user.email);
        },
      );
    } catch (error) {
      console.log('SignUp didn\'t work: ' + error.message);
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/icons/logoHead.png')}
        style={styles.logo}
      />
      <Text style={styles.welcomeText}>Welcome to Kong Posh!</Text>
      <View style={styles.inputContainer}>
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
          secureTextEntry
        />
      </View>
      <Button title="Sign Up" onPress={signUp} />
      <Button
        title="Already have an account?"
        onPress={goToSignIn}
        style={{ marginTop: 10 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputContainer: {
    margin: 20,
    width: '80%',
    alignItems: 'center',
  },
  input: {
    backgroundColor: 'white',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 10,
    marginTop: 20,
    width: 250,
  },
  welcomeText: {
    fontSize: 24,
    alignItems: 'center',
    paddingVertical: 20,
    color: colors.primary,
  },
  logo: {
    width: 100,
    height: 100,
    //marginTop: 30,
    alignSelf: 'center',
  },
});

export default SignUp;
