import { View, Text } from 'react-native'
import React from 'react'
import { Double } from 'react-native/Libraries/Types/CodegenTypes'


interface transactionInfo {
  transactionId : String,
  sender : String,
  receiver : String,
  amount : number,
  terms? : number,
  balance: number, 
}

const transaction = () => {


  return (
    <View>
      <Text>transaction</Text>
    </View>
  )
}

export default transaction