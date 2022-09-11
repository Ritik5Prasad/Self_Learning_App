import React, { useEffect, useState, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  Dimensions,
  TouchableOpacity 
} from "react-native";
import LottieView from 'lottie-react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import Carousel from 'react-native-snap-carousel';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import help from '../../assets/image/help.png'
import { ScrollView } from "react-native-gesture-handler";



let ScreenHeight = Dimensions.get("window").height;
let ScreenWidth = Dimensions.get("window").width;
const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    color: "black",
    width:ScreenWidth,
    height:ScreenHeight,
    backgroundColor:'white'
  },
});

function OnBoarding({ navigation }) {



  const [activeSlide, setactiveSlide] = useState(0);

  const carouselItems = [
    {
      image: require("../../assets/svg/pc.json"),
      text: "Fun Learning",
    },
    {
      image: require("../../assets/svg/doubt.json"),
      text: "24/7 Doubt Support",
    },
    {
      image: require("../../assets/svg/target.json"),
      text: "Curated Content",
    },
  ];
  const _renderItem = ({ item, index }) => {
    return (
      <View
        style={{
          borderRadius: RFValue(5, 816),
          width: "100%",
          marginBottom: 0,
          paddingBottom: 0,
          alignItems: "center",
        }}
      >
        <View style={{ width: 500, height: 300 }}>
          <LottieView source={item.image} autoPlay={true} loop={true} />
        </View>
        <Text
          style={{
            textAlign: "center",
            fontWeight: "bold",
            color: "#303030",
            fontSize: 24,
            marginTop: 10,
          }}
        >
          {item.text}
        </Text>
      </View>
    );
  };
  return (
    <ScrollView style={[styles.container, { padding: 20 }]} 
    contentContainerStyle={{alignItems: "center",
    justifyContent: "center",}}
    >

      <TouchableOpacity style={{
        alignSelf: 'flex-end',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        
      }}
        onPress={() => navigation.navigate('HelpScreen')}
      >
        <Image source={help} style={{width:25,height:25}} />
      </TouchableOpacity>

     
      <Carousel
          layout={"default"}
          data={carouselItems}
          renderItem={_renderItem}
          sliderWidth={ScreenWidth - 40}
          itemWidth={ScreenWidth - 40}
          onSnapToItem={(index) => {
            setactiveSlide(index);
          }}
          autoplay={true}

        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            alignSelf: "center",
            marginBottom:100,
            marginTop:20
          }}
        >
          {activeSlide == 0 ? (
            <View
              style={{
                height: RFValue(10, 816),
                width: RFValue(10, 816),
                borderRadius: 50,
                backgroundColor: "#040404",
                marginHorizontal: 10,
              }}
            ></View>
          ) : (
            <View
              style={{
                height: RFValue(10, 816),
                width: RFValue(10, 816),
                borderRadius: 50,
                backgroundColor: "#707070",
                marginHorizontal: 10,
              }}
            ></View>
          )}
          {activeSlide == 1 ? (
            <View
              style={{
                height: RFValue(10, 816),
                width: RFValue(10, 816),
                borderRadius: 50,
                backgroundColor: "#040404",
                marginHorizontal: 10,
              }}
            ></View>
          ) : (
            <View
              style={{
                height: RFValue(10, 816),
                width: RFValue(10, 816),
                borderRadius: 50,
                backgroundColor: "#707070",
                marginHorizontal: 10,
              }}
            ></View>
          )}
          {activeSlide == 2 ? (
            <View
              style={{
                height: RFValue(10, 816),
                width: RFValue(10, 816),
                borderRadius: 50,
                backgroundColor: "#040404",
                marginHorizontal: 10,
              }}
            ></View>
          ) : (
            <View
              style={{
                height: RFValue(10, 816),
                width: RFValue(10, 816),
                borderRadius: 50,
                backgroundColor: "#707070",
                marginHorizontal: 10,
              }}
            ></View>
          )}
      
      </View>
      <View style={{ flex: 1, alignItems: "center", width: "100%" }}>
        <Text
          style={{
            color: "black",
            fontSize: 26,
            marginVertical: 5,
            
            fontFamily:'Quicksand-Bold'
          }}
        >
          Learn Once, Code Anytime
        </Text>
        <Text style={{ color: "#646464" }}>Join Us To learn</Text>
        <Text style={{ color: "#646464" }}>in a simplified manner</Text>
        <Text style={{ color: "#646464" }}>

        </Text>

        <TouchableOpacity
          onPress={() => navigation.navigate("LoginScreen")}
          style={{
            borderWidth: 1,
            borderColor: "#C19F1E",
            borderRadius: 25,
            padding: RFValue(10, 816),
            width: "100%",
            marginTop: 20,
          }}
        >
          <Text style={{ color: "#C19F1E",fontSize:18, textAlign: "center",fontFamily:'Poppins-Medium', }}>Login</Text>
        </TouchableOpacity>
       <View style={{height:80,width:'100%'}}>
        <TouchableOpacity
          onPress={() => navigation.navigate("RegisterScreen")}
          style={{
            backgroundColor: "#C19F1E",
            borderRadius: 25,
            padding: RFValue(10, 816),
            width: "100%",
            marginTop: 20,
            elevation:5
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize:18, textAlign: "center",fontFamily:'Poppins-Medium',
             
            }}
          >
            Sign Up
          </Text>
        </TouchableOpacity>
        </View>


      </View>
    </ScrollView>
  );
}

export default OnBoarding;
