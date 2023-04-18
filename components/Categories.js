import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

const Categories = [
  {
    id: 1,
    image: require('../assets/images/coffee.png'),
    text: 'Drinks',
  },
  {
    id: 2,
    image: require('../assets/images/fast-food.png'),
    text: 'Meals',
  },
  {
    id: 3,
    image: require('../assets/images/bread.png'),
    text: 'Snacks',
  },
  {
    id: 4,
    image: require('../assets/images/desserts.png'),
    text: 'Desserts',
  },
];

export default Categories;