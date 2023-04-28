import React, { useState } from 'react'
import { View, Image, ImageBackground, Text, StyleSheet, ScrollView} from 'react-native'
import Button from '../components/Button';



const Item = ({route, navigation}) => {

    const cartArray = [{}];
    const [idNum, setIdNum] = useState(1);
    const {source, name, price, description} = route.params;
    const addToCart = () => {
        cartArray.push({source, name, price}),
        setIdNum(cartArray.length + 1)
    }
    return (
        <ScrollView style={styles.container}>
            <View style={styles.top}>
                <Button
                    title= "<-"
                    onPress={() => navigation.navigate("Menu")}
                />
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
                    <Text style={styles.descriptionText}>
                        {description}
                    </Text>
                    <Text>
                        {price}
                    </Text>
                </View>
                <Button
                    title="Add to Cart"
                    onPress={() => navigation.navigate("Cart", {
                        source: source,
                        name: name,
                        price: price,
                        description: description
                    }, addToCart)}
                />
            </View>
        </ScrollView>
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
        marginBottom: 50
    }, descriptionText: {
        fontSize: 12
    }
})

export default Item