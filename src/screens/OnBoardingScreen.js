import React, { useEffect, useState, useCallback } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  Platform,
  Dimensions,
} from "react-native";
import LottieView from 'lottie-react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { TouchableOpacity } from "react-native";
import Carousel from 'react-native-reanimated-carousel';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import help from '../../assets/image/help.png'



let ScreenHeight = Dimensions.get("window").height;
let ScreenWidth = Dimensions.get("window").width;
const width = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    color: "black",
    width:ScreenWidth,
    height:ScreenHeight
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
    <View style={[styles.container, { padding: 20 }]}>

      <TouchableOpacity style={{
        alignSelf: 'flex-end',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        marginRight: 302
      }}
        onPress={() => navigation.navigate('HelpScreen')}
      >
        <Image source={help} style={{width:30,height:30}} />
      </TouchableOpacity>

      <View style={{ flex: 1, width: "100%", paddingTop: 50 }}>
        <Carousel

          width={wp("90%")}
          height={hp("80%")}
          data={carouselItems}
          loop
          scrollAnimationDuration={1000}
          renderItem={_renderItem}
          showLength={false}
          onSnapToItem={(index) => {
            setactiveSlide(index);
          }}
          autoPlay
          autoPlayInterval={2000}
          mode="parallax"
          modeConfig={{
            parallaxAdjacentItemScale: 0.75,
            parallaxScrollingOffset: 20,
            parallaxScrollingScale: 0.85
          }}

        />
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            alignSelf: "center",
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
      </View>
      <View style={{ flex: 1, alignItems: "center", width: "100%" }}>
        <Text
          style={{
            color: "black",
            fontSize: 26,
            marginVertical: 25,
            fontWeight: "bold",
          }}
        >
          Learn Once, Code Again
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
            padding: RFValue(15, 816),
            width: "100%",
            marginTop: 20,
          }}
        >
          <Text style={{ color: "#343434", textAlign: "center" }}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("RegisterScreen")}
          style={{
            backgroundColor: "#C19F1E",
            borderRadius: 25,
            padding: RFValue(15, 816),
            width: "100%",
            marginTop: 20,
          }}
        >
          <Text
            style={{
              color: "white",

              textAlign: "center",
            }}
          >
            Sign Up
          </Text>
        </TouchableOpacity>


      </View>
    </View>
  );
}

export default OnBoarding;
