import React from 'react';
import { View, StyleSheet,ScrollView } from 'react-native';
import { Searchbar } from 'react-native-paper';
import HeaderTabs from '../components/HeaderTabs';
import RestaurantCard from '../components/RestaurantCard';

export default function Menu(){
    return(
      <View style={styles.container}>
                <HeaderTabs style={styles.HeaderTabs}/>
                <Searchbar style={styles.searchBar} placeholder="Search"/>
                {/* Other content */}
        <ScrollView Vertical>
            <View style={styles.container}>
              <RestaurantCard
                   picture = 'require(../assets/google.png)'
                   name = "Miheer's Treat"
                   description = "Item Description"
               />
               <RestaurantCard
                   picture = 'require(../assets/google.png)'
                   name = "Miheer's Treat"
                   description = "Item Description"
               />
               
            </View>
        </ScrollView>
        </View>
        
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  searchBar: {
    marginTop: 20,
    backgroundColor: '#f2f2f2',
  },
  HeaderTabs: {
    marginTop: 40,
  },
});
