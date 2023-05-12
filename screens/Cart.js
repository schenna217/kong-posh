import React, { useContext, useState, useEffect } from 'react';
import { Image, View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import Button from '../components/Button';
import { Context } from '../Context';
import colors from '../config/colors';
import Item from './Item'
import RestaurantCard, { setDescription } from '../components/RestaurantCard'
import { useStripe } from '@stripe/stripe-react-native'

// Stripe Code for displaying Payment Element and collecting payment details

// // Other code for card styles and view


const { width } = Dimensions.get('screen');
const cardWidth = width - 40;

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
    setTotalPrice("$" + sum); // format the sum variable to a fixed decimal point number with 2 digits after the decimal and prepend the "$" symbol
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
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.headerText}>Welcome to Cart!</Text>
      {/* <Button title="Anything else?" onPress={() => navigation.navigate('Menu')} /> */}
      <Button title="Clear Cart" onPress={clearCart} />
      <View style={styles.totalAmountContainer}>
        <Text style={styles.totalAmountText}>Total amount:</Text>
        <Text style={styles.totalAmount}>{totalPrice}</Text>
      </View>
      <View style={styles.itemsContainer}>
        {context.map(item => (
          <View style={styles.card} key={item.id}>
            <Image source={item.source} style={styles.cardImage} />
            <View style={styles.cardInfo}>
              <Text style={styles.cardTitle}>{item.name}</Text>
              <Text style={styles.cardPrice}>{item.price}</Text>
            </View>
          </View>
        ))}
      </View>
      <View style={styles.clearButtonContainer}>
        <Button
              title='Checkout'
              onPress={() => order(100)} // PRICE HERE
            />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
  backgroundColor: '#fff',
  alignItems: 'center',
  paddingTop: 60,
  paddingBottom: 20,
  },
  headerText: {
  fontSize: 30,
  fontWeight: 'bold',
  marginBottom: 20,
  },
  totalAmountContainer: {
  flexDirection: 'row',
  alignItems: 'center',
  marginBottom: 20,
  },
  totalAmountText: {
  fontSize: 16,
  color: 'dodgerblue',
  fontWeight: 'bold',
  marginRight: 10,
  },
  totalAmount: {
  fontSize: 20,
  color: 'red',
  fontWeight: 'bold',
  },
  itemsContainer: {
  width: '100%',
  flexDirection: 'column',
  alignItems: 'center',
  },
  card: {
  width: '90%',
  backgroundColor: 'white',
  borderRadius: 10,
  marginBottom: 20,
  shadowColor: colors.primary,
  shadowOffset: { width: 0, height: 3 },
  shadowOpacity: 0.5,
  shadowRadius: 5,
  elevation: 5,
  },
  cardImage: {
  height: 90,
  width: '100%',
  borderTopLeftRadius: 10,
  borderTopRightRadius: 10,
  },
  cardInfo: {
  padding: 10,
  },
  cardTitle: {
  fontSize: 16,
  fontWeight: 'bold',
  },
  cardPrice: {
  fontSize: 14,
  color: colors.primary,
  fontWeight: 'bold',
  },
  clearButtonContainer: {
  marginBottom: 20,
  marginHorizontal: 20,
  },
  });
  
  export default Cart;
