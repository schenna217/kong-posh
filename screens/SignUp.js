import React from 'react'
import { View } from 'react-native'
import Button from '../components/Button';


const SignUp = () => {
    return (
        <View>
            <Button
            title = 'SignUp'
            //onPress={() => navigation.navigate('SignIn')}
            backgroundColor="orange"  
        />
        </View>
    )
}

export default SignUp
