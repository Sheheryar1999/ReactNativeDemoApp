import react from "react";
import { StyleSheet, View, Text, Button } from "react-native";

export default function Details({navigation}){

    const PopDemo=()=>{
        navigation.goBack();
    }

    return(
        <View style={styles.container}>
                       
            <Text>Book Title: { navigation.getParam("title")}</Text>
            <Text>Book Rating: { navigation.getParam("rating")}</Text>


            <Button title="About"/>
            <Button title="Pop Demo" onPress={PopDemo}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding:24
    }
});