import React from 'react';
import { StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#A6A9BC',
    paddingTop: Platform.OS === 'android' ? 25 : 0
},
});
