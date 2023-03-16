import React from "react";
import {StyleSheet} from 'react-native'



export default function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
        <Button
            title = 'Sign Up'
            onPress={() => navigation.navigate('SignUp')}
            backgroundColor="orange"  
        />
        <Button
            title = 'Sign In'
            onPress={() => navigation.navigate('SignIn')}
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
