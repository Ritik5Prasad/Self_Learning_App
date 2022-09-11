import React from 'react'
import { View,Text,ScrollView,StyleSheet } from 'react-native'

function DoubtStack() {
  return (
    <ScrollView style={styles.container}>
      <Text>Hey</Text>
    </ScrollView>
  )
}

export default DoubtStack

const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'yellow'
    }
})