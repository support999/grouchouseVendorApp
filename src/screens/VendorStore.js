import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Dimensions, ImageBackground , SafeAreaView,} from 'react-native';
import  Ionicons  from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import  Entypo  from 'react-native-vector-icons/Entypo';
import  MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import  FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Favorit from './Favorit';
import SearchBar from './SearchBar';
import OfferSlide from './OfferSlide'

const { height, width } = Dimensions.get('screen')
import {
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';
const ProductList = [
    {
        id: 1,
        name: 'Foodgrains, Oil & Masala',
        other: 'Total Products 258',
        Active: 258
    },
    {
        id: 2,
        name: 'Gourmet & World Food',
        other: 'Brand 1, Brand 2, Brand 3.....',
        Active: 258
    },
    {
        id: 3,
        name: 'Item Subcategory',
        other: 'Paytm, Debit Card, Credit Card',
        Active: 258
    },
    {
        id: 4,
        name: 'Item Subcategory',
        other: 'Paytm, Debit Card, Credit Card',
        Active: 258
    },
    {
        id: 5,
        name: 'Item Subcategory',
        other: 'Paytm, Debit Card, Credit Card',
        Active: 258
    },
    {
        id: 6,
        name: 'Item Subcategory',
        other: 'Paytm, Debit Card, Credit Card',
        Active: 258
    },
]
const VendorStore = ({navigation}) => {

  return (        
        <View style={styles.main}>
          <View style={styles.header}>
            <TouchableOpacity style={styles.TOback}  onPress={() => navigation.goBack()}>
              <AntDesign style={styles.backIcon} name="left" color="black" />
            </TouchableOpacity>
              <Text style={[styles.headerName, {color : 'black', fontSize: 34, fontWeight: '900'}]} >Products</Text>
              {/* <Ionicons style={styles.closeIcon} name='close'  /> */}
              
          </View>

          <SearchBar></SearchBar>
            <ScrollView style={styles.listContainer}>
              
              {
                  ProductList.map((item) => {
                      return (
                          <TouchableOpacity style={styles.item} key={item.id} onPress={() => navigation.navigate('ProductList')}>
                              <View style={{
                                  flexDirection:"column",
                                  marginRight: 29,
                                    width: '80%'}}>
                                <View style={{flexDirection:"row"}}>
                                    <Text style={styles.itemName}>{item.name}</Text>
                                    
                                </View>
                                  <View style={{
                                      flexDirection: "row", justifyContent: 'space-between',marginTop: 8 }}>
                                    <Text style={styles.itemDetails}>{item.other}</Text>
                                    <Text style={[styles.active, { fontSize: 11, color: '#2C9309'}]}>Active Products {item.Active}</Text>
                                </View>
                              </View>
                              <View style={{
                                    alignSelf: "flex-end",
                                  marginRight: 29,
                                    marginBottom: 12,
                                    width: '5%'}}>
                                   <AntDesign style={styles.rightIcon} name="right" color="black" />
                              </View>
                              
                              
                        </TouchableOpacity>
                      )
                  })
              }

            </ScrollView>
          
        </View>
    );
  }
  
const styles = StyleSheet.create({
    main: {
      paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
      flex: 1,
      backgroundColor: '#fff',
    },
    header: {
      flexDirection: 'column',
      width: '90%',
      marginLeft: '5%',
      borderBottomColor: '#F7F7F7',
    },
    TOback: {
    },
    backIcon: {
      fontSize: 22,
      color: 'black',
      fontWeight: '600',
    },
    headerDetails: {
      marginLeft: 15,
      width: '80%'
    },
    headerName: {
      marginLeft: 2,
      marginTop: 10,
      fontSize: 1,
      fontWeight: '900',
      color: 'black'
    },
    closeIcon: {
      flex: 1,
      marginTop: 13,
      marginRight: 3,
      color: '#7F7F7F',
      fontSize: 23,
      textAlign: 'right'
      
    },
    listContainer: {
        flex: 1,
        flexDirection: 'column',
        // width: '100%',
        width: width,
        marginLeft: '5%',
        marginTop: 10
    },
    item: {
        borderBottomColor: '#F7F7F7',
		borderBottomWidth: 1,
        marginTop: 10,
        flexDirection: "row",
        height: 61,
    },
    itemName: {
        fontSize: 16,
        color: 'black',
        fontWeight: '400',
    },
    AntDesign: {
        fontSize: 16,
        color: '#9B9B9B',
        textAlign: 'right',
        alignSelf:"flex-end"
    },
    itemDetails: {
        fontSize: 11,
        color: '#9B9B9B',
    },
    itemNameIcon: {
        // flex: 1,
        flexDirection:"row"
    },
    rightIcon: {
        fontSize:12,
        paddingBottom: 12,
        color:'#9B9B9B'
    }

});

export default VendorStore;