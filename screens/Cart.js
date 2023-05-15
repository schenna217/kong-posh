import React, { useContext, useState, useEffect } from 'react';
import { Image, View, Text, StyleSheet, ScrollView, Dimensions } from 'react-native';
import Button from '../components/Button';
import { Context } from '../Context';
import colors from '../config/colors';
import Item from './Item'
import RestaurantCard, { setDescription } from '../components/RestaurantCard'
import { useStripe } from '@stripe/stripe-react-native'

const { width } = Dimensions.get('screen');
const cardWidth = width / 2 - 20;

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
const stripe = useStripe();

const order = async (amount) => {
  try{

      const response = await fetch("https://web-production-4123.up.railway.app/api/carbon-back/order", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount, uid: 'john@gmail.com'
        }),
      });
      const data = await response.json();
      const initSheet = await stripe.initPaymentSheet({
        paymentIntentClientSecret: data.clientSecret,
        merchantDisplayName: 'KongPosh'
    });
    const presentSheet = await stripe.presentPaymentSheet();
  } catch (err) {
    console.log(err);  }
  };

// Code for the buttons and view
  return (
    <View style={styles.container}>
      <ScrollView>
        <Text style={styles.headerText}>Welcome to Cart!</Text>
        <Button title="Anything else?" onPress={() => navigation.navigate('Menu')} />
        <View style={styles.totalAmountContainer}>
          <Text style={styles.totalAmountText}>Total amount:</Text>
          <Text style={styles.totalAmount}>${totalPrice}</Text>
        </View>
        <View style={styles.itemsContainer}>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {context.map(item => (
              <View style={styles.card} key={item.id}>
                <Image source={item.source} style={styles.cardImage} />
                <View style={styles.cardInfo}>
                  <Text style={styles.cardTitle}>{item.name}</Text>
                  <Text style={styles.cardPrice}>{item.price}</Text>
                </View>
              </View>
            ))}
          </ScrollView>
        </View>
        <View style={styles.clearButtonContainer}>
          <Button title="Clear Cart" onPress={clearCart} />
        </View>
        <View style={styles.paymentContainer}>
          <Text style={styles.paymentText}>Payment</Text>
          <View style={styles.paymentButtonContainer}>
            <Button title="Pay with Stripe" onPress={() => order(totalPrice)} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
container: {
alignItems: 'center',
paddingVertical: 20,
},
headerText: {
fontSize: 24,
fontWeight: 'bold',
marginBottom: 20,
},
totalAmountContainer: {
flexDirection: 'row',
alignItems: 'center',
marginBottom: 20,
},
totalAmountText: {
fontSize: 18,
marginRight: 10,
},
totalAmount: {
fontSize: 18,
fontWeight: 'bold',
},
itemsContainer: {
marginBottom: 20,
},
card: {
backgroundColor: colors.white,
borderRadius: 10,
marginHorizontal: 10,
marginBottom: 20,
width: cardWidth,
},
cardImage: {
height: 100,
borderTopLeftRadius: 10,
borderTopRightRadius: 10,
},
cardInfo: {
padding: 10,
},
cardTitle: {
fontSize: 16,
fontWeight: 'bold',
marginBottom: 5,
},
cardPrice: {
fontSize: 14,
color: colors.grey,
},
clearButtonContainer: {
marginBottom: 20,
},
paymentContainer: {
alignItems: 'center',
},
paymentText: {
fontSize: 20,
fontWeight: 'bold',
marginBottom: 10,
},
paymentButtonContainer: {
marginTop: 10,
},
});

export default Cart;
