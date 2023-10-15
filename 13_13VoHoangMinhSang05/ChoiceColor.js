import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
const ChoiceColor = ({ navigation }) => {
  const [img, setImg] = React.useState(require("../assets/vs_blue.png"));
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image style={styles.img} source={img}></Image>
        <Text style={{right: 55, marginBottom: 50}}>Điện thoại Vsmart Joy 3<br></br>Hàng chính hãng</Text>
      </View>
      <View style={styles.footer}>
        <Text style={{ marginLeft: -200, marginBottom: 20, fontSize: 15, fontWeight: 'bold' }}>Chọn một màu bên dưới</Text>

        <TouchableOpacity onPress={() => setImg(require("../assets/vs_silver.png"))}>
          <View style={styles.silver}></View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.black} onPress={() => setImg(require("../assets/vs_black.png"))}>
          <View></View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setImg(require("../assets/vs_blue.png"))}>
          <View style={styles.blue}></View>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setImg(require("../assets/vs_red.png"))}>
          <View style={styles.red}></View>
        </TouchableOpacity>

        <TouchableOpacity style={styles.chon} onPress={() => navigation.navigate("Choose", { img })}>
          <Text style={{
              textAlign: "center",
              lineHeight: 25,
              color: "white",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            XONG
          </Text>
        </TouchableOpacity>

      </View>
    </View>
  );
};
export default ChoiceColor;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  header: {
    flex: 2,
    flexDirection: "row",
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    flex: 8,
    backgroundColor: "#c4c4c4",
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    height: 100,
    width: 100,
    resizeMode: "contain",
    right: 65,
  },
  black: {
    height: 100,
    width: 100,
    backgroundColor: "black",
  },
  red: {
    height: 100,
    width: 100,
    backgroundColor: "red",
    marginTop: 10,
  },
  blue: {
    height: 100,
    width: 100,
    backgroundColor: "blue",
    marginTop: 10,
  },
  silver: {
    height: 100,
    width: 100,
    backgroundColor: "#C5F1FB",
    marginTop: 10, 
  },
  chon: {
    backgroundColor: "#4d6dc1",
    borderColor: "red",
    borderWidth: 1,
    width: 300,
    height: 30,
    marginTop: 30,
    borderRadius: 5,
    textAlign: "center",
  },
});
