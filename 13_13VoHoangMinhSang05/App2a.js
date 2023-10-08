import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, ImageBackground, TouchableOpacity } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source ={require('./assets/bgimage.png')} style={styles.image}>
        <View style={styles.title}>
          <Text style={styles.title1}>LOGIN</Text>
        </View>
        <View style={styles.namebox}>
          <Image source= {require('./assets/avatar_user.png')} style={ styles.avt}></Image>
          <Text style={styles.title2}>Name</Text>
        </View>
        <View style={styles.namebox}>
          <Image source= {require('./assets/lock.png')} style={styles.avt}></Image>
          <Text style={styles.title2}>Password</Text>
          <Image source= {require('./assets/eye.png')} style={styles.eye}></Image>
        </View>
        <View style={styles.viewbtn}>
          <TouchableOpacity style={styles.btn}>
            <Text style={styles.title4 } >LOGIN</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.title}>
          <Text style={styles.title3}>Forgot your password?</Text>
        </View>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    //alignItems: 'center',
    //justifyContent: 'center',
  },
  image:{
    flex: 1,
    //height: 640,
    //width: 360,
    //alignItems:'center',
    justifyContent: 'space-evenly'
  },
  title:{
    margin:10,
  },
  title1:{
    width:150,
    height:50,
    fontSize: 30,
    textAlign: 'left',
    fontWeight: 'bold',
  },
  namebox:{
    left:20,
    height:40,
    width:"90%",
    flexDirection: 'row',
    backgroundColor: '#C4C4C44D'
  },
  title2:{
    fontSize: 30,
  },
  viewbtn: {
    left:20,
    justifyContent: "space-between",
    height: 50,
    width: '90%',
    backgroundColor: '#060000'
  },
  btn:{
    color:'#060000'
  },
  title3:{
    left:20,
    fontSize: 30,
    fontWeight: 'bold'
  },
  avt:{
    width:30,
    height:30,
  },
  eye:{
    left:140,
    width:30,
    height:30,
  },
  title4:{
    fontSize: 30,
    textAlign: 'center',
    justifyContent: 'center',
    color: '#FFFFFF'
  },
  btn:{
    height: 50,
    width: '100%',
  }
});
