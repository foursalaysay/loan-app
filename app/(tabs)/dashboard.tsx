import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'

const dashboard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
        <View style={styles.mainBox}>
          
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container : {
    flex  :1,
    alignItems : 'center',
    justifyContent : 'center',
    padding : 4,
    backgroundColor : '#F5FCFF'
  },
  title : {
    fontSize : 40,
    fontWeight : 600
  },
  mainBox : {
    width : '80%',
    height : '90%',
    alignItems : 'flex-start',
    justifyContent : 'center',
    gap : 5,
    borderColor : 'black'
  },
  smallBox : {
    width : '25%',
    height : '40%',
    borderColor : '#000000'
  },
  mediumBox : {
    width : '100%', 
    height : '40%'
  }
})


export default dashboard

