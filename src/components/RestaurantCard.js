import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import * as Icon from "react-native-feather";

const RestaurantCard = ({ title, description, rating, category, location, image, city }) => {
    return (
        <View style={styles.cardContainer}>
            {/* Restaurant Title */}
            <Text style={styles.title}>{title}</Text>

            {/* Image */}
            <Image source={image} style={styles.image} />

            {/* Details Section */}
            <View style={styles.detailsContainer}>
                {/* Rating */}
                <View style={styles.detailItem}>
                    <Icon.Star width={moderateScale(15)} height={moderateScale(15)} fill="yellow" stroke="black" />
                    <Text style={styles.detailText}>{rating}</Text>
                </View>

                {/* Category */}
                <View style={styles.detailItem}>
                    <Text style={styles.detailText}>{category}</Text>
                </View>

                {/* City */}
                <View style={styles.detailItem}>
                    <Icon.MapPin width={moderateScale(14)} height={moderateScale(14)} stroke="white" />
                    <Text style={styles.detailText}>{city}</Text>
                </View>
            </View>
        </View>
    );
};

export default RestaurantCard;

const styles = StyleSheet.create({
    cardContainer: {
        padding: moderateScale(6),
        alignItems: 'center', 
        backgroundColor: '#FFA07A', 
        borderRadius: moderateScale(8),
        shadowColor: "#000",
        overflow: 'hidden', 
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3, 
        marginBottom: verticalScale(10),
    },
    title: {
        fontSize: moderateScale(14),
        fontWeight: 'bold',
        marginBottom: verticalScale(4),
        textAlign: 'center',
        color: 'white' 
    },
    image: {
        width: verticalScale(110),
        height: verticalScale(80),
        borderRadius: moderateScale(8),
        marginBottom: verticalScale(6),
    },
    detailsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
        paddingHorizontal: scale(5),
    },
    detailItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: moderateScale(4),
    },
    detailText: {
        fontSize: moderateScale(12),
        color: 'white',
    },
}); 