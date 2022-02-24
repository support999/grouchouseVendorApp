import React from "react";
import {
    StyleSheet,
    View,
    Text
} from 'react-native';

export default function ProfileScreen(){
    return(
        <View>
            <Text>
                Profile Page
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    body:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text: {
        fontSize: 20,
        color: '#000000'
    }
})