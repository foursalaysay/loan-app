import { Link } from "expo-router";
import { Button, View } from "react-native";
import { StyleSheet } from "react-native";

export default function Page(){
    return(
        <View>
            <
            <Link href='/login' asChild>
                    <Button title="Login"/>
            </Link>
            <Link href='/register' asChild>
                    <Button title="Register"/>
            </Link>
        </View>
    )
}


const styles = StyleSheet.create({
    container : {
        flex  :1, 
        justifyContent : "center",
        alignItems : "center"
    }, 
    title : {
        fontSize  : 24,
        marginVertical : 10
    },
    image : {
        width : 200,
        height : 200,
        marginVertical : 10
    },
    button : {
        width : 50,
        height : 20, 
        backgroundColor : "skyblue"
    }
})

