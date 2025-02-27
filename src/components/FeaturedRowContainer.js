import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import FeaturedRow from './FeaturedRow'

import { featuredRestaurants } from '../constants'
import { scale, verticalScale, moderateScale } from 'react-native-size-matters';

const FeaturedRowContainer = ({ title }) => {
  return (
    <>
      <View style={{ alignItems: 'center', width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
        <Text style={{ marginLeft: 10, alignSelf: 'flex-start', marginTop: 5, alignSelf: 'center', fontFamily: 'Roboto-Reg', fontSize: verticalScale(18) }}>{title}</Text>
        <TouchableOpacity style={[{ marginRight: 10, alignSelf: 'flex-start', marginTop: 5 }, styles.seeAllButton]}>
          <Text style={{ color: '#fff' }}>See All</Text>
        </TouchableOpacity>
      </View>
      <FeaturedRow restaurants={featuredRestaurants} />
    </>
  )
}

export default FeaturedRowContainer

const styles = StyleSheet.create({
  seeAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#D35400',
    paddingVertical: verticalScale(6),
    paddingHorizontal: scale(12),
    borderRadius: moderateScale(20),
    elevation: 3,
  }
}) 