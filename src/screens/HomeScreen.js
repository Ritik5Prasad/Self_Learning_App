import React, { useEffect, useState } from 'react'
import {  StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import Tabbar from "@mindinventory/react-native-tab-bar-interaction";
import LottieView from 'lottie-react-native';
import { useIsFocused, useNavigation } from '@react-navigation/native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import HomeStack from './HomeStack';
import DoubtStack from './DoubtStack';
import BookStack from './BookStack';



const activeDoubt = (isPlay) => {
  return (
    <View style={{ width: 80, height: 60 }}>
      <LottieView source={require(`../../assets/svg/question.json`)} autoPlay={isPlay} loop={true} />
    </View>
  )
}

const activeHome = (isPlay) => {
  return (
    <View style={{ width: 80, height: 60 }}>
      <LottieView source={require(`../../assets/svg/program.json`)} autoPlay={isPlay} loop={false} />
    </View>
  )
}
const activeBook = (isPlay) => {
  return (
    <View style={{ width: 80, height: 60 }}>
      <LottieView source={require(`../../assets/svg/book.json`)} autoPlay={isPlay} loop={false} />
    </View>
  )
}







const tabData = [
  
  {
    name: 'Home',
    activeIcon: activeHome(true),
    inactiveIcon: activeHome(false),
    
  },
  {
    name: 'Doubt',
    activeIcon: activeDoubt(true),
    inactiveIcon: activeDoubt(false)
  },
  {
    name: 'Book',
    activeIcon: activeBook(true),
    inactiveIcon: activeBook(false)
  },
  
  
 
]

const Navigations = () => {
  const [tabs, setTabs] = useState(tabData)
  const [bgColor, setBgColor] = useState('#FFC0C7')
  const navigation = useNavigation();
  const [tabScreen, setTabsScreen] = useState("HomeStack")



  const onTabChange = (item) => {
    let tempTabs =[...tabs]
    setTimeout(() => {                  
      tempTabs.map((val) => {
        if (item.name === 'Home' && val.name === 'Home') {
          val.activeIcon = Object.assign({}, activeHome(true))
          setBgColor('#551b83')
          setTabsScreen('HomeStack');
        } else if (item.name === 'Book' && val.name === 'Book') {
          val.activeIcon = Object.assign({}, activeBook(true))
          setBgColor('#FF7128')
          setTabsScreen('BookStack');
        }
      else if (item.name === 'Doubt' && val.name === 'Doubt') {
        val.activeIcon = Object.assign({}, activeDoubt(true))
        setBgColor('#c28417')
        setTabsScreen('DoubtStack');
      }
        else {
          val.activeIcon = null
        }
      })

      setTabs(tempTabs)
    }, 500);
  }
  return (

    <View style={[styles.container,{backgroundColor:bgColor}]}>
      <View style={[styles.headerPart,{backgroundColor:bgColor}]}>
      <TouchableOpacity onPress={()=>navigation.openDrawer()}  style={styles.drawer}>
      <MaterialCommunityIcons 
           size={23}
           color='black'
           name='menu'
           />
      </TouchableOpacity>
      </View>
      { tabScreen=='HomeStack' ?
       <HomeStack />
       :
       <>
       {tabScreen=='BookStack'?
       <BookStack />
        :
        <DoubtStack />
       }
       </>
      }

      <Tabbar
        tabs= {tabs}          
        tabBarBackground={bgColor}        
        labelStyle={{ color: '#4d4d4d', fontWeight: '600', fontSize: 11,bottom:5 }}
        onTabChange={(item) => onTabChange(item)}
        defaultActiveTabIndex={0}
        transitionSpeed={100}
        containerWidth={350}
        containerBottomLeftRadius={20}
        containerBottomSpace={15}
        containerTopLeftRadius={20}
        containerTopRightRadius={20}
        containerBottomRightRadius={20}
        
      />
    </View>
  )

}

export default Navigations

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerPart:{
    borderBottomEndRadius:20,
    borderBottomStartRadius:20,
    elevation:5,
  },
  drawer:{
    alignSelf:'flex-start',
    backgroundColor:'white',
    marginVertical:20,
    marginHorizontal:10,
    width:40,
    height:40,
    borderRadius:20,
    justifyContent:'center',
    alignContent:'center',
    alignItems:'center',
    position:'relative',
    elevation:10
  }
})