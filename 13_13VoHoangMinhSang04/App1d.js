import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container} >
    <ImageBackground source={require('./assets/background1d.png')}
      style={styles.image} >

      <View style={styles.viewTitle} >
        <Text style={styles.title1} > LOGIN </Text> 
      </View>
      <View style={styles.emailbox} >
        <Text style={styles.title2} > Email </Text>
      </View>
      <View style={styles.emailbox} >
        <Text style={styles.title2} > Password </Text>
        <Image style={styles.eye} source={require('./assets/eye.png')}></Image>
      </View>

      <View style={styles.viewButton} >
      <Button title='LOGIN'
          color='#E53935' />
      </View>
      <View style={styles.viewTitle} >
        <Text style={styles.title3} > When you agree to terms and conditions </Text>
        <Text style={styles.title4} > For got your password? </Text>
        <Text style={styles.title5} > Or login with</Text>
      </View> 
    </ImageBackground > 
  </View>

  );
}



    const styles = StyleSheet.create({
      container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
      image: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    viewTitle: {
      marginTop: 10,
    },
    title1: {
      fontSize: 50,
      textAlign: 'center',
      fontWeight: 'bold',
    },
      title2: {
      fontSize: 20,
      textAlign: 'center',
    },
      title3: {
      marginTop: 50,
      fontSize: 20,
      textAlign: 'center',
    },
    title4: {
      fontSize: 20,
      textAlign: 'center',
      color: '#5D25FA',
    },
    title5: {
      fontSize: 20,
      textAlign: 'center',
    },
    viewButton: {
      marginTop: 50,
      justifyContent: 'space-between',
      width: '70%',
      height: 70,
    },
    emailbox: {
      marginTop: 20,
      justifyContent: 'space-between',
      width: '70%',
      height: 50,
      flexDirection: 'row',
      backgroundColor: '#C4C4C44D',
    },
    eye: {
      width: 20,
      height: 20,
      marginTop: 15,
    },
})