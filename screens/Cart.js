import React, {useState, useEffect} from 'react'
import { Image, View, Text, StyleSheet, ScrollView, } from 'react-native'
import Button from '../components/Button'
import Item from './Item'
import RestaurantCard, { setDescription } from '../components/RestaurantCard'
import { useStripe } from '@stripe/stripe-react-native'

// Stripe Code for displaying Payment Element and collecting payment details

// // KEEP THIS
// const { initPaymentSheet, presentPaymentSheet, confirmPaymentSheetPayment, } = useStripe();
//   // const [loading, setLoading] = useState(false);

//   // const fetchPaymentSheetParams = async () => {
//   //   const response = await fetch(`${API_URL}/payment-sheet`, {
//   //     method: 'POST',
//   //     headers: {
//   //       'Content-Type': 'application/json',
//   //     },
//   //   });
//   //   const { paymentIntent, ephemeralKey, customer} = await response.json();

//   //   return {
//   //     paymentIntent,
//   //     ephemeralKey,
//   //     customer,
//   //   };
//   // };

//   // Need this?
//   const initializePaymentSheet = async () => {
//     const {
//       paymentIntent,
//       ephemeralKey,
//       customer,
//       publishableKey,
//     } = await fetchPaymentSheetParams();

//     const { error, paymentOption } = await initPaymentSheet({
//       merchantDisplayName: 'Kong Posh',
//       customerId: customer,
//       customerEphemeralKeySecret: ephemeralKey,
//       paymentIntentClientSecret: paymentIntent,
//       customFlow: true,
//       // Set `allowsDelayedPaymentMethods` to true if your business can handle payment
//       //methods that complete payment after a delay, like SEPA Debit and Sofort.
//       //allowsDelayedPaymentMethods: true,
//       // defaultBillingDetails: {
//       //   name: 'Jane Doe',
//       // }
//     });
//     if (!error) {
//       setLoading(true);
//     }
//   };

//   // KEEP THIS FOR PAYMENT W/OUT SERVER
//   const openPaymentSheet = async () => {
//     const { error, paymentOption, } = await presentPaymentSheet();

//     if (error) {
//       Alert.alert(`Error code: ${error.code}`, error.message);
//     } else {
//       // Add Code here for a confirmation screen???
//       Alert.alert('Success', 'Your order is confirmed!');
//     }
//   };

//   useEffect(() => {
//     initializePaymentSheet();
//   }, []);

//   KEEP THIS FOR PAYMENT W/OUT SERVER
//   const { error } = await confirmPaymentSheetPayment();
//     if (error) {
//       Alert.alert(`Error code: ${error.code}`, error.message);
//     } else {
//       Alert.alert(
//         'Success',
//         'Your order is confirmed!'
//       );
//     }


// // Other code for card styles and view


const Cart = ({navigation}) => {

// Code for Stripe Payment Page
// KEEP THIS
const stripe = useStripe();
  // const [loading, setLoading] = useState(false);

  // const fetchPaymentSheetParams = async () => {
  //   const response = await fetch(`${API_URL}/payment-sheet`, {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   });
  //   const { paymentIntent, ephemeralKey, customer} = await response.json();

  //   return {
  //     paymentIntent,
  //     ephemeralKey,
  //     customer,
  //   };
  // };

  // Need this?
  // const initializePaymentSheet = async () => {
  //   const {
  //     paymentIntent,
  //     ephemeralKey,
  //     customer,
  //     publishableKey,
  //   } = await fetchPaymentSheetParams();

  //   const { error, paymentOption } = await initPaymentSheet({
  //     merchantDisplayName: 'Kong Posh',
  //     customerId: customer,
  //     customerEphemeralKeySecret: ephemeralKey,
  //     paymentIntentClientSecret: paymentIntent,
  //     customFlow: true,
  //     // Set `allowsDelayedPaymentMethods` to true if your business can handle payment
  //     //methods that complete payment after a delay, like SEPA Debit and Sofort.
  //     //allowsDelayedPaymentMethods: true,
  //     // defaultBillingDetails: {
  //     //   name: 'Jane Doe',
  //     // }
  //   });
  //   if (!error) {
  //     setLoading(true);
  //   }
  // };

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

  // KEEP THIS FOR PAYMENT W/OUT SERVER
  // const { error } = await confirmPaymentSheetPayment();
  //   if (error) {
  //     Alert.alert(`Error code: ${error.code}`, error.message);
  //   } else {
  //     Alert.alert(
  //       'Success',
  //       'Your order is confirmed!'
  //     );
  //   }


// // Code for Styles and Views
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
            <Button
              title='Checkout'
              onPress={() => order(200)} // PRICE HERE
            />
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