import { SafeAreaView, StyleSheet, Text, View, Image, TouchableOpacity, StatusBar } from 'react-native';
import React, { useEffect } from 'react';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import { Feather } from '@expo/vector-icons';  

import { useNavigation } from '@react-navigation/native';

import FeaturedRow from '../components/FeaturedRow'; 
import { featuredRestaurants } from '../constants';

const RestaurantScreen = ({ route }) => {
  const { title, description, rating, category, location, image, city } = route.params;
  const navigation = useNavigation(); 

  useEffect(() => {
    StatusBar.setHidden(true, 'fade'); // Hide the status bar completely
  }, []);

  return (
    <View style={styles.container}>
      {/* Background Image Covers Status Bar */}
      <Image source={typeof image === 'string' ? { uri: image } : image} style={styles.image} />

      {/* Back Button */}
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Feather name="arrow-left" size={moderateScale(24)} color="white" />
        </TouchableOpacity>
      
      <SafeAreaView style={styles.detailsContainer}>

        {/* Header (Title & View Menu Button) */}
        <View style={styles.headerRow}>
          <Text style={styles.title}>{title}</Text>

          <TouchableOpacity style={styles.menuButton} onPress={() => console.log('View Menu Pressed')}>
            <Text style={styles.menuButtonText}>View Menu</Text>
            <Feather name="chevron-right" size={moderateScale(18)} color="white" />
          </TouchableOpacity>
        </View>

        {/* Ratings & Category */}
        <View style={styles.row}>
          <Feather name="star" size={moderateScale(20)} fill="yellow" stroke="black" />
          <Text style={styles.rating}>{rating}</Text>
          <Text style={styles.category}> • {category}</Text>
        </View>

        {/* Location */}
        <View style={styles.row}>
          <Feather name="map-pin" size={moderateScale(18)} color="red" />
          <Text style={styles.location}>{location}, {city}</Text>
        </View>

        {/* Description */}
        <Text style={styles.description}>{description}</Text>

        {/* Similar Restaurants Section */}
        <Text style={styles.similarTitle}>Similar Restaurants</Text>
        <View style={styles.featuredContainer}>
          <FeaturedRow restaurants={featuredRestaurants} /> 
        </View>

        

      </SafeAreaView>
    </View>
  );
};

export default RestaurantScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5E6C8',
  },
  image: {
    width: '100%',
    height: verticalScale(300), 
    position: 'absolute', 
    top: 0,
    left: 0,
    right: 0,
  },
  detailsContainer: {
    marginTop: verticalScale(300), 
    padding: verticalScale(15),
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: moderateScale(24),
    fontWeight: 'bold',
    color: '#333',
    width: '60%',
  },
  menuButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D35400',
    paddingVertical: verticalScale(8),
    paddingHorizontal: scale(12),
    borderRadius: moderateScale(20),
    elevation: 3,
  },
  menuButtonText: {
    fontSize: moderateScale(14),
    fontWeight: 'bold',
    color: 'white',
    marginRight: moderateScale(5),
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: verticalScale(5),
  },
  rating: {
    fontSize: moderateScale(16),
    fontWeight: 'bold',
    color: '#333',
    marginLeft: moderateScale(5),
  },
  category: {
    fontSize: moderateScale(16),
    color: '#666',
  },
  location: {
    fontSize: moderateScale(16),
    color: '#444',
    marginLeft: moderateScale(5),
  },
  description: {
    fontSize: moderateScale(14),
    color: '#555',
    marginTop: verticalScale(10),
    lineHeight: moderateScale(20),
    marginBottom: verticalScale(25),
  },
  similarTitle: {
    fontSize: moderateScale(18),
    fontWeight: 'bold',
    color: '#333',
    marginBottom: verticalScale(5),
  },
  featuredContainer: {
    marginHorizontal: verticalScale(-10),
    padding: verticalScale(4),
  },
  backButton: {
    position: 'absolute',
    top: verticalScale(40),
    left: scale(10),
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: moderateScale(10),
    borderRadius: moderateScale(50),
  },
}); 