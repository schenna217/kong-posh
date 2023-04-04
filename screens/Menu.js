import React from 'react';
import {View, Text, SafeAreaView} from "react-native";
import HeaderTabs from '../components/HeaderTabs';
import Button from '../components/Button';

export default function Menu(){
    return(
        <SafeAreaView>
            <HeaderTabs/>
            <Button
            title = 'Menu'
            //onPress={() => navigation.navigate('SignIn')}
        />
        </SafeAreaView>
    );
    
}