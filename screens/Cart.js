import React from 'react'
import { Image, View, Text, StyleSheet, ScrollView } from 'react-native'
import Button from '../components/Button'
import Item from './Item'
import RestaurantCard, { setDescription } from '../components/RestaurantCard'

const Cart = ({navigation}) => {

    const Card = ({}) => {
      const {source, name, price, description} = route.params;
      return (
        <View style ={style.card}>
          <View style = {{alignItems: 'center', top : -10}}>
            <Image source = {source} style = {{height: 120, width: 120}}/>
          </View>
          <View style = {{marginHorizontal: 10, alignItems: 'center'}}>
            <Text style={{fontSize: 20, fontWeight: 'bold', alignItems: 'center'}}>
                {name}
            </Text>
          </View>
          <View style = {{marginHorizontal: 10, alignItems: 'center'}}>
            <Text style={{fontSize: 15, fontWeight: 'bold', alignItems: 'center'}}>
                {price}
            </Text>
          </View>
        </View>
      );
    };

    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>
                Welcome To Cart!
            </Text>
            <Button
              title='Anything else?'
              onPress={() => {navigation.navigate("Menu")}}
            />
            <Text style={styles.text}>
                Total amount:
            </Text>
            <Text style={styles.text2}>
                $0.00
            </Text>
            <ScrollView>
            
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