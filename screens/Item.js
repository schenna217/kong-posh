import React, { useState, useContext } from 'react'
import { View, Image, ImageBackground, Text, StyleSheet, ScrollView} from 'react-native'
import Button from '../components/Button';
import { Context } from '../Context';
import { Favs } from '../Context'
import { TouchableHighlight } from 'react-native-gesture-handler';
import { FontAwesome5 } from '@expo/vector-icons';

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
                    title= "Back"
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
                        ${price}
                    </Text>
                </View>
                {(context.some(e => e['name'] === item.name)) ? (
                     <Button
                        title="Remove from Cart"
                        onPress={() => setContext(context.filter((x) => x.name !== item.name))}
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
        width: 200,
        marginTop: 50
    }, top: {
        marginLeft: 5,
        paddingTop: 30,
        alignItems: 'flex-start'
    }, bottom: {
        alignItems: 'center'
    }, title: {
        marginTop: 40,
        fontSize: 25
    }, details: {
        alignItems: 'center',
        marginBottom: 50,
        marginLeft: 20,
        marginRight: 20,
    }, descriptionText: {
        fontSize: 12,
        paddingHorizontal: 20,
    }
})

export default Item;