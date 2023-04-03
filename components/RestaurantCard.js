import React from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';




const RestarauntCard = () => {
    return (
        <View style={styles.cardContainer}>
           <Image
             style={styles.imageStyle}
             source={require('../assets/adaptive-icon.png')}
           />
          <View style={styles.infoStyle}>
           <Text style={styles.titleStyle}>
             Goat Curry
           </Text>
           <Text>
             Bakery, Pastries, Cafe
           </Text>
          </View>
        </View>
    );
};


const deviceWidth = Math.round(Dimensions.get('window').width);
const radius = 20;
const styles = StyleSheet.create({
    cardContainer: {
        width: deviceWidth - 25,
        backgroundColor: '#FD9163',
        height: 200,
        borderRadius: 20,


        shadowColor: '#000',
        shadowOffset: {
            width: 5,
            height: 5,
        },
        shadowOpacity: 0.75,
        shadowRadius: 5,
        elevation: 9,
    },
    imageStyle: {
        height: 130,
        width: deviceWidth - 25,
        borderTopLeftRadius: 20,
        borderTopRightRadius: radius,
        borderTopRightRadius: radius,
        opacity: 0.9,
        alignContent: 'center',
        alignSelf: 'center'
    },
    titleStyle: {
        fontSize: 20,
        fontWeight: '800',
    },
    categoryStyle: {
        fontWeight: '200',
    },
    infoStyle: {
        marginHorizontal: 10,
        marginVertical: 5,
    },
});


export default RestarauntCard;

