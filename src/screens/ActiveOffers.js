import React,  { useState } from 'react';
import { StyleSheet, Switch, Text, View, TextInput, TouchableOpacity, Image, Dimensions, ImageBackground , SafeAreaView,} from 'react-native';
import  Ionicons  from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import  Entypo  from 'react-native-vector-icons/Entypo';
import  MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import  FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Favorit from './Favorit';
import SearchBar from './SearchBar';
import OfferSlide from './OfferSlide'

import {
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';
const ActiveOffers = ({navigation}) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (        
    <View style={styles.main}>
        <View style={styles.header}>
            <TouchableOpacity style={styles.TOback} onPress={() => navigation.goBack()}>
                <AntDesign style={styles.backIcon} name="left" color="black" />
            </TouchableOpacity>
        </View>
          
        <View style={styles.segment}>
            <View style={styles.segmentCol1}>
                <Text style={styles.segmentText}>Offers</Text>
            </View>
            <TouchableOpacity style={styles.segmentCol2} onPress={() => navigation.navigate('AddOffer')}>
                <Text style={styles.segmentText2}>Add New Offer</Text>
            </TouchableOpacity>  
        </View>


        <View style={styles.listContainer}>
              <TouchableOpacity style={styles.item}>
                  <View style={styles.itemNameIcon}>
                      <Text style={styles.itemName}>50 Off</Text>
                      <AntDesign style={styles.AntDesign} name="right" color="black" />
                  </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.item}>
                  <View style={styles.itemNameIcon}>
                      <Text style={styles.itemName}>100 Off</Text>
                      <AntDesign style={styles.AntDesign} name="right" color="black" />
                  </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.item} >
                  <View style={styles.itemNameIcon}>
                      <Text style={styles.itemName}>BOGO</Text>
                      <AntDesign style={styles.AntDesign} name="right" color="black" />
                  </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.item} >
                  <View style={styles.itemNameIcon}>
                      <Text style={styles.itemName}>GET2</Text>
                      <AntDesign style={styles.AntDesign} name="right" color="black" />
                  </View>
              </TouchableOpacity>

              <TouchableOpacity style={styles.item} >
                  <View style={styles.itemNameIcon}>
                      <Text style={styles.itemName}>50 Off</Text>
                      <AntDesign style={styles.AntDesign} name="right" color="black" />
                  </View>
              </TouchableOpacity>


          </View>
  
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
        flexDirection: 'row',
        height: 50
    },
    TOback: {
        flexDirection: 'column',
        alignSelf: "center"
    },
    backIcon: {
        fontSize: 22,
        color: '#222222',
        fontWeight: '600',
        marginLeft: 15
    },
    segment: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 15,
        marginRight: 15
    },
    segmentCol1: {
        width: 160,
        height: 39,
        borderRadius: 2,
        // justifyContent: "center",
        alignItems:"flex-start"
    },
    segmentCol2: {
        backgroundColor: "#222222",
        width: 160,
        height: 36,
        borderRadius: 5,
        justifyContent: "center",
        alignItems:"center"

    },
    segmentText: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#222222'
    },
    segmentText2: {
        fontSize: 14,
        fontWeight: '600',
        color: '#FFFFFF',
    },
    listContainer: {
        flex: 1,
        flexDirection: 'column',
        // // width: '100%',
        // width: width,
        marginLeft: '5%',
        marginTop: '5%'
    },
    item: {
        borderBottomColor: '#F7F7F7',
		borderBottomWidth: 1,
        marginTop: 10,
        paddingBottom: 10
        // height: '10%',
    },
    itemName: {
        fontSize: 16,
        color: 'black',
        width: '85%',
        fontWeight: '400',
    },
    AntDesign: {
        fontSize: 12,
        color: '#9B9B9B',
        marginTop: 10,
        marginBottom: 10
    },
    itemDetails: {
        fontSize: 11,
        color: '#9B9B9B',
    },
    itemNameIcon: {
        // flex: 1,
        flexDirection:"row"
    },
    
 
});

const stylesBtn = StyleSheet.create({
    declineBtn: {
        justifyContent: 'center',
        alignItems:'center',
        height: 36,
        width: 160,
        borderRadius: 24,
        borderWidth: 1,
        borderColor: '#22222'
      },
      accetpBtn: {
        justifyContent: 'center',
        alignItems:'center',
        height: 36,
        width: 160,
        borderRadius: 24,
        backgroundColor: "#FF0606",
        color: '#ffff',
      },
      btnFont: {
        fontSize: 14,
        fontWeight: '600',
      },
      white: {
        color:'#FFFFFF'
      }

})

export default ActiveOffers;