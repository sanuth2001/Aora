import { StyleSheet, Text, View } from 'react-native'
import { Link } from 'expo-router'
import { StatusBar } from 'expo-status-bar'

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Aora!</Text>
      <StatusBar style='auto'/>
      <Link href="/profile" style={{color:"blue"}}>Go to Profile</Link>
    </View>
  )
}



const styles = StyleSheet.create({
    container:{
        display:"flex",
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    }
})