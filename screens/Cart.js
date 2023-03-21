import React from 'react'
import { View, Text, StyleSheet } from 'react-native'

const Cart = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                Welcome To Cart
            </Text>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
    text:{
        fontSize: 16,
        color: 'dodgerblue',
        fontWeight: 'bold',
    }
})

export default Cart