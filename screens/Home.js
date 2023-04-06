import React from "react";
import {StyleSheet, View, SafeAreaView} from 'react-native'
import Button from '../components/Button'
import SignIn from '../screens/SignIn'
import SignUp from '../screens/SignUp'
import Menu from '../screens/Menu'
import Item from '../screens/Item'
import Profile from '../components/ProfileTextAvatar'


export default function Home({navigation}) {
  return (
    //<SafeAreaView>
      <View style={styles.container}>
        <Button
            title = 'SignUp'
            onPress={() => navigation.navigate(SignUp)}
        />
        <Button
            title = 'SignIn'
            onPress={() => navigation.navigate(SignIn)}
        />
        <Button
            title = 'Menu'
            onPress={() => navigation.navigate(Menu)}
        />
        <Button
            title = 'Item'
            onPress={() => navigation.navigate(Item)}
        />
        <Profile/>
    </View>
    //</SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
