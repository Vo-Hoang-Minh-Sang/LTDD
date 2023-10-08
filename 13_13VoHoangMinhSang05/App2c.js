import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('./assets/background.png')} style={styles.imgbg}>
        <center>
        <ImageBackground source={require('./assets/background_in.png')} style={styles.imgbgin}>
            <View style={styles.viewtitle}>
                <Text style={styles.title}>PASSWORD<br></br>GENERATOR</Text>
            </View>
            <center>
          <View style = {styles.boxblack}></View>
          </center>

        <View style = {styles.passwordlen}>
          <Text style = {styles.label}>Password length</Text>
          <View style = {styles.box}></View>
        </View>

        <View style = {styles.passwordlen}>
          <Text style={styles.label}>Include lower case letters</Text>
          <View style = {styles.checkbox}></View>
        </View>

        <View style = {styles.passwordlen}>
          <Text style={styles.label}>Include upcase letters</Text>
          <View style = {styles.checkbox}></View>
        </View>

        <View style = {styles.passwordlen}>
          <Text style={styles.label}>Include number</Text>
          <View style = {styles.checkbox}></View>
        </View>

        <View style = {styles.passwordlen}>
          <Text style={styles.label}>Include special symbol</Text>
          <View style = {styles.checkbox}></View>
        </View>

        <View style = { styles.viewgenerate }>
              <TouchableOpacity >
                <Text style = {styles.generatetext}> <center>GENERATE PASSWORD</center>  </Text> 
              </TouchableOpacity > 
        </View>
            
        </ImageBackground>
        </center>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  viewtitle:{
    margin:10,
  },
  title:{
    fontSize: 20,
    color: '#FFFFFF',
  },
  boxblack:{
    marginTop: 20,
    backgroundColor: '#151537',
    height: 55,
    width: 297,
  },
  passwordlen:{
    width: 280,
    marginTop: 40,
    left : 20,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  imgbg:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 360,
    height: 640,
  },
  imgbgin:{
    alignItems: 'center',
    justifyContent: 'center',
    height: 605,
    width: 322,
    marginTop: 15,
  },
  box:{
    backgroundColor: '#FFFFFF',
    height: 33,
    width: 118,
    marginRight: 10,
  },
  label:{
    fontSize: 15,
    color: '#FFFFFF',
  },
  checkbox:{
    backgroundColor: '#FFFFFF',
    height: 25,
    width: 25,
    marginRight: 10,
  },
  viewgenerate:{
    display: 'flex',
    alignItems: 'center',
    marginTop: 30
  },
  generatetext:{
    fontSize: 17,
    fontWeight: 'bold',
    display: 'flex',
    color: 'white',
    backgroundColor: '#3B3B98',
    width: 250,
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 5,
  }
});
