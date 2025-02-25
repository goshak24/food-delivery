import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import * as Icon from "react-native-feather";
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

import Categories from '../components/Categories';
import FeaturedRow from '../components/FeaturedRow';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" /> 
      
      <View style={styles.searchBarStyles}>
        <View style={styles.sBarItself}>
          <Icon.Search height={verticalScale(25)} width={verticalScale(25)} stroke="gray" />
          <TextInput placeholder='Search Restaurants' style={styles.searchText} />
          
          <View style={{flexDirection: 'row', alignItems: 'center', marginRight: 2, paddingLeft: 4, borderLeftWidth: 1, borderLeftColor: 'gray' }}>
            <Icon.MapPin style={styles.mapPin} height={verticalScale(20)} width={verticalScale(20)} stroke="gray" /> 
            <Text style={{color: 'gray'}}>London</Text>
          </View>
        </View>

        <View style={{padding: verticalScale(8), backgroundColor: 'teal', borderRadius: 50, marginLeft: 4}}> 
            <Icon.Sliders height={verticalScale(19)} width={verticalScale(19)} strokeWidth={2} stroke="white" /> 
        </View>
      </View>

      {/* Main Content Area */}
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 20}}>
        <Categories  /> 

        <FeaturedRow />
      </ScrollView>

    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white'
  }, 
  searchBarStyles: {
    flexDirection: 'row', 
    alignItems: 'center', 
    marginHorizontal: 2, 
    paddingHorizontal: 4, 
    paddingBottom: 2
  }, 
  sBarItself: {
    flexDirection: 'row', 
    flex: 1, padding: verticalScale(4), 
    alignItems: 'center', 
    borderRadius: 50, 
    borderWidth: 2, 
    borderColor: 'gray'
  }, 
  searchText: {
    flex: 1, 
    marginLeft: 2
  }
})