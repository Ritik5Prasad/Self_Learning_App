import React from 'react'
import {View,Text,TouchableOpacity} from 'react-native'
function CButton({
     title,
     btnColor,
     color,
     btnTextColor,
     btnBorder,
     ...props
}) {
  return (
  <View style={{height:50}}>
    <TouchableOpacity {...props} style={{
        borderColor:btnBorder,
        backgroundColor:btnColor,
        width:200,
        justifyContent:'center',
        height:40,
        borderRadius:20,
        elevation:5
    }}>
        <Text style={{
            fontSize:20,
            fontFamily:'Poppins-Medium',
            color:btnTextColor,
            textAlign:'center',
            color:'white'
        }}>{title}</Text>
    </TouchableOpacity>
    </View>
  )
}

export default CButton

