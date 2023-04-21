import React from 'react';
import { View, StyleSheet, ScrollView, FlatList, Dimensions, Image, Text, TouchableOpacity } from 'react-native';
import { Searchbar } from 'react-native-paper';
import HeaderTabs from '../components/HeaderTabs';
import colors from '../config/colors';
import { SafeAreaView } from 'react-native-safe-area-context';
const {width} = Dimensions.get("screen");
const cardWidth = width/2 - 20;
import Categories from '../components/Categories';
import Food from '../components/Food';

export default function Menu({navigation}){
    const[selectedCategoryIndex, setSelectedCategoryIndex] = React.useState(0);

    const CategoryList = () => {
      return (
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={style.categoryContainer}>
        {Categories.map((category, index)=>(
            <TouchableOpacity key={index} activeOpacity={0.8} onPress = {() => setSelectedCategoryIndex(index)}>
                <View 
                  style={{
                    backgroundColor:
                      selectedCategoryIndex==index
                      ? colors.primary: 'white',
                   ...style.categoryButton
                   }}>
                   <View style = {style.categoryBtnImageIcon}>
                      <Image 
                        source = {category.image}
                        style = {{height: 15, width: 15, resizeMode: 'cover'}}
                      />
                    </View>
                    <Text style={{fontSize: 15, fontWeight: 'bold', marginLeft: 10, color: selectedCategoryIndex == index ? 'white': 'black'}}>
                     {category.text}
                    </Text>
              </View>
            </TouchableOpacity>
            ))}
      </ScrollView>
      );
    };
    const Card = ({food}) => {
      return (
       <TouchableOpacity onPress={() => navigation.navigate('Item', {
         source: food.image,
         name: food.name,
         price: food.price
       })
       }>
        <View style ={style.card}>
          <View style = {{alignItems: 'center', top : -10}}>
            <Image source = {food.image} style = {{height: 120, width: 120}}/>
          </View>
          <View style = {{marginHorizontal: 10, alignItems: 'center'}}>
            <Text style={{fontSize: 20, fontWeight: 'bold', alignItems: 'center'}}>
                {food.name}
            </Text>
          </View>
          <View style = {{marginHorizontal: 10, alignItems: 'center'}}>
            <Text style={{fontSize: 15, fontWeight: 'bold', alignItems: 'center'}}>
                {food.price}
            </Text>
          </View>
        </View>
       </TouchableOpacity>
      );
    };
    return(
      <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
        <View style = {style.header}>
          <View>
            <View style = {{flexDirection: 'row'}}>
              <Text style={{fontSize: 28}}>
                Hello,
              </Text>
              <Text style={{fontSize: 28, fontWeight: 'bold', marginLeft: 10}}>
                User
              </Text>
            </View>
            <Text style={{marginTop: 5, fontSize: 22, color: colors.primary}}>
              What would you like to eat?
            </Text>
          </View>
        </View>
        <View style = {{marginTop: 40, flexDirection: 'row', paddingHorizontal: 20}}>
          <Searchbar style={style.searchBar} placeholder="Search"/>
        </View>
        <View><CategoryList/></View>
        <FlatList
          showsVerticalScrollIndicator={false}
          numColumns = {3}
          data={Food}
          renderItem={({item}) => <Card food = {item}/>}
        />
       </SafeAreaView>
    );
  };

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.primary,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  searchBar: {
    marginTop: 20,
    backgroundColor: '#f2f2f2',
  },
  header:{
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  HeaderTabs: {
    marginTop: 40,
  },
  card:{
    height: 220,
    width: cardWidth,
    marginHorizontal: 10,
    backgroundColor: colors.primary,
    marginBottom: 20,
    marginTop: 50,
    borderRadius: 15,
    elevation: 13,
    backgroundColor: 'white',
  },
  categoryContainer: {
    paddingVertical: 30,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  categoryButton: {
    height: 45, 
    width: 120,
    marginRight: 7,
    borderRadius: 25,
    alignItems: 'center',
    flexDirection: 'row',
  },
  categoryBtnImageIcon: {
      height: 35,
      width: 35,
      marginLeft: 5,
      borderRadius: 30,
      backgroundColor: 'white',
      justifyContent: 'center',
      alignItems: 'center',
  },
 


});
