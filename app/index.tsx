import { Link } from "expo-router";
import { Button, Image, Pressable, View, Text } from "react-native";
import { StyleSheet } from "react-native";



export default function Page(){

    const loginRoute = "/login";
    const registerRoute = "/register";
    return(
        <View style={styles.container}>
            <Image source={require('../assets/images/loan-app-logo.png')} style={styles.image} />
            <Link asChild href={loginRoute}>
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText}>Login</Text>
                </Pressable>
            </Link>
            <Link asChild href={registerRoute}>
                <Pressable style={styles.button}>
                <Text style={styles.buttonText}>Register</Text>
                </Pressable>
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
    button: {
        backgroundColor: '#28a745',  // Green background color
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',  // Center the text within the button
    },
    buttonText: {
        color: '#fff',  // White text color
        fontSize: 18,
        fontWeight: 'bold',
    },
})

