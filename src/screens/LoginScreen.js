import React, { useEffect, useState, useCallback } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    Platform,
    Dimensions,
    ScrollView,
    Animated,
    ActivityIndicator
} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import LottieView from 'lottie-react-native';
import CInput from "../components/CInput";
import CButton from '../components/CButton'
import { db, auth } from "../utils/firebase";
import { saveTokenInFirestore } from "../utils/tokenUtils";
import * as firebase from "firebase";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation,CommonActions } from "@react-navigation/native";

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


const LoginScreen = () => {
    const navigation=useNavigation();
    const [x,setx]=useState(new Animated.Value(-100));
    const [visible,setVisible]=useState(false);
     const [timeOut,setTimeot]=useState();
    
    useEffect(()=>{
        slide();
    },[])
    const slide = () => {
        Animated.spring(x, {
          toValue: 2,
          speed:0.02,
          useNativeDriver: false,
        }).start();
        setVisible(true);
    }

    useEffect(()=>{
        setTimeout(() => {
            setAnime(true)
        }, 200);
    },[
     timeOut
    ])
    const [anime,setAnime] = useState(false)
    
    const [loading ,setLoading]=useState(false)
   
    const login=async()=>{

      if(email==""  )
      {
        alert("Please Enter Email")
        return
      }
      if( password=="" )
      {
        alert("Please Enter Password")
        return
      }

      if( password.length<8){
      alert("Please enter 8 length character password")
      return
        }

        

        setLoading(true)
        await  auth
        .signInWithEmailAndPassword(email, password)
        .then( async(auth) => {

            db.collection("students")
          .where("email", "==", email)
          .get()
          .then(async (snap) => {
            if (!snap.empty) {
              setLoading(true);

              snap.forEach( async function (doc) {
                const data = {
                  id: doc.id,
                  data: doc.data(),
                };
                await AsyncStorage.setItem(
                    'login_data',
                    JSON.stringify(data)
                  );
              });
            }}) 
            
            setLoading(false);
              
              
            navigation.dispatch(
                CommonActions.reset({
                  index: 0,
                  routes: [{ name: "MainScreen" }],
                })
              );
              console.log("Logged In");
           })
        .catch((err)=>{
            alert(err)
            setLoading(false)
        return; 
        })

        
        
        

}

    
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    

     

        return (
       
       <ScrollView contentContainerStyle={styles.center} style={styles.container} >
         <Animated.View
          style={[styles.slideView, {
            transform: [
              {
                translateX: x
              }
            ]
          }]}
        >
            <View style={{ width: 350, height:350,marginTop:50 }}>
                <LottieView source={require(`../../assets/svg/login.json`)} autoPlay={true} loop={true} />
            </View>
            </Animated.View>
            {anime?
            <>
           <CInput placeholder='Email' secureText={false} theme='#9879f0' onChangeText={text =>setEmail(text)}/>           
           <CInput placeholder='Password' secureText={true} theme='#9879f0'  onChangeText={text =>setPassword(text)} />
           <View style={{margin:20}}>
            { loading ?
            <View style={{ width: 150, height:150 }}>
            <LottieView source={require(`../../assets/svg/loaderR.json`)} autoPlay={true} loop={true} />
            </View>
            :
           <CButton title='Login' color='#57ca51' onPress={()=>{login()}} btnBorder='black' btnColor='#9879f0' btnTextColor='black' />
         
        }
           </View>
        </> : null}
           

   

        </ScrollView>
    )
}

export default LoginScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        color: "black",
        width: width,
        height: height,
        backgroundColor:'white'
    },
    center: {
        alignItems: "center",
        justifyContent: "center",
        alignContent:'center'
    }
});