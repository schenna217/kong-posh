import React from "react";
import {StyleSheet, View} from 'react-native'
import Button from '../components/Button'
import SignIn from '../screens/SignIn'
import SignUp from '../screens/SignUp'
import Menu from '../screens/Menu'
import Item from '../screens/Item'


export default function Home({navigation}) {
  return (
    <View style={styles.container}>
        <Button
            title = 'SignUp'
            onPress={() => navigation.navigate(SignUp)}
            //backgroundColor="orange"  
        />
        <Button
            title = 'SignIn'
            onPress={() => navigation.navigate(SignIn)}
            backgroundColor="orange"  
        />
        <Button
            title = 'Menu'
            onPress={() => navigation.navigate(Menu)}
            backgroundColor="orange"  
        />
        <Button
            title = 'Item'
            onPress={() => navigation.navigate(Item)}
            backgroundColor="orange"  
        />
    </View>
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
