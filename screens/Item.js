import React from 'react'
import { View } from 'react-native'
import Button from '../components/Button';


const Item = () => {
    return (
        <View>
            <Button
            title = 'Item'
            //onPress={() => navigation.navigate('SignIn')}
            backgroundColor="orange"  
        />
        </View>
    )
}

export default Item