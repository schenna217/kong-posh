import React from "react";
import {StyleSheet, View, SafeAreaView} from 'react-native'
import Profile from '../components/ProfileTextAvatar'
import Menu from "./Menu";
import Button from "../components/Button";
import Categories from "../components/Categories";
import { useNavigation } from "@react-navigation/core";
import {auth} from '../firebase';
import { signOut } from 'firebase/auth';



const Home = () => {
  const navigation = useNavigation()
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
    <SafeAreaView>
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
        <Categories/>
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
  },
  
});

export default Home