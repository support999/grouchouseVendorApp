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
const AddOffer = ({navigation}) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  return (        
    <View style={styles.main}>
        <View style={styles.header}>
            <TouchableOpacity style={styles.TOback} onPress={() => navigation.goBack()}>
                <AntDesign style={styles.backIcon} name="left" color="black" />
            </TouchableOpacity>
            <View style={{alignItems:'center', width: '100%', marginLeft: -36}}>
                <Text style={[styles.storeName, {color : '#FFFFFF', fontSize: 18, fontWeight: 'bold', }]} >Add New Offer</Text>
            </View>
        </View>

            <View style={styles.form}>
                <View style={styles.formRow1}> 
                    <View style={styles.formCol1}>
                        <Text style={styles.formText}>Offer Code</Text>
                    </View>
                    <View style={styles.formCol2}>
                        <TextInput style={styles.formInput} placeholder='Offer Code'></TextInput>
                    </View>
              </View>
              
              <View style={styles.formRow1}> 
                    <View style={styles.formCol1}>
                        <Text style={styles.formText}>Description</Text>
                    </View>
                    <View style={styles.formCol2}>
                        <TextInput style={[styles.formInput, {height: 72}]} placeholder='Description'></TextInput>
                    </View>
              </View>
              <View style={styles.formRow1}> 
                    <View style={styles.formCol1}>
                        <Text style={styles.formText} >Min Order Value</Text>
                    </View>
                    <View style={styles.formCol2}>
                        <TextInput style={styles.formInput} placeholder='0'></TextInput>
                    </View>
              </View>
              <View style={styles.formRow1}> 
                    <View style={styles.formCol1}>
                        <Text style={styles.formText}>Offer Method</Text>
                    </View>
                    <View style={styles.formCol2}>
                        <TextInput style={styles.formInput} placeholder='Percentage'></TextInput>
                    </View>
              </View>
              <View style={styles.formRow1}> 
                    <View style={styles.formCol1}>
                        <Text style={styles.formText}></Text>
                    </View>
                    <View style={styles.formCol2}>
                        <TextInput style={styles.formInput} placeholder='Enter Percentage'></TextInput>
                    </View>
              </View>
              <View style={styles.formRow1}> 
                    <View style={styles.formCol1}>
                        <Text style={styles.formText}>Max Amount</Text>
                    </View>
                    <View style={styles.formCol2}>
                        <TextInput style={styles.formInput} placeholder='0'></TextInput>
                    </View>
              </View>
              <View style={styles.formRow1}> 
                    <View style={styles.formCol1}>
                        <Text style={styles.formText}>Auto Apply</Text>
                    </View>
                    <View style={styles.formCol2}>
                        <Switch
                            style={styles.switch}
                            trackColor={{ false: "#767577", true: "#81b0ff" }}
                            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            // onValueChange={toggleSwitch}
                            // value={isEnabled}
                        />
                    </View>
              </View>
              <View style={styles.formRow1}> 
                    <View style={styles.formCol1}>
                        <Text style={styles.formText}>Enable</Text>
                    </View>
                    <View style={styles.formCol2}>
                        <Switch
                            style={styles.switch}
                            trackColor={{ false: "#767577", true: "#81b0ff" }}
                            thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                            ios_backgroundColor="#3e3e3e"
                            // onValueChange={toggleSwitch}
                            // value={isEnabled}
                        />
                    </View>
              </View>
              
            <View style={{flexDirection:"row", marginLeft: '7%', marginTop: 50,marginBottom: 50, justifyContent: 'space-around'}}>
                <TouchableOpacity style={stylesBtn.declineBtn}>
                    <Text style={stylesBtn.btnFont} >Cancel</Text>
                </TouchableOpacity>
                <TouchableOpacity style={stylesBtn.accetpBtn} onPress={() => navigation.navigate('ActiveOffers')}>
                    <Text style={[stylesBtn.btnFont, stylesBtn.white]}>Save</Text>
                </TouchableOpacity>
            </View>
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
        backgroundColor: '#000000',
        // width: '90%',
        // paddingLeft: 26,
        borderBottomColor: '#F7F7F7',
        borderBottomWidth: 1,
        height: 50
    },
    TOback: {
        flexDirection: 'column',
        alignSelf: "center"
    },
    backIcon: {
        fontSize: 22,
        color: '#FFFFFF',
        fontWeight: '600',
        marginLeft: 15
    },
    headerDetails: {
        marginLeft: 15,
        width: '80%'
    },
    storeName: {
        marginLeft: 20,
        marginTop: 10,
        fontSize: 29,
        fontWeight: 'bold',
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
    form: {
        flexDirection: "column",
        marginTop: 20
    },
    formRow1: {
        flexDirection: "row",
        marginLeft: '5%',
        width: '90%',
        marginTop: 12
    },
    formCol1: {
        flexDirection: "column",
        flex: 1,
    },
    formCol2: {
        flexDirection: "column",
        flex: 2
    },
    formInput: {
        height: 36,
        fontSize: 14,
        fontWeight: '600',
        color: '#222222',
        borderWidth: 1,
        borderColor: '#4D4D4D',
        paddingLeft: 12
    },
    formText: {
        height: 36,
        fontSize: 14,
        fontWeight: '600',
        color:"#222222"
    },
    switch: {
        alignSelf:"flex-start"
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

export default AddOffer;