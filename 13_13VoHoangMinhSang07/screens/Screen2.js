import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, Pressable, TextInput, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Screen2 = ({ navigation, route }) =>  {
    fetch("https://6544ae615a0b4b04436cb994.mockapi.io/Lab7")
        .then((res)=> res.json())
        .then((data)=>{
            console.log(data);
        })
        .catch((error)=> {
            console.log(error);
        });
        const [user,setUser] = useState({});
        useEffect(()=>{
            fetch("https://6544ae615a0b4b04436cb994.mockapi.io/Lab7/" + route.params?.id)
              .then((res) => res.json())
              .then((data) => setUser(data));
        },[route])
        
    return(
        

        <View style={styles.container}>
            <View style={{ width:"100%", height: 50,flexDirection: "row",}}>
                <Pressable
                onPress={() => navigation.navigate("Home")}
                style={{width:30,height:50, justifyContent:'center', alignItems:'center'}}
                >
                    <Image source={require('./img/Frame5.png')} style={{width:24,height:24, margin:10 }}></Image>
                </Pressable>
                  <Image
                    source={{ uri: user.image }}
                    style={{
                      width: 50,
                      height: 50,
                      borderRadius: "50%",
                      backgroundColor: "#BCC1CA",
                      left: 130
                    }}
                  />
                  <View style={{left:140}}>
                    <Text style={{ fontSize: 20, fontWeight: "700" }}>
                      Hi {user.name}
                    </Text>
                    <Text>Have agrate day a head</Text>
                  </View>
            </View>
            <View style={{width:334,height:43, borderWidth:1, alignItems:'center',flexDirection:'row', marginTop:30}}>
                <Image source={require('./img/Frame1.png')} style={{width:20,height:20, margin:10}}></Image>
                <TextInput placeholder="Search" style={{width: 334, height: 44, borderRadius: 4, paddingLeft: 30,
          }}
        />
            
            </View>
            <FlatList
              data={user.todo}
              renderItem={({ item }) => (
                <View
                  style={{
                    flexDirection: "row",
                    width: 335,
                    height: 48,
                    borderRadius: 24,
                    backgroundColor: "#BCC1CA",
                    justifyContent: "space-around",
                    alignItems: "center",
                    margin: 10,
                  }}
                >
                  <Image
                    source={require("./img/Frame 2.png")}
                    style={{ width: 24, height: 24 }}
                  />
                  <Text>{item.title}</Text>
                  <Pressable>
                    <Image
                      source={require("./img/Frame 3.png")}
                      style={{ width: 24, height: 24 }}
                    />
                  </Pressable>
                </View>
              )}
            />

            <Pressable
            onPress={() => navigation.navigate("Screen3", { user })}
            
            style={{width:69,height:69, borderRadius:90, backgroundColor:'#00BDD6', justifyContent:'center', alignItems:'center'}}
            >
                <Image source={require('./img/Frame4.png')} style={{width:50, height:50}}></Image>

            </Pressable>



        </View>



    );


}
export default Screen2;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});