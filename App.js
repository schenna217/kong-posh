import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Feather, MaterialIcons, FontAwesome5 } from '@expo/vector-icons';

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
  
                if (rn == "ContractHistory")
                  return <FontAwesome5 name={'file-invoice-dollar'} size={24} color={c} />
                else if (rn == "Info")
                  return <FontAwesome5 name={'info-circle'} size={24} color={c} />
                else if (rn == "Money")
                  return <FontAwesome5 name={'money-check-alt'} size={24} color={c} />
                return <FontAwesome5 name={'sign-out-alt'} size={24} color={c} />
  
              },
              tabBarShowLabel: false,
              headerShown: false,
            })
          }
          initialRouteName={"Home"}
        >
          <Screen name="Home" component={<div>hello</div>}/>
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
