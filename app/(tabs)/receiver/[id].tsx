import { View, Text } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams } from 'expo-router'

const DetailsPage = () => {
    const { id } = useLocalSearchParams();
  return (
    <View>
      <Stack.Screen options={{headerTitle : `Details For #"${id}`}} />
      <Text>Details for {id}</Text>
    </View>
  )
}

export default DetailsPage