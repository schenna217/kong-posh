import React, { useContext } from 'react'
import { Image, View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native'
import Button from '../components/Button'
import {Item} from './Item'
import Cartfxns, { cartSlice } from '../components/Cartfxns'
import Menu from './Menu'
import { Provider } from 'react-native-paper'
import store from '../Context'
import { FlatList } from 'react-native-gesture-handler'
import Food from '../components/Food'
import { Context } from '../Context'
const {width} = Dimensions.get("screen");
const cardWidth = width/2 - 20;
import colors from '../config/colors'



const Cart = ({route, navigation}) => {
   const [context, setContext] = useContext(Context);
   const sum = 0;
    return (
      <ScrollView>
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
                {sum}
            </Text>
            <View>
            <View>
            {context.map((item)=>(
              <View style ={styles.card}>
                <View style = {{alignItems: 'flex-start', top : 0}}>
                  <Image source = {item.source} style = {{height: 90 , width: 100}}/>
                </View>
                <View style = {{marginHorizontal: 10, alignItems: 'center'}}>
                  <Text style={{fontSize: 20, fontWeight: 'bold', alignItems: 'center'}}>
                      {item.name}
                  </Text>
                </View>
                <View style = {{marginHorizontal: 10, alignItems: 'center'}}>
                  <Text style={{fontSize: 15, fontWeight: 'bold', alignItems: 'center'}}>
                      {item.price}
                  </Text>
                </View>
              </View>
            ))}
            </View>
            </View>
        </View>
      </ScrollView>
    );
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
        
    },
    card:{
      backgroundColor: "white",
      flexDirection: 'row'
    }
})

export default Cart