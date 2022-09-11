//BUILT-IN MODULES
import 'react-native-gesture-handler';
import {
  Text,
  View,
  Image,
} from 'react-native';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createStackNavigator } from "@react-navigation/stack";
import AsyncStorage from "@react-native-async-storage/async-storage";

//SCREENS

import SplashScreen from './SplashScreen';
import HomeScreen from '../screens/HomeScreen'
import LoginScreen from '../screens/LoginScreen'
import RegisterScreen from '../screens/RegisterScreen'
import OnBoardingScreen from '../screens/OnBoardingScreen'
import HelpScreen from '../screens/HelpScreen'
//ASSETS

// import home from '../assets/image/Home.png'
// import homeFocused from '../assets/image/HomeFocused.png'
// import farmer from '../assets/image/farmer.png'
// import farmerFocused from '../assets/image/farmerIconFocused.png'


//COMPONENTS

import CustomDrawer from '../components/CustomDrawer'


//CUSTOM DRAWER NAVIGATION

const Drawer = createDrawerNavigator();

const MainScreen = () => (
  <Drawer.Navigator
      drawerWidth="200"
      drawerContent={props => <CustomDrawer {...props} />}
      screenOptions={({ route }) => ({
          drawerStyle: {
              width: 320
          },
          headerShown: false,

      })}
      initialRouteName='HomeScreen'
      >

      <Drawer.Screen name="HomeScreen" component={HomeScreen} />

  </Drawer.Navigator>
);



// MAIN  STACK NAVIGATION

const Stack = createStackNavigator();

const Navigations = () => {

  //ADD LOGIN HERE

  const [initialRouteName, setInitialRouteName] = React.useState("");

  React.useEffect(() => {
      setTimeout(signInData, 1500);
  }, []);


  async function signInData() {

      try {
          let logindata = await AsyncStorage.getItem('login_data');
          let parsed = JSON.parse(logindata);
          if(parsed==null){
          setInitialRouteName('OnBoardingScreen');
        return
        }
          console.log('login data on navigation page' + JSON.stringify(parsed));
          if (parsed) {
              setInitialRouteName('MainScreen')
              return
          }
      }
      catch (err) {

          console.log(err)
          setInitialRouteName('OnBoardingScreen')
          return
      }

  }

  return (
      <NavigationContainer>
          {initialRouteName == '' ? (
              <SplashScreen />
          ) : (
              <>
                  <Stack.Navigator
                      initialRouteName={initialRouteName}
                      screenOptions={{ headerShown: false }}>
                      
                      <Stack.Screen name="MainScreen" component={MainScreen} />
                      <Stack.Screen name="LoginScreen" component={LoginScreen} />
                      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
                      <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} />
                      <Stack.Screen name="HelpScreen" component={HelpScreen} />
                  </Stack.Navigator>
              </>
          )}
      </NavigationContainer>
  );
};


export default Navigations;