import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SignIn from "../screens/SignIn";
import SignUp from "../screens/SignUp";
import LoggedInStack from '../navigation/LoggedInStack';
import colors from "../config/colors";

const Stack = createStackNavigator();

export default function SignUporInStack() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="SignUp" component={SignUp} options={{headerShown: false}}/>
                <Stack.Screen name="SignIn" component={SignIn} options={{headerTitle: 'Sign In', headerTintColor: colors.primary}}/>
                <Stack.Screen name="StackHome" component={LoggedInStack} options={{headerShown: false}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}