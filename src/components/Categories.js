import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useState } from 'react'
import { testCategories } from '../constants'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const Categories = () => {
    const [selectedCat, setSelectedCat] = useState(''); 

    const onCatSelect = (key) => {
        setSelectedCat(key)
        if (key === selectedCat) {
          setSelectedCat('') 
        }
    }

    return (
    <View style={{marginTop: 4}}>
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={{overflow: 'visible'}}
        contentContainerStyle={{paddingHorizontal: verticalScale(6), marginBottom: verticalScale(8)}}
      >
        {
            testCategories.map((category, index) => {
                return (
                    <View key={index} style={{justifyContent: 'center', alignItems: 'center', marginRight: verticalScale(9), width: verticalScale(56), marginTop: verticalScale(6)}}>
                        <TouchableOpacity onPress={() => onCatSelect(index)} style={{width: verticalScale(55), height: verticalScale(55), padding: 4, borderRadius: 10, backgroundColor: selectedCat === index ? '#008080' : '#C4C4C4', alignItems: 'center'}}>
                            <Text style={{marginBottom: 2, color: selectedCat === index ? '#fff' : '#000'}}>{category.name}</Text>
                            <Image source={category.image} style={{width: verticalScale(56), height: verticalScale(35), borderBottomLeftRadius: 10, borderBottomRightRadius: 10, marginBottom: 2}} />
                        </TouchableOpacity>
                    </View>
                )
            })
        }
      </ScrollView>
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({})