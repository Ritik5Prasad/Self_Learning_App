import React,{useState} from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    Platform,
    Dimensions,
    ScrollView,
    TextInput,
    TouchableOpacity
} from "react-native";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';



const CInput=({
    placeholder,
    secureText,
    onFocus = () => {},
    ...props
})=> {

  const [isFocused, setIsFocused] = React.useState(false);
   const [toggleOn,setToggleOn]= useState(true)
  
  if(secureText){
  return(
    <View >
        
      <View style={styles.pass}>
      
        <TextInput style={{
          fontSize:18,
          fontFamily:'Poppins-Medium',
          width:'80%'
        }} placeholder={placeholder}
         {...props}
         
         secureTextEntry={toggleOn}
        />
        <TouchableOpacity onPress={()=>setToggleOn(!toggleOn)}>
          <MaterialCommunityIcons 
           size={20}
           color='#22a9dd'
           name={toggleOn ? "eye-off-outline" : "eye-outline"}
           />
        </TouchableOpacity>
      </View>
      </View>
  );
}

  return (
    <View style={styles.textContainer}>
        <TextInput placeholder={placeholder}
         style={styles.text}
         {...props}
        />
      
    </View>
  )
}

export default CInput

const styles=StyleSheet.create({
  text:{
    borderRadius:5,
    borderWidth:1,
    borderColor:'#22a9dd',
    fontSize:18,
    fontFamily:'Poppins-Medium',
    width:300,
    paddingHorizontal:10
  },
  pass:{
    borderRadius:5,
    borderWidth:1,
    borderColor:'#22a9dd',
    fontSize:18,
    fontFamily:'Poppins-Medium',
    width:300,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:10,
    margin:10
  },
  textContainer:{
   margin:10
  }
})