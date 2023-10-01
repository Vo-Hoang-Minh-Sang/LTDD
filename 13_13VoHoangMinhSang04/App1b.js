import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, ImageBackground } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function App() {
    return ( <
        View style = { styles.container } >
        <
        ImageBackground source = { require('./assets/background1a.png') }
        style = { styles.image } >

        <
        View style = { styles.viewLogo } >
        <
        Image style = { styles.logo }
        source = { require('./assets/lock.png') }
        /> < /
        View >

        <
        View style = { styles.viewTitle } >
        <
        Text style = { styles.title1 } > FORGET < /Text> <
        Text style = { styles.title2 } > PASSWORD < /Text> <
        Text style = { styles.title3 } > Provide your account 's email for which you< /Text> <
        Text style = { styles.title4 } > want to reset your password < /Text> < /
        View >

        <
        View style = { styles.viewTitle } >

        <
        View style = {styles.emailbox
            
        } >
        <
        Image style = { styles.mail } source = { require('./assets/mail.png') }></Image>
        <
        Text style = { styles.title4 } > Email < /Text>   < /
        View > <
        /
        View >


        <
        View style = { styles.viewButton } >
        <
        Button title = 'Next'
        color = '#E3C000' / >
        <
        /View>  < /
        ImageBackground > <
        /View>
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
    viewLogo: {
        marginTop: 15,
    },
    logo: {
        width: 150,
        height: 150,
    },
    viewTitle: {
        marginTop: 80,
    },
    title1: {
        fontSize: 30,
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
        fontSize: 18,
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
        width: '80%',
        height: 50,
    },
    emailbox: {
        flexDirection: "row",
        backgroundColor: "#C4C4C4", 
        width: 300, height: 45, 
        paddingHorizontal: 8,  
        paddingVertical: 5 
    },
    mail: {
        width: "10%",
        height: "100%",
    },

})