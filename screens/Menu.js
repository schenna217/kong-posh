import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Searchbar } from 'react-native-paper';
import HeaderTabs from '../components/HeaderTabs';

export default function Menu(){
    return(
        <View style={styles.container}>
            <HeaderTabs style={styles.HeaderTabs}/>
            <Searchbar style={styles.searchBar} placeholder="Search"/>
            {/* Other content */}
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
  },
  searchBar: {
    marginTop: 20,
    backgroundColor: '#f2f2f2',
  },
  HeaderTabs: {
    marginTop: 40,
  },
});
