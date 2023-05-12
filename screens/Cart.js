import React, { useContext, useState, useEffect } from 'react';
import { Image, View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import Button from '../components/Button';
import { Context } from '../Context';
const { width } = Dimensions.get('screen');
const cardWidth = width / 2 - 20;
import colors from '../config/colors';
import Item from './Item'
import RestaurantCard, { setDescription } from '../components/RestaurantCard'
import { useStripe } from '@stripe/stripe-react-native'

// Stripe Code for displaying Payment Element and collecting payment details

// // Other code for card styles and view


const Cart = ({ route, navigation }) => {
  // initialize context and totalPrice states using useContext and useState hooks
  const [context, setContext] = useContext(Context);
  const [totalPrice, setTotalPrice] = useState(0);

  // useEffect hook to update the totalPrice state based on the items in the context state
  useEffect(() => {
    let sum = 0;
    context.forEach(item => {
      sum += item.price;
    });
    setTotalPrice(sum);
  }, [context]);

  // clearCart function to clear both the context and totalPrice states
  const clearCart = () => {
    setContext([]);
    setTotalPrice(0);
  };

  // Code for Stripe Payment Page
// KEEP THIS
const stripe = useStripe();

const order = async (amount) => {
  try {
      const response = await fetch("https://web-production-4123.up.railway.app/api/carbon-back/order", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
          },
          body: JSON.stringify({ amount, uid: 'john@gmail.com' }),
      });
      const data = await response.json();
      console.log(data)
      const initSheet = await stripe.initPaymentSheet({
          paymentIntentClientSecret: data.clientSecret,
          merchantDisplayName: 'KongPosh'
      });

      console.log(initSheet)

      const presentSheet = await stripe.presentPaymentSheet();
  } catch (err) {
      console.log(err);
  }
};

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.headerText}>Welcome To Cart!</Text>
        {/* <Button title="Anything else?" onPress={() => navigation.navigate('Menu')} /> */}
        <View style={styles.clearButtonContainer}>
          <Button title="Clear Cart" onPress={clearCart} /> 
        </View>
        <Text style={styles.text}>Total amount:</Text>
        <Text style={styles.text2}>{totalPrice}</Text>
        <View>
          <View>
            {context.map(item => (
              <View style={styles.card} key={item.id}>
                <View style={{ alignItems: 'flex-start', top: 0 }}>
                  <Image source={item.source} style={{ height: 90, width: 100 }} />
                </View>
                <View style={{ marginHorizontal: 10, alignItems: 'center' }}>
                  <Text style={{ fontSize: 20, fontWeight: 'bold', alignItems: 'center' }}>{item.name}</Text>
                </View>
                <View style={{ marginHorizontal: 10, alignItems: 'center' }}>
                  <Text style={{ fontSize: 15, fontWeight: 'bold', alignItems: 'center' }}>{item.price}</Text>
                </View>
              </View>
            ))}
          </View>
        </View>
        <View style={styles.clearButtonContainer}>
          <Button title="Clear Cart" onPress={clearCart} /> 
        </View>
        <Button
              title='Checkout'
              onPress={() => order(200)} // PRICE HERE
            />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center'
  },
  headerText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginLeft: 60,
    marginTop: 60,
  },
  listText: {
    fontSize: 16,
    color: 'dodgerblue',
    fontWeight: 'bold',
    marginLeft: 180,
    marginTop: 130
  },
  text: {
    fontSize: 16,
    color: 'black',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  text2: {
    alignItems: 'baseline',
    fontSize: 20,
    color: colors.primary,
    fontWeight: 'bold',
    marginLeft: 10
  },
  card: {
    backgroundColor: 'white',
    flexDirection: 'row'
  },
  clearButtonContainer: {
    marginBottom: 20,
    marginHorizontal: 20
  },
});

export default Cart;
