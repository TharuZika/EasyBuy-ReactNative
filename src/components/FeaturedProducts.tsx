import { View, Text, ScrollView, Image, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'

const FeaturedProducts = (prop: any) => {

    const featuredProducts: Items[] = [
        { id: 1, name: 'Product 1', image: 'https://rukminim2.flixcart.com/image/450/500/xif0q/shoe/7/z/r/8-white-leaf-8-urbanbox-white-black-original-imagvgf4cuzs2hrw.jpeg?q=90&crop=true', price: 25 },
        { id: 2, name: 'Product 2', image: 'https://objectstorage.ap-mumbai-1.oraclecloud.com/n/softlogicbicloud/b/cdn/o/category-images/60b087b326012.png', price: 30 },
        { id: 3, name: 'Product 3', image: 'https://assets.ajio.com/medias/sys_master/root/20210716/CEMd/60f090d6aeb269a9e3445724/-473Wx593H-460743704-lightblue-MODEL.jpg', price: 20 },
        { id: 4, name: 'Product 4', image: 'https://objectstorage.ap-mumbai-1.oraclecloud.com/n/softlogicbicloud/b/cdn/o/category-images/60b087b326012.png', price: 20 },
        { id: 5, name: 'Product 5', image: 'https://via.placeholder.com/150', price: 20 },
        { id: 6, name: 'Product 6', image: 'https://via.placeholder.com/150', price: 20 },
        { id: 7, name: 'Product 7', image: 'https://via.placeholder.com/150', price: 20 },
      ];

      const renderProduct = (product: Items) => (
        <TouchableOpacity key={product.id} style={styles.productContainer}>
          <Image source={{ uri: product.image }} style={styles.productImage} />
          <Text style={styles.productName}>{product.name}</Text>
          <Text style={styles.productPrice}>${product.price}</Text>
        </TouchableOpacity>
      );

  return (
    <View style={styles.sectionContainer}>
        <Text style={styles.sectionTitle}>Featured Products</Text>
        <ScrollView horizontal={true}>
          {featuredProducts.map((product) => renderProduct(product))}
        </ScrollView>
      </View>
  )
}

export default FeaturedProducts;

const styles = StyleSheet.create({
    sectionContainer: {
      padding: 16,
    },
    sectionTitle: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 10,
    },
    productContainer: {
      marginRight: 10,
    },
    productImage: {
      width: 150,
      height: 150,
      borderRadius: 10,
    },
    productName: {
      fontSize: 16,
      marginTop: 5,
    },
    productPrice: {
      fontSize: 14,
      color: 'green',
    },
  });