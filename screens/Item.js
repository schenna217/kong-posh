import React, { useState, useContext } from 'react'
import { View, Image, ImageBackground, Text, StyleSheet, ScrollView} from 'react-native'
import Button from '../components/Button';
import { Context } from '../Context';


const Item = ({route, navigation}) => {

    const [context, setContext] = useContext(Context)
    const {source, name, price, description} = route.params;
    
   
    console.log("cart items", context)
    const item = {
        source: source,
        name: name,
        price: price,
        description: description,
    };

    
    
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
                {context.includes(item) ? (
                     <Button
                        title="Remove from Cart"
                        onPress={() => setContext(context.filter((x) => x.description !== item.description))}
                 />
                ):(
                     <Button
                        title="Add to Cart"
                        onPress={() => setContext([...context,item])}
                />
                )}
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
        fontSize: 25
    }, details: {
        alignItems: 'center',
        marginBottom: 50
    }, descriptionText: {
        fontSize: 12
    }
})

export default Item