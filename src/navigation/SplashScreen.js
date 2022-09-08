import React, { useEffect, useState } from "react";
import {
   View,
   StyleSheet,
   Dimensions,
   Animated,
   LogBox,
   I18nManager,
   Text
} from 'react-native'
import { ProgressBar } from "@react-native-community/progress-bar-android";
import logo from '../../assets/svg/pc.json';
import LottieView from 'lottie-react-native';


LogBox.ignoreAllLogs(true)

function SplashScreen({ navigation }) {

    useEffect(() => {
        I18nManager.forceRTL(true)
      }, [])
    
  const [isStop, setIsStop] = useState(false);
  const width = new Animated.Value(200); //360
  const height = new Animated.Value(150);
  
  useEffect(() => {
 

    Animated.loop(
      Animated.sequence([
        Animated.timing(width, {
          toValue: 300,
          duration: 3000,
          useNativeDriver: false,
        }),
        Animated.timing(width, {
          toValue: 200,
          duration: 2000,
          useNativeDriver: false,
        }),
      ]),
    ).start();
  
    if (isStop) {
      Animated.stop();
    }
   

}, []);





  return (
    <View style={styles.container}>
     <View style={styles.imageContainer}>
      {/* <Animated.Image
          source={logo}
          style={{
            width: width,
            height: height,
            resizeMode: 'contain',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        /> */}
       <View style={{ width: 500, height: 300 }}>
      <LottieView source={require(`../../assets/svg/loader.json`)} autoPlay={true} speed={6} loop={true} />
    </View>

    <Text style={styles.title}>Self Taught Programmer</Text>

      </View>
           
      
      {/* <ProgressBar color="black" styleAttr="Horizontal"  style={{alignSelf:'center',bottom:50,width:130}} /> */}

    </View>
  )
}


const styles = StyleSheet.create({
    title:{
       fontFamily:'Quicksand-Bold',
       fontSize:28,
       color:'black',
       textDecorationColor:'yellow'
    },
  container: {
    flex: 1,
    backgroundColor:'white',
    height: '100%',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    top: Dimensions.get('screen').height/2-75,
    left: Dimensions.get('screen').width/2-75,
    backgroundColor:'transparent',
    height:"100%",
    width:"100%",
    resizeMode:'contain'
  },

 
})

export default SplashScreen
