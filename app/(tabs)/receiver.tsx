import { Link } from "expo-router"
import { View, Text } from "react-native"

const receiverLinks = [
    { id: 1, name: 'Link 1', url: 'https://example.com/1' },
    { id: 2, name: 'Link 2', url: 'https://example.com/2' },
    { id: 3, name: 'Link 3', url: 'https://example.com/3' },
  ];

const ReceiverList = () => {
    return(
        <View>
            {receiverLinks.map((link) => (
                <View key={link.id} style={{ marginBottom: 10 }}>
                    <Text>{link.name}</Text>
                </View>
            ))}
        </View>
    )
}