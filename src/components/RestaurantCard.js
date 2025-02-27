import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';
import * as Icon from "react-native-feather";
import { useNavigation } from '@react-navigation/native';

const RestaurantCard = ({ title, description, rating, category, location, image, city }) => {
    const navigation = useNavigation();

    const handleSelect = () => {
        navigation.navigate("Restaurant", { title, description, rating, category, location, image, city });
    };

    return (
        <TouchableOpacity onPress={handleSelect} style={styles.cardContainer}>
            {/* Image */}
            <Image source={image} style={styles.image} />

            {/* Content */}
            <View style={styles.contentContainer}>
                {/* Restaurant Title */}
                <Text style={styles.title} numberOfLines={1}>{title}</Text>

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
                        <Icon.MapPin width={moderateScale(14)} height={moderateScale(14)} stroke="white" />
                        <Text style={styles.detailText}>{city}</Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default RestaurantCard;

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: '#E07A5F',
        borderRadius: moderateScale(10),
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
        width: verticalScale(188),  
        maxWidth: scale(240),  
        alignSelf: 'center',
        overflow: 'hidden',
        marginVertical: verticalScale(8),
        marginBottom: verticalScale(8) 
    },
    image: {
        width: '100%',
        height: verticalScale(110), 
        borderTopLeftRadius: moderateScale(10),
        borderTopRightRadius: moderateScale(10),
    },
    contentContainer: {
        paddingVertical: verticalScale(8),
        paddingHorizontal: moderateScale(10),
        alignItems: 'center',
    },
    title: {
        fontSize: moderateScale(16),
        fontWeight: 'bold',
        color: 'white',
        textAlign: 'center',
    },
    detailsContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: verticalScale(4),
        gap: scale(10),
    },
    detailItem: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: scale(4),
    },
    detailText: {
        fontSize: moderateScale(14),
        color: 'white',
    },
}); 