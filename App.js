import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, Entypo, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons';
import Home from './screens/Home'
import SignIn from './screens/SignIn'
import SignUp from './screens/SignUp'
import Cart from './screens/Cart'
import Item from './screens/Item'
import Menu from './screens/Menu';
import colors from './config/colors';
import InitialCheck from './navigation/InitialCheck';
import { ThemeProvider } from 'react-native-paper';
import firebase from './firebase';
import LoggedInStack from './navigation/LoggedInStack';
import SignUporInStack from './navigation/SignUporInStack';

import { StripeProvider } from '@stripe/stripe-react-native';

const {Navigator, Screen} = createBottomTabNavigator();

export default function App() {
  return(
    <StripeProvider
      publishableKey="pk_test_51N2gBiG6PLk5ZJDBQRLQL3gGJ4GRqDpWYITQIJWB4STUkbJk7pgp8esLV34rkJyi1jiH1IPvKPMJiyriQcR67nFt00ht2GH7nH"

      //urlScheme="your-url-scheme" // required for 3D Secure and bank redirects
      //merchantIdentifier="merchant.com.{{YOUR_APP_NAME}}" // required for Apple Pay
    >
    <ThemeProvider>
      {/* <InitialCheck /> */}
      {/* <LoggedInStack /> */}
      <SignUporInStack />
    </ThemeProvider>
    </StripeProvider>
    // <>
    
    //   <NavigationContainer>
    //     <Navigator 
    //       screenOptions={
    //         ({ route }) => ({
    //           tabBarIcon: ({ focused, }) => {
    //             let c = focused ? colors.primary: "black";
    //             let rn = route.name
  
    //             if (rn == "Home") {
    //               return <Entypo name="home" size={24} color={c} />
    //             } else if (rn == "Cart") {
    //               return <Entypo name="shopping-cart" size={24} color={c} />
    //             // } else if (rn == "SignUp") {
    //             //   return <FontAwesome name="arrow-circle-up" size={24} color={c} />
    //             // } else if (rn == "SignIn") {
    //             //   return <Entypo name="login" size={24} color={c} />
    //             } else if (rn == "Menu") {
    //               return <FontAwesome name="apple" size={24} color={c} />
    //             } else if (rn == "Item") {
    //               return <MaterialCommunityIcons name="food-drumstick" size={24} color={c} />
    //             }
    //           },
    //           tabBarShowLabel: false,
    //           headerShown: false,
    //         })
    //       }

    //       initialRouteName={"SignUp"}
    //     >
         
    //       <Screen name="Home" component={Home}/>
    //       {/* <Screen name="SignIn" component={SignIn} options={{tabBarStyle: {display: 'none'}}}/>
    //       <Screen name="SignUp" component={SignUp} options={{tabBarStyle: {display: 'none'}}}/> */}
    //       <Screen name="Menu" component={Menu}/>
    //       <Screen name="Item" component={Item}/>
    //       <Screen name="Cart" component={Cart}/>

    //     </Navigator>
    //   </NavigationContainer>
    //   <StatusBar style="auto"/>
    // </>
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
