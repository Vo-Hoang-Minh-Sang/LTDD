import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, Image, Pressable, Touchable, TouchableOpacity } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from 'react';
const Home = ({ navigation, route }) => {


  return (
    <SafeAreaView style={styles.container}>
       <View style={{ flexDirection: "row", justifyContent: "center" }}>
          <Image style={styles.img} source={route.params?.img}></Image>
        </View>
       <View>
          <Text style={{fontSize:15,left:22}}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>
       </View>
       <View style={{flexDirection:'row', left:20, marginTop:20}}>
          <Image source = {require('./assets/star.png')} style={styles.star}></Image>
          <Image source = {require('./assets/star.png')} style={styles.star}></Image>
          <Image source = {require('./assets/star.png')} style={styles.star}></Image>
          <Image source = {require('./assets/star.png')} style={styles.star}></Image>
          <Image source = {require('./assets/star.png')} style={styles.star}></Image>
          <Text style={{fontSize:15, marginLeft:30, marginTop:5}}>(Xem 828 đánh giá)</Text>
       </View>
       <View style={{flexDirection:'row', marginTop:20}}>
          <Text style={{fontWeight:'bold', fontSize:18, left:22}}>1.790.000 đ</Text>
          <Text style={{fontSize:18,marginLeft:50}}><s>1.790.000 </s> </Text>
       </View>
       <View style={{flexDirection: 'row', marginTop:20}}>
        <Text style={{fontSize:18, fontWeight:'bold', color: 'red', left: 22}}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
        <Image source={require('./assets/Group 1.png')} style={{
          width:20,
          height:20,
          marginLeft:30
        }}></Image>
       </View>
       <TouchableOpacity style={{width:300, height:34}} 
          onPress={() => navigation.navigate("ChoiceColor")}
        >
          <View style={{borderWidth:1, borderRadius:5, width:332, height:34,left:26,flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
              <Text style={{left:100,top: 7}}>4 MÀU-CHỌN MÀU</Text>
              <Image source={require('./assets/Vector.png')} style={{height:15,width:15,top:8,right:40}}></Image>
          </View>
        </TouchableOpacity>
       <View style={{width:326, height:44, left:29, backgroundColor:'red', marginTop:20, justifyContent:'center', alignItems:'center'}}>
          <TouchableOpacity
          onPress={() => navigation.navigate("Choose")}
          style={{width:326, height:44,justifyContent:'center', alignItems:'center'}}>
            <Text style={{color:'white', fontSize:'25', fontWeight:'bold'}}>Chon mua</Text>
          </TouchableOpacity>
       </View>
    </SafeAreaView>
  );
    }
export default Home;
const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:'baseline'
  },
  img: {
    width: 301,
    height:361,
    top: -2,
    left: 29,
    resizeMode: 'contain',
  },
  star: {
    width:23,
    height:25,
    margin:3,
  }
  
});
