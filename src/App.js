/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Node } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import HomeScreen from './screens/Home';
import ProductsScreen from './screens/Products';
import VendorDashboard from './screens/VendorDashboard';
import VendorStore from './screens/VendorStore';
import OffersScreen from './screens/Offers';
import ProfileScreen from './screens/Profile';
import ProductList from './screens/ProductList';
import VendorProfile from './screens/VendorProfile';
import EditVendorProfile from './screens/EditVendorProfile';
import AddOffer from './screens/AddOffer';
import ActiveOffers from './screens/ActiveOffers';
import Order from './screens/Order';
import OrderDetails from './screens/OrderDetails'

const Section = ({ children, title }) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
};
const HomeStack = createNativeStackNavigator();
const ProductStack = createNativeStackNavigator();
const OfferStack = createNativeStackNavigator();
const profileStack = createNativeStackNavigator();


function Home() {
  return (
    <HomeStack.Navigator screenOptions={{headerShown: false}}>
      <HomeStack.Screen name="HomeScreen" component={Order} Options={{ header: () => true }} />
      <HomeStack.Screen name="OrderDetails" component={OrderDetails} Options={{ header: () => true }} />
      <HomeStack.Screen name="VendorDashboard" component={VendorDashboard} />
      {/* <HomeStack.Screen name="Settings" component={Settings} /> */}
    </HomeStack.Navigator>
  );
}

function Product() {
  return (
    <ProductStack.Navigator screenOptions={{headerShown: false}}>
      <ProductStack.Screen name="VendorStore" component={VendorStore} Options={{ header: () => true }} />
      <ProductStack.Screen name="ProductList" component={ProductList} Options={{ header: () => true }} />
      <ProductStack.Screen name="VendorDashboard" component={VendorDashboard} />
      {/* <ProductStack.Screen name="Settings" component={Settings} /> */}
    </ProductStack.Navigator>
  );
}

function offers() {
  return (
    <OfferStack.Navigator screenOptions={{headerShown: false}}>
      <OfferStack.Screen name="AddOffer" component={AddOffer} Options={{ header: () => true }} />
      <OfferStack.Screen name="ActiveOffers" component={ActiveOffers} Options={{ header: () => true }} />
      <OfferStack.Screen name="VendorDashboard" component={VendorDashboard} />
      {/* <OfferStack.Screen name="Settings" component={Settings} /> */}
    </OfferStack.Navigator>
  );
}

function Profile() {
  return (
    <profileStack.Navigator screenOptions={{headerShown: false}}>
      <profileStack.Screen name="VendorProfile" component={VendorProfile} Options={{ header: () => true }} />
      <profileStack.Screen name="EditVendorProfile" component={EditVendorProfile} Options={{ header: () => true }} />
      <profileStack.Screen name="VendorDashboard" component={VendorDashboard} />
      {/* <profileStack.Screen name="Settings" component={Settings} /> */}
    </profileStack.Navigator>
  );
}

const Tab = createMaterialBottomTabNavigator();

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#DB3022"
        inactiveColor="#9B9B9B"
        barStyle={{ backgroundColor: '#ffffff' }}
        shifting={false}

        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, size, color }) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = 'home';
              size = focused ? 23 : 20
            } else if (route.name === 'Products') {
              iconName = 'store';
              size = focused ? 23 : 20
            } else if (route.name === 'Offers') {
              iconName = 'percent';
              size = focused ? 23 : 20
            }
            else if (route.name === 'Profile') {
              iconName = 'user-cog';
              size = focused ? 23 : 20
            }
            return (
              <FontAwesome5
                name={iconName}
                size={size}
                color={color}
              />
            )
          },
        })}
      >
        <Tab.Screen name="Home" component={Home} />
        <Tab.Screen name="Products" component={Product} />
        <Tab.Screen name="Offers" component={offers} />
        <Tab.Screen name="Profile" component={Profile} />
      </Tab.Navigator>
    </NavigationContainer>

  );
};

const styles = StyleSheet.create({
});

export default App;
