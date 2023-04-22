import React from 'react'
import { View, Image, ImageBackground, Text, StyleSheet} from 'react-native'
import Button from '../components/Button';



const Item = ({route}) => {
    const {source, name, price, description} = route.params;
    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Button/>
            </View>
            <View style={styles.bottom}>
                <Image
                    source={source}
                    style={styles.picture}
                />
                <Text style={styles.title}>
                    {name}
                </Text>
                <View style={styles.details}>
                <Text>
                    {description}
                </Text>
                <Text>
                    {price}
                </Text>
                </View>
                <Button
                    title="Add to Cart"
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }, picture: {
        height: 200,
        width: 175,
        marginTop: 50
    }, top: {
        marginLeft: 50,
        paddingTop: 30,
        alignItems: 'flex-start'
    }, bottom: {
        alignItems: 'center'
    }, title: {
        marginTop: 40,
        fontSize: 35
    }, details: {
        alignItems: 'center',
        marginBottom: 110
    }
})

export default Item