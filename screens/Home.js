import React from "react";
import {StyleSheet, View, SafeAreaView} from 'react-native'
import Profile from '../components/ProfileTextAvatar'
import Menu from "./Menu";
import Button from "../components/Button";


export default function Home({navigation}) {
  return (
    //<SafeAreaView>
    <View style={styles.container}>
          <Button
            title = 'Menu'
            onPress={() => navigation.navigate(Menu)}
          />
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
    paddingHorizontal: 15,
    paddingVertical: 40,
  },
  
});
