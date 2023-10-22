import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Pressable,SafeAreaView } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from 'react';


const Home = ({ navigation, route }) => {
  return (
    <SafeAreaView  style={styles.container}>
      <View style={{width:351, height:87, alignItems: 'center', justifyContent: 'center'}}>
        <Text style={{fontSize:20}}><center>A premium online store for <br></br>sporter and their stylish choice</center></Text>
      </View>
      <View style={{width:359, height:388,alignItems:'center'}}>
        <Image style={{width:292, height:270, marginTop:100}} resizeMode='contain' source={require('./img/bione.png')}></Image>
      </View>
      <View style={{width:351, height:81, alignItems:'center'}}>
        <Text style={{fontSize:26, fontWeight:'bold'}}><center>POWER BIKE<br></br>SHOP</center></Text>
      </View>
      <Pressable 
      onPress={() => navigation.navigate("screen2")}
      style={{backgroundColor:'red',width:351,height:61,alignItems:'center', justifyContent:'center',borderRadius:30,marginTop:30}}>
        <Text style={{fontWeight:'bold', fontSize:26, color:'white'}}>Get Started</Text>
      </Pressable>
    </SafeAreaView >
  );
}
export default Home;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
