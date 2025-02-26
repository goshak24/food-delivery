import { Platform, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import * as Icon from 'react-native-feather';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

import { testCategories, featuredRestaurants } from '../constants';

import Constants from 'expo-constants'; 

import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';

const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredRestaurants, setFilteredRestaurants] = useState(featuredRestaurants); 

  const handleSearch = (query) => {
    setSearchQuery(query);
    if (query) {
      const filtered = featuredRestaurants.filter(
        (restaurant) =>
          restaurant.title.toLowerCase().includes(query.toLowerCase()) ||
          restaurant.description.toLowerCase().includes(query.toLowerCase()) ||
          restaurant.category.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredRestaurants(filtered);
    } else {
      setFilteredRestaurants(featuredRestaurants);
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: '#F5E6C8'}}>
      <StatusBar barStyle="dark-content" backgroundColor='#F5E6C8' />
      <SafeAreaView style={styles.container}>
          <ScrollView showsVerticalScrollIndicator={false} style={{}}>
          {/* Search Bar */}
          <View style={styles.searchBarStyles}>
            <View style={styles.sBarItself}>
              <Icon.Search height={verticalScale(25)} width={verticalScale(25)} stroke="gray" />
              <TextInput
                placeholder="Search Restaurants"
                style={styles.searchText}
                value={searchQuery}
                onChangeText={handleSearch}
              />

              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginRight: 2,
                  paddingLeft: 4,
                  borderLeftWidth: 2,
                  borderLeftColor: 'gray',
                }}
              >
                <Icon.MapPin
                  style={styles.mapPin}
                  height={verticalScale(20)}
                  width={verticalScale(20)}
                  stroke="gray"
                />
                <Text style={{ color: 'gray' }}>London</Text>
              </View>
            </View>

            <View
              style={{
                padding: verticalScale(13),
                backgroundColor: 'teal',
                borderRadius: 50,
                marginLeft: 4,
              }}
            >
              <Icon.Sliders
                height={verticalScale(20)}
                width={verticalScale(20)}
                strokeWidth={2}
                stroke="white"
              />
            </View>
          </View>

          {/* Main Content Area */}
          <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ paddingBottom: 20 }}>
            <Categories />

            {searchQuery ? (
              // Show search results
              <>
                <Text style={{ alignSelf: 'center', marginTop: 10 }}>Search Results</Text>
                <FeaturedRow restaurants={filteredRestaurants} />
              </>
            ) : (
              // Show default content
              <>
                <Text style={{ alignSelf: 'center', marginTop: 10 }}>Best Rated</Text>
                <FeaturedRow restaurants={featuredRestaurants} />
                <Text style={{ alignSelf: 'center' }}>Up and Coming</Text>
                <FeaturedRow restaurants={featuredRestaurants} />
                <Text style={{ alignSelf: 'center' }}>Closest</Text>
                <FeaturedRow restaurants={featuredRestaurants} />
              </>
            )}
          </ScrollView>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5E6C8',
    marginTop: Platform.OS === 'android' ? Constants.statusBarHeight-verticalScale(3) : 0 
  },
  searchBarStyles: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 2,
    paddingHorizontal: 4,
    paddingBottom: 2
  },
  sBarItself: {
    flexDirection: 'row', backgroundColor: 'white', 
    flex: 1,
    padding: verticalScale(4),
    alignItems: 'center',
    borderRadius: 50,
    borderWidth: 2,
    borderColor: 'gray',
  },
  searchText: {
    flex: 1,
    marginLeft: 2
  },
}); 