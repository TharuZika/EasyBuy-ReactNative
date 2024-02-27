import { View, Text } from 'react-native'
import React from 'react'
import TopCategories from '../components/TopCategories'
import HeroSection from '../components/HeroSection'
import FeaturedProducts from '../components/FeaturedProducts'

const Home = (prop: any) => {
  const nav = prop.navigation;
  return (
    <View>
      <HeroSection nav={nav}/>
      <TopCategories nav={nav}/>
      <FeaturedProducts nav={nav}/>
    </View>
  )
}

export default Home