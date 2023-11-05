import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Image, Pressable, TextInput } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Home = ({ navigation, route }) =>  {
    return ( <
        View style = { styles.container } >
            <View style={{width:271,height:271}}>
            <Image source={require('./img/Image 95.png')} style={{width:271,height:271}}></Image>
            </View>
            <View >
                <Text style={{fontSize:30, color: '#8353E2', fontWeight:'bold'}}><center>MANAGER YOUR<br></br>TASK</center></Text>
            </View>
            <View style={{
                width:334,
                height:43, 
                borderWidth:1,
                alignItems:'center',
                flexDirection:'row', 
                marginTop:30, 
                borderRadius: 12}}>
                <Image source={require('./img/Frame.png')} style={{width:20,height:20, margin:10}}></Image>
                <TextInput style={{width: 334, height: 43, borderColor: "#BCC1CA", paddingLeft: 30, fontSize: 16}}
          placeholder="Enter your name"
          placeholderTextColor={"#BCC1CA"}
        />
            
            </View>
            <Pressable
            onPress={() => navigation.navigate("Screen2",{id:1})}
            style={{backgroundColor:'#00BDD6', 
            width:190,height:44, 
            justifyContent:'center',
            borderRadius:10, 
            alignItems:'center', 
            marginTop:50}}>
                <Text>Get Started</Text>
            </Pressable>
        </View>
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