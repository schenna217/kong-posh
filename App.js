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
<<<<<<< Updated upstream
                  return <Entypo name="home" size={24} color="black" />
                if (rn == "Cart")
                  return <FontAwesome5 name="opencart" size={24} color="black" />
=======
                  return <FontAwesome5 name={'file-invoice-dollar'} size={24} color={c} />
                else if (rn == "SignIn")
                  return <FontAwesome5 name={'info-circle'} size={24} color={c} />
                else if (rn == "SignUp")
                  return <FontAwesome5 name={'money-check-alt'} size={24} color={c} />
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
          <Screen name="Cart" component={Cart}/>
=======
          {/* <Screen name="SignUp" component={SignUp}/>
          <Screen name="Cart" component={Cart}/> */}
>>>>>>> Stashed changes
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
