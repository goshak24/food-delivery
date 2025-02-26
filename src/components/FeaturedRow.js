import { StyleSheet, Text, View, ScrollView } from 'react-native';
import React from 'react';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import RestaurantCard from './RestaurantCard';

const FeaturedRow = ({ restaurants }) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ marginHorizontal: verticalScale(6), marginBottom: verticalScale(8) }}
    >
      {restaurants.map((restaurant, index) => (
        <View
          key={index}
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginRight: verticalScale(10),
            marginTop: verticalScale(4),
          }}
        >
          <RestaurantCard
            title={restaurant.title}
            description={restaurant.description}
            category={restaurant.category}
            rating={restaurant.rating}
            location={restaurant.location}
            image={restaurant.image}
            city={restaurant.city}
          />
        </View>
      ))}
    </ScrollView>
  );
};

export default FeaturedRow;

const styles = StyleSheet.create({});