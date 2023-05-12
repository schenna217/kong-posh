import React from "react";
import {StyleSheet, View, SafeAreaView, Image, LogBox} from 'react-native'
import Profile from '../components/ProfileTextAvatar'
import Menu from "./Menu";
import Button from "../components/Button";
import Categories from "../components/Categories";
import {auth} from '../firebase';
import { signOut } from 'firebase/auth';
import iconSet from "@expo/vector-icons/build/Fontisto";



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
        <View style={styles.container}>
              <Button
                title = "Menu"
                onPress={() => navigation.navigate(Menu)}
              />
              <Button
                title = "Sign Out"
                onPress={handleSignOut}
              />
        </View>
        <View style={styles.pictureView}>
          <Image source = {require('../assets/icons/logo.png')} style={{height: 395, width: 395}}/>
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
    marginTop: 100,
  }
  
});

