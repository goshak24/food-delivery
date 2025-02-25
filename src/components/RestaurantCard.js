import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import * as Icon from "react-native-feather";

const RestaurantCard = ({ title, description, rating, category, location, image, city }) => {
    return (
        <View style={styles.cardContainer}>
            {/* Image */}
            <Image source={image} style={styles.image} />

            <View style={{padding: moderateScale(8)}}>

                {/* Restaurant Title */}
                <Text style={styles.title}>{title}</Text>

                {/* Details Section */}
                <View style={styles.detailsContainer}>
                    {/* Rating */}
                    <View style={styles.detailItem}>
                        <Icon.Star width={moderateScale(14)} height={moderateScale(14)} fill="yellow" stroke="black" />
                        <Text style={styles.detailText}>{rating}</Text>
                    </View>

                    {/* Category */}
                    <View style={styles.detailItem}>
                        <Text style={styles.detailText}>{category}</Text>
                    </View>

                    {/* City */}
                    <View style={styles.detailItem}>
                        <Icon.MapPin width={moderateScale(13)} height={moderateScale(13)} stroke="white" />
                        <Text style={styles.detailText}>{city}</Text>
                    </View>
                </View>
            </View>
        </View>
    );
};

export default RestaurantCard;

const styles = StyleSheet.create({
    cardContainer: {
        alignItems: 'center', 
        backgroundColor: '#FFA07A', 
        borderRadius: moderateScale(10),
        shadowColor: "#000",
        overflow: 'hidden', 
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3, 
        width: scale(140), 
    },
    title: {
        fontSize: moderateScale(14),
        fontWeight: 'bold',
        marginBottom: verticalScale(5),
        textAlign: 'center',
        color: 'white',
    },
    image: {
        width: scale(140), 
        height: verticalScale(80),
        borderTopLeftRadius: moderateScale(8), 
        borderTopRightRadius: moderateScale(8) 
    },
    detailsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center', 
        width: '100%',
        paddingHorizontal: scale(5),
        gap: scale(8), 
    },
    detailItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    detailText: {
        fontSize: moderateScale(13), 
        color: 'white',
        marginLeft: verticalScale(3)
    },
}); 