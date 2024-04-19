import { StyleSheet, Text, View } from 'react-native';
import { Slot, SplashScreen, Stack } from 'expo-router';
import { useFonts } from 'expo-font';
import { useEffect } from 'react';

SplashScreen.preventAutoHideAsync();


const RooyLayout = () => {
  const [fontsLoaded,error]  = useFonts({
    "poppins-Black": require("../assets/fonts/Poppins-Black.ttf")
  })

  useEffect(()=>{
    if(error) throw error;
    if(fontsLoaded) SplashScreen.hideAsync();
  },
    [fontsLoaded,error])
    
    if(!fontsLoaded && !error) return null;
 
  return (
   <Stack>
    <Stack.Screen name='index' options={{headerShown:false}}/>

   </Stack>
  )
}

export default RooyLayout

