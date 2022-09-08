import React, { useEffect, useState } from 'react'
import { I18nManager, StyleSheet, Text, View } from 'react-native'
import Tabbar from "@mindinventory/react-native-tab-bar-interaction";
import LottieView from 'lottie-react-native';

const activeBook = (isPlay) => {
  return (
    <View style={{ width: 80, height: 60 }}>
      <LottieView source={require(`../../assets/svg/book.json`)} autoPlay={isPlay} loop={false} />
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







const tabData = [
  {
    name: 'Book',
    activeIcon: activeBook(true),
    inactiveIcon: activeBook(false)
  },
  {
    name: 'Home',
    activeIcon: activeHome(true),
    inactiveIcon: activeHome(false)
  },
  
 
]

const Navigations = () => {
  const [tabs, setTabs] = useState(tabData)
  const [bgColor, setBgColor] = useState('#FFC0C7')

  useEffect(() => {
    I18nManager.forceRTL(true)
  }, [])

  const onTabChange = (item) => {
    let tempTabs =[...tabs]
    setTimeout(() => {                  
      tempTabs.map((val) => {
        if (item.name === 'Home' && val.name === 'Home') {
          val.activeIcon = Object.assign({}, activeHome(true))
          setBgColor('#FFC0C7')
        } else if (item.name === 'Book' && val.name === 'Book') {
          val.activeIcon = Object.assign({}, activeBook(true))
          setBgColor('#FF7128')
        }
        else {
          val.activeIcon = null
        }
      })

      setTabs(tempTabs)
    }, 500);
  }
  return (

    <View style={[styles.container]}>
      <View style={{ backgroundColor: bgColor, flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ width: 500, height: 300 }}>
      <LottieView source={require(`../../assets/svg/pc.json`)} autoPlay={true} loop={true} />
    </View>
      </View>

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
})