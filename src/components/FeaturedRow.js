import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

import { featuredRestaurants } from '../constants'
import RestaurantCard from './RestaurantCard'

const FeaturedRow = () => {
  return (
    <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{marginHorizontal: 20}}
    >
        {
            featuredRestaurants.map((restaurant, index) => {
                return (
                    <View key={index} style={{justifyContent: 'center', alignItems: 'center', marginRight: verticalScale(9), marginTop: verticalScale(8)}}>
                        <RestaurantCard title={restaurant.title} description={restaurant.description} 
                        category={restaurant.category} rating={restaurant.rating} location={restaurant.location}
                        image={restaurant.image} city={restaurant.city} /> 
                    </View> 
                )
            })
        }
    </ScrollView>
  )
}

export default FeaturedRow

const styles = StyleSheet.create({})