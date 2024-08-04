import { View, Text } from 'react-native'
import React from 'react'
import { Float } from 'react-native/Libraries/Types/CodegenTypes'

interface PersonType {
  name : String,
  age : Float
}



const person : PersonType = 
  {
      name : "John Kyle",
      age : 23
  };

const profile = () => {

  const {name, age }= person;

  return (
    <View>
      <Text>profile</Text>
      <Text>{name}</Text>
      <Text></Text>
    </View>
  )
}

export default profile