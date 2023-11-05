import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, Pressable, TextInput, FlatList } from 'react-native';
import React, { useEffect, useState } from 'react';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
  
  const Screen3 = ({ navigation, route }) => {
    const { user } = route?.params;
    const [job, setJob] = useState("");
    
    return (
      <View style={styles.container}>
        <View style={{ width: "100%", height: 50, flexDirection: "row" }}>
        <Pressable
                onPress={() => navigation.navigate("Screen2",{id:1})}
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
                left: 130,
                }}
            />
            <View style={{ left: 140 }}>
                <Text style={{ fontSize: 20, fontWeight: "700" }}>
                Hi {user.name}
                </Text>
                <Text>Have agrate day a head</Text>
            </View>
        </View>
        <Text style={{ fontSize: 32, fontWeight: "700" }}>ADD YOUR JOB</Text>
        <View>
          <Image
            source={require("./img/Frame6.png")}
            style={{
              width: 24,
              height: 24,
              position: "absolute",
              top: 10,
              left: 5,
            }}
          />
          <TextInput
            onChangeText={setJob}
            style={{
              width: 334,
              height: 44,
              borderWidth: 1,
              borderRadius: 4,
              borderColor: "#BCC1CA",
              paddingLeft: 30,
            }}
            placeholder="Input your job"
          />
        </View>
        <Pressable
          onPress={() => {
            fetch("https://6544ae615a0b4b04436cb994.mockapi.io/Lab7/" + user.id, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                todo: [
                  ...user.todo,
                  {
                    id: (user.todo.length+1).toString(),
                    job:job
                  },
                ],
              }),
            }).then(response =>{
              if(response.ok)
                  return navigation.navigate("Screen2",{id:user.id});
            })
          }}
          style={{
            width: 190,
            height: 44,
            borderRadius: 12,
            backgroundColor: "#00BDD6",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ color: "#fff", fontSize: 16 }}>FINISH-&gt;</Text>
        </Pressable>
        <Image
          source={require("./img/Image 95.png")}
          style={{ width: 190, height: 170 }}
          resizeMode="contain"
        />
      </View>
    );
  };
  
  export default Screen3;
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "space-around",
      alignItems: "center",
      backgroundColor: "#fff",
    },
  });