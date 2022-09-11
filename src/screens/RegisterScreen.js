import React, { useEffect, useState, useCallback } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    Platform,
    Dimensions,
    ScrollView,
    ActivityIndicator
} from "react-native";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { RFPercentage, RFValue } from "react-native-responsive-fontsize";
import LottieView from 'lottie-react-native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import CInput from "../components/CInput";
import CButton from '../components/CButton'
import { db, auth } from "../utils/firebase";
import { saveTokenInFirestore } from "../utils/tokenUtils";
import * as firebase from "firebase";
import { useNavigation,CommonActions } from "@react-navigation/native";
const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;


const RegisterScreen = () => {
    const navigation=useNavigation();
    const [loading ,setLoading]=useState(false)
    const [registered ,setRegisterd]=useState(false)
    const register=async()=>{

      if(email=="" || password=="" || name=="" )
      {
        alert("Please Fill all Information")
        return
      }

      if( password.length<8){
      alert("Please enter 8 length character password")
      return
        }

        

        setLoading(true)
        await auth
        .createUserWithEmailAndPassword(email, password)
        .then((auth) => {
          console.log("mail id created");
          
          db.collection("students")
          .add({
            name: name,
            email:email,
            // createdAt: firebase.firestore.FieldValue.serverTimestamp(),
          })
          .then((doc) => {
              console.log("db created");
            saveTokenInFirestore(email, "students");
            setLoading(false)
        setRegisterd(true);
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
          })
          .catch(err=>alert(err))
        }) 
        .catch((err)=>{
            alert(err)
            setLoading(false)
        return; 
        })

        
        
        

}

    useEffect(()=>{
        setTimeout(() => {
            setAnime(true)
        }, 1200);
    },[

    ])
    const [email,setEmail]=useState("");
    const [anime,setAnime] = useState(false)
    const [name,setName]=useState("");
    const [password,setPassword]=useState("");


     if(registered){
        return(
            <View style={styles.container}>
                <View style={{ width: 400, height:400 }}>
                    
              <LottieView source={require(`../../assets/svg/registration.json`)} autoPlay={true} loop={false} />
              
              </View>
              <Text style={{fontSize:23, fontFamily:'Poppins-Medium',
              color:'green',textAlign:'center',margin:10,marginTop:150
              }}>Hi! {name} You are successfully Registerd</Text>
              <View style={{alignSelf:'center'}}>
              <CButton title="Let's Go" color='#22a9dd' onPress={()=>{
               navigation.dispatch(
                CommonActions.reset({
                  index: 0,
                  routes: [{ name: "MainScreen" }],
                })
              );
              }} btnBorder='black' btnColor='#83C702' btnTextColor='black' />
              </View>
            </View>
        )
     }

        return (
       
       <ScrollView contentContainerStyle={styles.center} style={styles.container} >
            <View style={{ width: 400, height:400 }}>
                <LottieView source={require(`../../assets/svg/register.json`)} autoPlay={true} loop={false} />
            </View>
          {anime?
            <>
            <CInput placeholder='Full Name' secureText={false}  onChangeText={text =>setName(text)} theme='#22a9dd'/>
           <CInput placeholder='Email' secureText={false}  onChangeText={text =>setEmail(text)} theme='#22a9dd'/>           
           <CInput placeholder='Password' secureText={true}  onChangeText={text =>setPassword(text)} theme='#22a9dd'/>
           <View style={{margin:20}}>
            { loading ?
            <View style={{ width: 150, height:150 }}>
            <LottieView source={require(`../../assets/svg/loaderR.json`)} autoPlay={true} loop={true} />
            </View>
            :
           <CButton title='Register' color='#22a9dd' onPress={()=>{register()}} btnBorder='black' btnColor='#22a9dd' btnTextColor='black' />
         
        }
           </View>
        
           </>:
           null
          }

   

        </ScrollView>
    )
}

export default RegisterScreen

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