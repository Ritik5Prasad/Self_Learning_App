import React from 'react'
import { View, Text, Image, Linking, TouchableOpacity, StyleSheet } from 'react-native'
import LottieView from 'lottie-react-native';
import pic from '../../assets/image/founder.png';
import CardFlip from 'react-native-card-flip';
import thank from '../../assets/svg/thank.json'
const HelpScreen = () => {
    return (
        
        <View style={styles.container}>
            <Text style={styles.header}>About The App</Text>
            
            <CardFlip style={{flex:1}} ref={(card) => this.card = card} >
 
            <TouchableOpacity  style={{ flexDirection: 'row', margin: 20, marginTop: 50 
        ,backgroundColor:'#ebdcaa',borderRadius:10
        }} 
        activeOpacity={10}
        onPress={() => this.card.flip({ direction: 'right', duration: 150 })}
        >

                <View style={{ justifyContent: 'center', alignContent: 'center', alignItems: 'center', margin: 20 }}>
                    <Image source={pic} style={{ width: 100, height: 100 }} />
                    <Text style={{ fontFamily: 'Mukta-Medium', color: 'black' }}>Founder & </Text>

                    <Text style={{ fontFamily: 'Mukta-Medium', color: 'black' }}>CEO at Self Taught Programmer</Text>

                </View>
                <Text style={{ fontFamily: 'Poppins-Regular', color: 'black', marginRight:200 }}>
                    Mr.<Text style={{fontSize:22,fontFamily:'Quicksand-SemiBold'}}>Ritik Prasad</Text> graduated from Dr. Abdul Kalam Technical University with a B.Tech in Computer Science and Engineering.
                    He has worked as a full-time Software Developer at Socialwell. His passion for teaching led him to create this app.
                </Text>
            </TouchableOpacity>

  <TouchableOpacity 
  style={{ flexDirection: 'row', margin: 20, marginTop: 50 
  ,backgroundColor:'#ebdcaa',borderRadius:10,height:200,justifyContent:'center',
  alignContent:'center',alignItems:'center'
  }} 
  activeOpacity={10} onPress={() => this.card.flip()} >
    
    <View style={{ width: 500, height: 300 }}>
      <LottieView source={thank} autoPlay={true}  loop={true} />
    </View>

  </TouchableOpacity>

            </CardFlip>



            <TouchableOpacity style={styles.contactContainer}> 
                <Text style={styles.contact}>
                    Contact Us: +91-8922897556
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.contactContainer}>
                <Text style={styles.contact}>
                    Mail Us: rv724405@gmail.com
                </Text>
            </TouchableOpacity>





        </View>
    )
}

export default HelpScreen


const styles = StyleSheet.create({
    container:{
        backgroundColor:'#d6be6e',
        height:'100%',
        width:'100%'
    },
    header: {
        alignSelf: 'center', margin: 20, fontFamily: 'Poppins-Medium', color: 'black',
        fontSize: 23,
        textDecorationLine:'underline'
    },

    contact:{
        fontSize:16,
        fontFamily:'Poppins-Medium',
        color:'black',
    },
    contactContainer:{
        marginHorizontal:26,
        margin:10,
        backgroundColor:'#ebdcaa',
        borderRadius:10,
        padding:20
    }
})