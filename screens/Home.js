import React, {useState} from "react";
import { StyleSheet, View, Text, Button, TouchableOpacity, FlatList } from "react-native";
import Details from "./Details";

export default function Home({navigation}){

    const [reviews, setReviews] = useState([
        {title: 'Book 1', rating: 2.2, body: "Kuch bhi karlo", key: 1},
        {title: 'Book 2', rating: 6.4, body: "Kuch bhi karlo", key: 2},
        {title: 'Book 3', rating: 3.1, body: "Kuch bhi karlo", key: 3},
        
    ]);


    const pressHandler = () =>{
        navigation.navigate('Details')
    }

    const pressHandler2 = () =>{
        //navigation.navigate('About');
        navigation.push('About');
    }

    return(
        <View style={styles.container}>
            <FlatList 
                data = {reviews}
                renderItem = {({item}) => (
                    <TouchableOpacity onPress={()=>navigation.navigate('Details', item)}>
                        <Text>Book Title: {item.title}</Text>
                        <Text>Review: {item.body}</Text>
                        
                    </TouchableOpacity>
                )}
            />
            <Button title="Details" onPress={pressHandler}/>
            <Button title="About" onPress={pressHandler2}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding:24
    }
});