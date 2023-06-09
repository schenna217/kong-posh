import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, Entypo, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import colors from './config/colors';
import { ThemeProvider } from 'react-native-paper';
import firebase from './firebase';
import LoggedInStack from './navigation/LoggedInStack';
import SignUporInStack from './navigation/SignUporInStack';
import { Context } from './Context';
import { useState, useEffect } from 'react';
import * as SplashScreen from 'expo-splash-screen';

import { StripeProvider } from '@stripe/stripe-react-native';
const { Navigator, Screen } = createBottomTabNavigator();

export default function App() {
  const initialFood = {
    id: '17',
    name: 'chicken good',
    description: 'taste yummy',
    price: '18.99',
    quantity: 0,
    image: require('./assets/images/Kashmiri_Haak.png')
  };
  const [appIsReady, setAppIsReady] = useState(false);
  const [context, setContext] = useState([]);

  useEffect(() => {
    async function show_splash_screen() {
      try {
        // Simulate a 1-second delay
        await new Promise(resolve => setTimeout(resolve, 1000));
      } catch (e) {
        console.warn(e);
      } finally {
        await SplashScreen.hideAsync();
        setAppIsReady(true);
      }
    }

    show_splash_screen();
  }, []);

  if (!appIsReady) {
    // Render nothing while the app is loading
    return null;
  }

  // Render the app content after the splash screen is done
  return (
    
    <Context.Provider value={[context, setContext]}>
      <StripeProvider
      publishableKey="pk_test_51KQ8BeL1Sbu4VnBadepvuKhlBEyPg6eHW8IHCTcQ8rCLXnXFefa6bUAS1zPJXkuQ5W2XnYzxbcf5OthLW4QRBnoB00xj47hBzW"

      //urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
      //merchantIdentifier="merchant.com.{{YOUR_APP_NAME}}" // required for Apple Pay
     >
      <ThemeProvider>
        <SignUporInStack />
      </ThemeProvider>
      </StripeProvider>
    </Context.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
