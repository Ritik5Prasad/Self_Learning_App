import React from 'react'
import { View,Text,ScrollView,StyleSheet } from 'react-native'

function HomeStack() {
  return (
    <ScrollView style={styles.container}>
      <Text>Hey</Text>
    </ScrollView>
  )
}

export default HomeStack

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFC0C7'
    }
})