import {React , useState} from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';





const RestaurantCard = ({picture, name, description}) => {
    return (
        <View style={styles.cardContainer}>
           <Image
             style={styles.imageStyle}
             source={picture}
           />
          <View style={styles.infoStyle}>
           <Text style={styles.titleStyle}>
             {name}
           </Text>
           <Text>
             {description}
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
        height: 300,
        borderRadius: 20,
        marginHorizontal: 10,
        justifyContent: 'center',
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
        height: 230,
        width: deviceWidth - 25,
        borderTopLeftRadius: 20,
        marginHorizontal: 10,
        borderTopRightRadius: radius,
        borderTopRightRadius: radius,
        opacity: 0.9,
        alignSelf: 'center'
    },
    titleStyle: {
        fontSize: 20,
        fontWeight: '800',
        color: 'white',
    },
    categoryStyle: {
        fontWeight: '200',
    },
    infoStyle: {
        marginHorizontal: 10,
        marginVertical: 5,
    },
});


export default RestaurantCard;

