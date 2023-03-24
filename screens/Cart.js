import React from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import Button from '../components/Button'
import Item from './Item'

const Cart = () => {

    const names = [
        {name: 'Item 1', key: 1},
        {name: 'Item 2', key: 2},
        {name: 'Item 3', key: 3},
        {name: 'Item 4', key: 4},
        {name: 'Item 5', key: 5},
        {name: 'Item 6', key: 6},
        {name: 'Item 7', key: 7},
        {name: 'Item 8', key: 8},
        {name: 'Item 9', key: 9},
        {name: 'Item 10', key: 10},
        {name: 'Item 11', key: 11},
        {name: 'Item 12', key: 12},
        {name: 'Item 13', key: 13},
        {name: 'Item 14', key: 14},
        {name: 'Item 15', key: 15},
        {name: 'Item 16', key: 16}
    
    ];


    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>
                Welcome To Cart!
            </Text>
            <Text style={styles.text}>
                Total amount:
            </Text>
            <Text style={styles.text2}>
                $$$$$$$
            </Text>
            <ScrollView>
                {names.map( name => {
                    return(
                        <View key={ name.key } >
                            <Text style={styles.listText}>{name.name}</Text>
                        </View>
                    );
                })}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center'
      },
    headerText:{
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: 75,
        marginTop: 30,
    },
    listText:{
        fontSize: 16,
        color: 'dodgerblue',
        fontWeight: 'bold',
        marginLeft: 180,
        marginTop: 130,
    },
    text:{
        fontSize: 16,
        color: 'dodgerblue',
        fontWeight: 'bold',
        marginLeft: 10,
        marginTop: 40,
    },
    text2:{
        alignItems: 'baseline',
        fontSize: 20,
        color: 'red',
        fontWeight: 'bold',
        marginLeft: 10,
        
    }
})

export default Cart