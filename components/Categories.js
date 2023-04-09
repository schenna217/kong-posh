import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

const items = [
  {
    image: require('../assets/images/coffee.png'),
    text: 'Drinks',
  },
  {
    image: require('../assets/images/fast-food.png'),
    text: 'Meals',
  },
  {
    image: require('../assets/images/bread.png'),
    text: 'Bakery',
  },
  {
    image: require('../assets/images/desserts.png'),
    text: 'Desserts',
  },
];

const Categories = () => {
  return (
    <ScrollView horizontal>
      
      <Image
        source={items[0].image}
        style={{
          width: 50,
          height: 40,
          resizeMode: 'contain',
        }}
      />
      <Text>{items[0].text}</Text>

      <Image
        source={items[1].image}
        style={{
          width: 50,
          height: 40,
          resizeMode: 'contain',
        }}
      />
      <Text>{items[1].text}</Text>

      <Image
        source={items[2].image}
        style={{
          width: 50,
          height: 40,
          resizeMode: 'contain',
        }}
      />
      <Text>{items[2].text}</Text>

      <Image
        source={items[3].image}
        style={{
          width: 60,
          height: 40,
          resizeMode: 'contain',
        }}
      />
      <Text>{items[3].text}</Text>
    </ScrollView>
  );
};

export default Categories;