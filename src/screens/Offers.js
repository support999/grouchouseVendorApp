import React from "react";
import {
    StyleSheet,
    View,
    Text,
    Pressable
} from 'react-native'


export default function OffersScreen(){
    return (
        <View style={styles.body}>
            <Text style={ styles.text }>
                Offers Page
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
    text: {
        fontSize: 20,
        color: '#000000'
    }
})