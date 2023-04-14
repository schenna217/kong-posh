import React from "react";
import {StyleSheet, View, SafeAreaView} from 'react-native'
import Profile from '../components/ProfileTextAvatar'
import Menu from "./Menu";
import Button from "../components/Button";
import Categories from "../components/Categories";


export default function Home({navigation}) {
  return (
    <SafeAreaView>
        <View style={styles.container}>
              <Button
                title = 'Menu'
                onPress={() => navigation.navigate(Menu)}
              />
              <Button
                title = 'Sign Out'
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
