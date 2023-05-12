import React from "react";
import {StyleSheet, View, SafeAreaView, Image, LogBox, Text} from 'react-native'
import Profile from '../components/ProfileTextAvatar'
import Menu from "./Menu";
import Button from "../components/Button";
import Categories from "../components/Categories";
import {auth} from '../firebase';
import { signOut } from 'firebase/auth';
import iconSet from "@expo/vector-icons/build/Fontisto";
import colors from "../config/colors";



export default function Home({navigation}) {
  const handleSignOut = () => {
    console.log("Signing Out")
    try {
      signOut(auth)
        .then(() => {
          navigation.navigate("SignIn")
        })
    }
    catch(error) {
      console.log("SignOut didn't work: " + error.message);
    }
  }
  return (
    <SafeAreaView style={{backgroundColor: "#fff"}}>
        {/* <View style={styles.container}>
              <Button
                title = "Menu"
                onPress={() => navigation.navigate(Menu)}
              />
              <Button
                title = "Sign Out"
                onPress={handleSignOut}
              />
        </View> */}
        <View style={styles.pictureView}>
        <Image
        source={require('../assets/icons/logoHead.png')}
        style={styles.logo}
      />
      <Text style={styles.titleText}>Welcome to Kong Posh!</Text>
      <Text style={styles.infoText}>We are a catering business based in Chicago here to serve you Kashmiri food! With our variety of food and drinks, explore the culture and cuisine of all of Kashmir!</Text>
      <Button
                title = "Sign Out"
                onPress={handleSignOut}
              />
              </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 2,
    flexDirection: 'row',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 15,
    paddingVertical: 40,
    marginHorizontal: 5,
    marginVertical: 5,
  }, pictureView: {
    alignItems: "center",
    marginTop: 50,
    marginVertical: 315,
  },
  logo: {
    width: 100,
    height: 100,
    marginTop: 30,
    alignSelf: 'center',
  },
  titleText: {
    fontSize: 24,
    alignItems: 'center',
    paddingVertical: 10,
    color:colors.primary,
  },
  infoText: {
    fontSize: 18,
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 20,
    paddingBottom: 10,
    justifyContent: 'center',
    textAlign: 'center'
  }
  
});

