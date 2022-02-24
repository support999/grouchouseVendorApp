import React from 'react'
import {
    StyleSheet,
    View,
    Text,
    Pressable
} from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';

import PendingOrdersScreen from './orders_screens/pending_orders';
import DeliveredOrdersScreen from './orders_screens/delivered_orders';
import CancelledOrdersScreen from './orders_screens/cancelled_orders';

const Tab = createMaterialTopTabNavigator();

export default function HomeScreen({ navigation }) {

    // const onPressHandler = () => {
    //     navigation.navigate('Products')
    // }

    return (
        <Tab.Navigator
            initialRouteName="Pending"
            activeColor="#DB3022"
            inactiveColor="#9B9B9B"
            shifting={false}
            sceneContainerStyle= {{
                padding: 10
            }}

            screenOptions={({ route, focused, active }) => ({
                tabBarStyle: { 
                    // backgroundColor: '#fff',
                 },
                // tabBarLabelStyle: {
                //     padding:0,
                // },
                tabBarActiveTintColor: "#DB3022",
                tabBarActiveBackgroundColor: "#DB3022",
                tabBarInactiveTintColor: "#9B9B9B",
                tabBarItemStyle: {
                    borderRadius: 30,
                    backgroundColor: focused ?'#000' : '#0ff',
                    // backgroundColor:'#000',
                    marginTop: 5,
                    marginBottom: 5,
                    marginLeft: 10,
                    marginRight: 10,
                    padding: 0,
                },
                // tabBarIndicatorStyle: { backgroundColor: '#000', height: 30 }
            })}
        >
            <Tab.Screen name="Delivered" component={DeliveredOrdersScreen} />
            <Tab.Screen name="Cancelled" component={CancelledOrdersScreen} />
            <Tab.Screen name="Pending" component={PendingOrdersScreen} />
        </Tab.Navigator>
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