import {StyleSheet, Text, Image,View,TouchableOpacity} from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,  
} from '@react-navigation/drawer';
import AsyncStorage from '@react-native-async-storage/async-storage';
//ASSETS

//import Profile from '../assets/image/profile.png'
// import logo from '../assets/image/logo.png'
// import home from '../assets/image/Home.png'
import { useNavigation,CommonActions,StackActions,NavigationAction } from '@react-navigation/native';




//MAIN FUNCTION

const CustomDrawer = props => {
 const navigation=useNavigation();
  const [focus, setFocus] = React.useState('1');

  const LogoutButton = async () => {
    await AsyncStorage.removeItem('login_data');
  
   setFocus(1)
   navigation.reset({
    index: 0,
    routes: [{ name: 'OnBoardingScreen' }],
  });
   navigation.navigate('OnBoardingScreen')
    
  };


  return (
    <DrawerContentScrollView  {...props}  style={styles.drawerContainer}>
        
         

        {/* <TouchableOpacity style={styles.drawerHeadingContainer}onPress={() => {
            setFocus(1);
            props.navigation.navigate('UserListTab');
          }}>
          <Image source={logo} style={{width:101.48,height:101,alignSelf:'center',marginTop:20}} />  
        </TouchableOpacity>

        <TouchableOpacity onPress={() => {
            setFocus(1);
            props.navigation.navigate('UserListTab');
          }} style={[styles.drawerItem,{marginTop:20}]}>
          <Image source={home} style={{width:20,height:20}} />
          <Text style={{marginLeft:16}} >Dashboard</Text>
        </TouchableOpacity>
            
        <TouchableOpacity onPress={() => {
            setFocus(1);
            props.navigation.navigate('ProfileScreen');
          }} style={styles.drawerItem}>
          <Image source={Profile} style={{width:20,height:20}} />
          <Text style={{marginLeft:16}} >Profile</Text>
        </TouchableOpacity> */}
   
       
        <TouchableOpacity onPress={()=>{
          setFocus(1)
          LogoutButton()
        }} style={styles.LogoutButton}>
          <Text style={{color:'white'}}>Logout</Text>
          
        </TouchableOpacity>
        
       

      
    </DrawerContentScrollView>
  );
};



export default CustomDrawer;



const styles = StyleSheet.create({
  dropDown: {
    fontSize: 20,
    paddingVertical: 20,
  },
  
  drawerContainer: {
    flex: 1,
    
    
  },
  drawerHeading:{
    marginLeft:8,
    fontSize:20,
    fontWeight:'bold'
  },
  drawerHeadingContainer:{
    width:320,

    flexDirection:'row',
    alignItems:'center',
   
    justifyContent:'center',
  },
  drawerItem:{
    width:320,
    paddingLeft:36,
    height:60,
    flexDirection:'row',
    alignItems:'center',
    backgroundColor:'white',
    borderBottomColor:'#C4C4C4',
    borderBottomWidth:1,
    
  },
  LogoutButton:{
    backgroundColor: "#A84787",
    height: 48,
    width:100,
    alignSelf:'center',
    alignItems: 'center',
    borderRadius: 5,
    marginHorizontal: 20,
    justifyContent: 'center',
    margin: 10,
    marginTop:400,
    marginBottom:100
  }
});