import React from 'react'
import { View,Text,ScrollView,StyleSheet } from 'react-native'

function BookStack() {
  return (
    <ScrollView style={styles.container}>
      <Text>Hey</Text>
    </ScrollView>
  )
}

export default BookStack

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FF7128'
    }
})