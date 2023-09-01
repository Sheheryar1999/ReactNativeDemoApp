import react from "react";
import { StyleSheet, View, Text, Button, Linking } from "react-native";
import call from "react-native-phone-call";


export default function About(){

    const callHandler = () => {
        const arg = {

            number: '03325896542',
            prompt: false,
            skipCanOpen: false

        };

        call(arg).catch(console.error)
    };

    return(
        <View style={styles.container}>
            <Text>Contact Us</Text>

            <Button title="Call" onPress={callHandler}></Button>

            <Button title="Browser" 
            onPress={()=>Linking.openURL('https://www.google.com')}></Button>

            <Button title="Phone" 
            onPress={()=>Linking.openURL('tel: 123456789')}></Button>

            <Button title="SMS" 
            onPress={()=>Linking.openURL('sms: 123456789')}></Button>
            

        </View >
        
    )
}

const styles = StyleSheet.create({
    container: {
        padding:24
    }
});