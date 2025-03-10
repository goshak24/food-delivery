import { Platform, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View, StatusBar, TouchableOpacity } from 'react-native';
import React, { useState, useEffect } from 'react';
import * as Icon from 'react-native-feather';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { LinearGradient } from 'expo-linear-gradient';
import Constants from 'expo-constants';

import { featuredRestaurants } from '../constants'; 

import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';
import FeaturedRowContainer from '../components/FeaturedRowContainer';
import { setFiltered } from '../components/helperFuncs'; 

const HomeScreen = () => {
  const [searchQuery, setSearchQuery] = useState(''); 
  const [filterQuery, setFilterQuery] = useState('');
  const [filteredRestaurants, setFilteredRestaurants] = useState(featuredRestaurants);

  useEffect(() => {
    setFilteredRestaurants(setFiltered(searchQuery || filterQuery)); 
  }, [searchQuery, filterQuery]);

  return (
    <View style={{ flex: 1, backgroundColor: '#F5E6C8' }}>
      <LinearGradient 
        colors={["#f5e6c8", "#f1dcb2", "#edd29d"]} 
        style={{ flex: 1 }}  
        start={{ x: 0, y: 0 }} 
        end={{ x: 1, y: 0}}
      >
        <StatusBar barStyle="dark-content" backgroundColor='#EDD29D' translucent />
        <SafeAreaView style={styles.container}>

          <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: verticalScale(8) }}>
            
            {/* Search Bar */}
            <View style={styles.searchBarStyles}>
              <View style={styles.sBarItself}>
                <Icon.Search height={verticalScale(25)} width={verticalScale(25)} stroke="gray" />
                <TextInput
                  placeholder="Search Restaurants"
                  style={styles.searchText}
                  value={searchQuery}
                  onChangeText={setSearchQuery} 
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
              <Categories onCategorySelect={(category) => setFilterQuery(category)} />

              {searchQuery || filterQuery ? (
                // Show search results
                <>
                  <Text style={{ alignSelf: 'center', marginTop: 10 }}>Search Results</Text>
                  <FeaturedRow restaurants={filteredRestaurants} />
                </>
              ) : (
                // Show default content
                <View style={{ marginTop: verticalScale(8) }}>
                  <FeaturedRowContainer title={"Best Rated"} />
                  <FeaturedRowContainer title={"Popular"} />
                  <FeaturedRowContainer title={"Closest"} />
                </View>
              )}

              {/* Show 'No Results' message if filteredRestaurants is empty */}
              {filteredRestaurants.length === 0 ? (
                <Text style={{ alignSelf: 'center', marginTop: 10 }}>No Results Available</Text>
              ) : null} 

            </ScrollView>
          </ScrollView>
        </SafeAreaView>
      </LinearGradient>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: Platform.OS === 'android' ? Constants.statusBarHeight : 0 
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
  seeAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D35400',
    paddingVertical: verticalScale(6),
    paddingHorizontal: scale(12),
    borderRadius: moderateScale(20),
    elevation: 3,
  } 
}); 