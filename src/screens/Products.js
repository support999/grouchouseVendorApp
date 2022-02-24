import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    Pressable
} from 'react-native'


export default function ProductsScreen({ navigation }) {

    const onPressHandler = () => {
        navigation.navigate('Home')
    }

    return (
        <View style={styles.body}>
            <Text style={styles.text}>
                Products Page
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    item: {
        margin: 10,
        backgroundColor: '#4ae1fa',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        fontSize: 20,
        margin: 10,
        color: '#000000'
    }
});