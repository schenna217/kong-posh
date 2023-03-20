import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, Entypo, FontAwesome5 } from '@expo/vector-icons';
import Home from './screens/Home'
import SignIn from './screens/SignIn'
import SignUp from './screens/SignUp'
import Cart from './screens/Cart'

const {Navigator, Screen} = createBottomTabNavigator();

export default function App() {
  return (
    <>
      <NavigationContainer>
        <Navigator 
          screenOptions={
            ({ route }) => ({
              tabBarIcon: ({ focused, }) => {
                let c = focused ? 'red' : 'green';
                let rn = route.name
  
                if (rn == "Home")
                  return <Entypo name="home" size={24} color="black" />
                if (rn == "Cart")
                  return <FontAwesome5 name="opencart" size={24} color="black" />
                return <FontAwesome5 name={'sign-out-alt'} size={24} color={c} />
  
              },
              tabBarShowLabel: false,
              headerShown: false,
            })
          }
          initialRouteName={"Home"}
        >
          <Screen name="Home" component={Home}/>
          <Screen name="SignIn" component={SignIn}/>
          <Screen name="Cart" component={Cart}/>
        </Navigator>
      </NavigationContainer>
      <StatusBar style="auto"/>
    </>
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
