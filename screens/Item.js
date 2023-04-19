import React from 'react'
import { View, Image, ImageBackground, Text, StyleSheet} from 'react-native'
import Button from '../components/Button';



const Item = ({route}) => {
    const dish = route.params;
    return (
        <View style={styles.container}>
            <Image>

            </Image>
            <Text>
                Item Name
            </Text>
            <Text>
                Item description
            </Text>
            <Text>
                Price
            </Text>
            <Button>
                Add to Cart
            </Button>
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