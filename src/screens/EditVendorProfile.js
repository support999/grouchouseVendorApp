import React, { useState }from 'react';
import { StyleSheet,Modal, Pressable, Text, View,Switch,  TextInput, TouchableOpacity, Image, Dimensions, ImageBackground , SafeAreaView,} from 'react-native';
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
const EditVendorProfile = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisible1, setModalVisible1] = useState(false);
  
  const AddressModel = () => {
    return (
      <View style={modalStyles.centeredView}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
          }}
        >
          <View style={modalStyles.centeredView}>
            <View style={modalStyles.modalView}>
                    <View style={modalStyles.header}>
                            <MaterialIcons style={modalStyles.headIcon} name="my-location" size={20} />
                        <Text style={modalStyles.headerText}>Select Location via map</Text>
                    </View>
                    <View style={modalStyles.addressV}>
                        <Text style={modalStyles.address}>
                            Room No 8, SOS Hostel, CISF Complex, DSector,
                            Govindpura, Bhopal
                        </Text>
                    </View>    
                <TextInput style={modalStyles.input} placeholder='pincode'></TextInput>
                <TextInput style={modalStyles.input} placeholder='city'></TextInput>
                <TextInput style={modalStyles.input} placeholder='Address 1'></TextInput>
                        <TextInput style={modalStyles.input} placeholder='Address 2'></TextInput>
                        <View style={{
                            flexDirection: 'row', justifyContent: "space-between", height: 35, marginTop: 10,
                        marginLeft: 0, width: '72%'}}>
                <Pressable
                    style={[modalStyles.button, modalStyles.buttonOpen]}
                    onPress={() => setModalVisible(!modalVisible)}
                >
                    <Text style={modalStyles.btnFont1}>Cancel</Text>
                            </Pressable>
                            <Pressable
                    style={[modalStyles.button, modalStyles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}
                >
                    <Text style={modalStyles.textStyle}>Save</Text>
                </Pressable>
                </View>
                
            </View>
          </View>
        </Modal>
      </View>
    )
    }
    
    const TimeModel = () => {
        return (
          <View style={modalStyles.centeredView}>
            <Modal
              animationType="slide"
              transparent={true}
              visible={modalVisible1}
              onRequestClose={() => {
                Alert.alert("Modal has been closed.");
                setModalVisible(!modalVisible1);
              }}
            >
            <View style={modalStyles.centeredView}>
            <View style={modalStyles.modalViewTimer}>
                        
            <View style={modalStyles.row}>
                <View style={{justifyContent: 'center', alignItems:"center", flexDirection:'column'}}>
                <Text >Monday</Text>
                </View>
                <View style={{flexDirection: 'column', marginLeft: -10}}>
                    <View style={modalStyles.lableBg}>
                        <Text style={modalStyles.lable}>Open</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <TextInput style={modalStyles.timeInput} placeholder='8:00'></TextInput>
                        <View style={modalStyles.timeBtn}>
                            <Pressable style={ modalStyles.timeBtn1}>
                                <Text style={modalStyles.timeTxt1}>am</Text>
                            </Pressable>
                            <Pressable style={ modalStyles.timeBtn2}>
                                <Text style={modalStyles.timeTxt2}>pm</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
                <View style={{flexDirection: 'column', marginRight:10}}>
                    <View style={modalStyles.lableBg}>
                        <Text style={modalStyles.lable}>Close</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <TextInput style={modalStyles.timeInput}
                        placeholder='8:00'></TextInput>
                        <View style={modalStyles.timeBtn}>
                            <Pressable style={ modalStyles.timeBtn1}>
                                <Text style={modalStyles.timeTxt1}>am</Text>
                            </Pressable>
                            <Pressable style={ modalStyles.timeBtn2}>
                                <Text style={modalStyles.timeTxt2}>pm</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
                
                
                
            </View> 
            <View style={{
                justifyContent: 'center', alignItems: "center", width: '100%',
                marginTop: 50,}}>
                <TouchableOpacity onPress={() => setModalVisible1(false)} style={{
                    justifyContent: 'center', alignItems: "center", width: 110,
                backgroundColor: '#FF0606', borderRadius: 25,
                height: 30}}> 
                    <Text style={{color: '#FFFFFF', fontSize: 12}}>Close</Text>
                </TouchableOpacity>
            </View>
                
            </View>
              </View>
            </Modal>
          </View>
        )
      }

  return (        
    <View style={styles.main}>

      <View style={{marginLeft: 25, marginBottom: 20}}>
        <TouchableOpacity style={styles.TOback}  onPress={() => navigation.goBack()}>
            <AntDesign style={styles.backIcon} name="left" color="black" />
        </TouchableOpacity>
      </View>
        <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.navigate('EditVendorProfile')} style={styles.storeNearYouItem}>
                <View>
                    <Image style={styles.storeNearItemLogo} source={require('./../assets/shopLogo.png')} ></Image>
                    <Pressable style={{justifyContent: 'center', alignItems:"center", marginTop: 5}} onPress={() => setModalVisible(!modalVisible)}>
                        <Text style={{fontSize: 11, color: '#7C7C7C'}}>Edit</Text>
                    </Pressable>
                </View>
                  
                <View style={styles.storeNearItemDetails}>
                    <View style={{width: '100%'}}>
                        <TextInput style={styles.input}  placeholder='Enter your store name..'></TextInput>
                        <Text style={styles.storeNearItemAddress}>Add your profile picture</Text>   
                    </View>
                </View>
            </TouchableOpacity>
        </View>
      
          <View style={{ width: '90%', marginLeft: '5%' }}>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                  <Text style={{color: '#000000', fontSize: 12, fontWeight: 'bold'}}>Enter Your Name / Vendor Name</Text>
              </View>

              <TouchableOpacity onPress={() => setModalVisible(true)} style={{ flexDirection: 'row', justifyContent: 'space-between' , marginTop: 30}}>
                  <Text style={{ color: '#000000', fontSize: 9, fontWeight: '300' }}>Vendor Store  Address</Text>
                  <AntDesign name="arrowright" size={12} color="#7F7F7F" />
              </TouchableOpacity>

              <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20}}>
                  <Text style={{ color: '#000000', fontSize: 9, fontWeight: '300' }}> Mobile Number |  UPI Connected</Text>
                  <AntDesign name="arrowright" size={12} color="#7F7F7F" />
              </TouchableOpacity>

              <TouchableOpacity onPress={() => setModalVisible1(true)} style={{justifyContent:'center', alignItems:"center", flexDirection: 'row', justifyContent: 'space-between', marginTop: 20,  marginLeft: 1, borderRadius: 10, borderColor: '#FF6B6B', borderWidth: 1, height: 42}}>
                  <Text style={{ color: '#2C9309', fontSize: 12, fontWeight: '300', marginLeft: 20 }}>Bussiness Hours</Text>
              </TouchableOpacity>

              <AddressModel></AddressModel>
              <TimeModel></TimeModel>
              
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
        flexDirection: 'column',
        width: '90%',
        marginLeft: '5%',
        borderBottomColor: '#F7F7F7',
        paddingBottom: 20
      },
      TOback: {
      //   flexDirection: 'column'
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
          marginLeft: '5%',
          marginTop: '5%'
      },
      item: {
        //   borderBottomColor: '#F7F7F7',
        //   borderBottomWidth: 1,
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
          fontSize: 16,
          color: '#9B9B9B',
          marginTop: 10,
      },
      itemDetails: {
          fontSize: 11,
          color: '#9B9B9B',
      },
      itemNameIcon: {
          // flex: 1,
          flexDirection:"row"
      },
      storeNearYouItem: {
          flexDirection: 'row',
        //   marginBottom: 20,
          borderColor: "#FF0909",
          borderRadius: 20,
        //   borderWidth: 1,
          flexDirection: 'row',
          paddingBottom: 5
        },
        storeNearItemLogo: {
          height: 75,
          width: 75,
          borderRadius: 19,
          marginLeft: 5,
          marginTop: 5
      
        },
        storeNearItemDetails: {
          marginLeft: 10,
          marginTop: 5,
          flexDirection: 'row',
          flex: 1
        },
        storeNearItemName: {
          color: '#000000',
          fontSize: 13,
          fontWeight: 'bold',
        },
        storeNearItemAddress: {
            color: '#000000',
            fontSize: 12,
            lineHeight: 22,
            marginLeft: 6,
            color:'#7F7F7F'
      
    },
    input: {
        height: 35,
        width: '80%',
        borderRadius: 5,
        borderWidth: 1,
        borderColor: 'gray'
        }
       

});
const modalStyles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 22
  },
    modalView: {
        height: '50%',
        width: '80%',
    backgroundColor: "white",
        borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
    },
    modalViewTimer: {
        height: '30%',
        width: '95%',
    backgroundColor: "white",
        borderRadius: 20,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
    },
    header: {
        flexDirection: "row",
        marginTop: 15,
        marginLeft: -30
    },
    headIcon: {
        color: "#F20505",
        fontSize: 16,
    },
    headerText: {
        fontSize: 16,
        lineHeight: 20,
        color: "#F20505",
        marginLeft: 12
    },
    addressV: {
        marginTop: 10,
        marginBottom: 10,
        lineHeight: 16,
    },
    address: {
        fontSize: 10,
        color: '#7F7F7F',
        lineHeight: 16,  
        width: 215,
    },
  input: {
    height: 33, 
    width: 215,
    borderRadius: 5,
    backgroundColor:'#C4C4C4',
    marginTop: 5,
    marginBottom: 5,
    fontSize: 12,
    paddingLeft: 10
  },
  button: {
  },
    buttonOpen: {
        borderRadius: 24, 
        borderColor: '#222222',
        borderWidth: 1,
        width: 110,
        justifyContent: 'center',
        alignItems:'center',
    },
    btnFont1: {
        fontSize: 14,
        fontWeight: '600',
        color:"#222222"
    },
  buttonClose: {
    backgroundColor: "#F20505",
    borderRadius: 24, 
    width: 110,
    justifyContent: 'center',
    alignItems:'center',
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
    },
  
    row: {
        width: '90%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginLeft: 25,
        marginRight: 25,
        marginTop: 30,
        alignItems: "center",
        // justifyContent:"center"
    },
    lableBg: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10
    },
    lable: {
        fontSize: 15,
        color: '#2C9309',
    },
    timeInput: {
        height: 30,
        width: 50,
        borderRadius: 30,
        paddingLeft: 15,
        paddingTop: 4,
        paddingBottom: 4,
        borderColor: '#FF6B6B',
        borderWidth: 1,
        fontSize: 12

    },
    timeBtn: {
        flexDirection: 'row',
        width: 50,
        borderRadius: 15,
        // borderWidth: 1,
        borderColor: '#EA2C2C',
        marginLeft: 3

    },
    timeTxt1: {
        fontSize: 10,
        color: '#000000',
    },
    timeTxt2: {
        fontSize: 10,
        color: '#FFFFFF',
    },
    timeBtn1: {
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        alignItems: "center",
        width: 30,
        borderWidth: 1,
        borderColor: '#EA2C2C',
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10
    },
    timeBtn2: {
        backgroundColor: '#F20505',
        justifyContent: 'center',
        alignItems: "center",
        width: 30,
        borderWidth: 1,
        borderColor: '#EA2C2C',
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10
    },
    

});

export default EditVendorProfile;