import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function App() {
  return (
    <View style={styles.container} >
    <ImageBackground source={require('./assets/background1a.png')}
      style={styles.image} >

      <View style={styles.viewTitle} >
        <Text style={styles.title1} > CODE </Text> 
        <Text style={styles.title2} > VERIFICATION </Text> 
        <Text style={styles.title3} > Enter online password sent on</Text> 
        <Text style={styles.title4} >++849092605798</Text> </View>

                <View style={styles.viewTitle} >

                  <View style={styles.codebox} >
                    <View style={styles.codebox1}></View>
                    <View style={styles.codebox1}></View>
                    <View style={styles.codebox1}></View>
                    <View style={styles.codebox1}></View>
                    <View style={styles.codebox1}></View>
                    <View style={styles.codebox1}></View>
                  </View >
                </View>

                <View style={styles.viewButton} >
                  <Button title='VERIFI CODE'
                    color='#E3C000' />

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
                    marginTop: 80,
    },
                  title1: {
                    fontSize: 50,
                  textAlign: 'center',
                  fontWeight: 'bold',
    },
                  title2: {
                    fontSize: 30,
                  textAlign: 'center',
                  fontWeight: 'bold',
    },
                  title3: {
                    marginTop: 50,
                  fontSize: 20,
                  textAlign: 'center',
                  fontWeight: 'bold',
    },
                  title4: {
                    fontSize: 20,
                  textAlign: 'center',
                  fontWeight: 'bold',
    },
                  viewButton: {
                  marginTop: 50,
                  justifyContent: 'space-between',
                  width: '70%',
                  height: 50,
    },

                  codebox: {
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: '70%',
                  height: 50,
    },
                  codebox1: {
                  alignItems: 'center',
                  width: 50,
                  height: 50,
                  borderWidth: 1,
                  borderColor: '#000000',
    },

})