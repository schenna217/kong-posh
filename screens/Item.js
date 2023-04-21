import React from 'react'
import { View, Image, ImageBackground, Text, StyleSheet} from 'react-native'
import Button from '../components/Button';



const Item = ({route}) => {
    const {source, name, price, description} = route.params;
    return (
        <View style={styles.container}>
            <Image
                source={source}
            />
            <Text>
                {name}
            </Text>
            <Text>
                {description}
            </Text>
            <Text>
                {price}
            </Text>
            <Button
                title="Add to Cart"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default Item