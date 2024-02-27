import React from 'react';
import { View, FlatList, Text, TouchableOpacity, Image } from 'react-native';

// Define sample categories data
const categories = [
  { id: 1, name: 'Category 1', image: 'https://via.placeholder.com/150', price: 10 },
  { id: 2, name: 'Category 2', image: 'https://via.placeholder.com/150', price: 20 },
  { id: 3, name: 'Category 3', image: 'https://via.placeholder.com/150', price: 30 },
  { id: 4, name: 'Category 4', image: 'https://via.placeholder.com/150', price: 40 },
];

const TopCategories = (prop: any) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity key={item.id} onPress={() => {prop.nav.navigate('Products')}}>
      <View style={{ margin: 10 }}>
        <Image source={{ uri: item.image }} style={{ width: 50, height: 50 }} />
        <Text style={{ textAlign: 'center' }}>{item.name}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={{ padding: 16 }}>
      <Text style={{ fontSize: 18 }}>Top Categories</Text>
      <FlatList
        data={categories}
        horizontal={true}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
      <TouchableOpacity style={{ padding: 10, marginTop: 10 }} onPress={() => {prop.nav.navigate("Products")}}>
        <Text style={{ textAlign: 'center' }}>See all ></Text>
      </TouchableOpacity>
    </View>
  );
};

export default TopCategories;