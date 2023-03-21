import React from 'react'
import { View } from 'react-native'
import Button from '../components/Button'

const SignIn = () => {
    return (
        <View>
            <Button
            title = 'SignIn'
            //onPress={() => navigation.navigate('SignIn')}
            backgroundColor="orange"  
        />
        </View>
    )
}

export default SignIn
