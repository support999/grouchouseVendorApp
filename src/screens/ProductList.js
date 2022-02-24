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
const ProductList = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [modalVisible, setModalVisible] = useState(false);
  
  const PriceModal = () => {
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
              <TextInput style={modalStyles.input} placeholder='Enter Selling Price  '></TextInput>
              <TextInput style={modalStyles.input} placeholder='Enter Selling Price  '></TextInput>
              <Pressable
                style={[modalStyles.button, modalStyles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}
              >
                <Text style={modalStyles.textStyle}>Submit</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    )
  }

  return (        
      <View style={styles.main}>
          <View style={styles.header}>
            <TouchableOpacity style={styles.TOback} onPress={() => navigation.goBack()}>
              <AntDesign style={styles.backIcon} name="left" color="black" />
            </TouchableOpacity>
              <Text style={[styles.storeName, {color : 'black', fontSize: 18, fontWeight: 'bold'}]} >Foodgrains, Oil & Masala</Text>
              <TouchableOpacity style={styles.closeIcon} onPress={() => navigation.navigate('VendorDashboard')}>
              <Ionicons name="ios-swap-vertical" style={styles.closeIcon1}  />
              </TouchableOpacity> 
              <TouchableOpacity style={styles.closeIcon} onPress={() => navigation.navigate('FreqentSearch')}>
                  <AntDesign name="filter" style={styles.closeIcon1} color="black" color="black" />
              </TouchableOpacity> 
          </View>
      
          <SearchBar></SearchBar>
          
      <ScrollView style={styles.previousYou}>
  
            {/* <View style={styles.previousYouGrid}> */}
                <TouchableOpacity style={styles.previousYouItem} >
                    <Image style={styles.previousItemLogo} source={require('./../assets/product1.png')} ></Image>
                        <View style={styles.previousItemInfo}>
                            <View style={{flexDirection:"row", justifyContent:'space-between'}}>
                            <Text style={styles.previousItemName}>American Garden U.S. Peanut Butter Chunky</Text>
                            <View >
                            <Switch
                                trackColor={{ false: "#767577", true: "#81b0ff" }}
                                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                                />
                            </View> 
                            </View>
                            
                        <Text style={styles.previousItemPriceQtt}>60/ kg</Text> 
    
                        <View style={styles.previousItemRSandBuy}>
                                <Text style={styles.previousItemRS}>RS 35</Text>
                                <Text style={styles.previousItemSP}>Selling Price  33</Text>
                        <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.previousItemBTN}>
                          <FontAwesome5 name="edit" style={{color:'#7C7C7C'}} size={24} color="black" />
                        </TouchableOpacity>
                        </View>  
                    </View>            
                </TouchableOpacity>
                <TouchableOpacity style={styles.previousYouItem} >
                    <Image style={styles.previousItemLogo} source={require('./../assets/product1.png')} ></Image>
                        <View style={styles.previousItemInfo}>
                            <View style={{flexDirection:"row", justifyContent:'space-between'}}>
                            <Text style={styles.previousItemName}>American Garden U.S. Peanut Butter Chunky</Text>
                            <View >
                            <Switch
                                trackColor={{ false: "#767577", true: "#81b0ff" }}
                                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                                />
                            </View> 
                            </View>
                            
                        <Text style={styles.previousItemPriceQtt}>60/ kg</Text> 
    
                        <View style={styles.previousItemRSandBuy}>
                                <Text style={styles.previousItemRS}>RS 35</Text>
                                <Text style={styles.previousItemSP}>Selling Price  33</Text>
                        <View style={styles.previousItemBTN}>
                        <FontAwesome5 name="edit" style={{color:'#7C7C7C'}} size={24} color="black" />
                        </View>
                        </View>  
                    </View>            
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.previousYouItem} >
                    <Image style={styles.previousItemLogo} source={require('./../assets/product1.png')} ></Image>
                        <View style={styles.previousItemInfo}>
                            <View style={{flexDirection:"row", justifyContent:'space-between'}}>
                            <Text style={styles.previousItemName}>American Garden U.S. Peanut Butter Chunky</Text>
                            <View >
                            <Switch
                                trackColor={{ false: "#767577", true: "#81b0ff" }}
                                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                                />
                            </View> 
                            </View>
                            
                        <Text style={styles.previousItemPriceQtt}>60/ kg</Text> 
    
                        <View style={styles.previousItemRSandBuy}>
                                <Text style={styles.previousItemRS}>RS 35</Text>
                                <Text style={styles.previousItemSP}>Selling Price  33</Text>
                        <View style={styles.previousItemBTN}>
                        <FontAwesome5 name="edit" style={{color:'#7C7C7C'}} size={24} color="black" />
                        </View>
                        </View>  
                    </View>            
                </TouchableOpacity>
                <TouchableOpacity style={styles.previousYouItem} >
                    <Image style={styles.previousItemLogo} source={require('./../assets/product1.png')} ></Image>
                        <View style={styles.previousItemInfo}>
                            <View style={{flexDirection:"row", justifyContent:'space-between'}}>
                            <Text style={styles.previousItemName}>American Garden U.S. Peanut Butter Chunky</Text>
                            <View >
                            <Switch
                                trackColor={{ false: "#767577", true: "#81b0ff" }}
                                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                                />
                            </View> 
                            </View>
                            
                        <Text style={styles.previousItemPriceQtt}>60/ kg</Text> 
    
                        <View style={styles.previousItemRSandBuy}>
                                <Text style={styles.previousItemRS}>RS 35</Text>
                                <Text style={styles.previousItemSP}>Selling Price  33</Text>
                        <View style={styles.previousItemBTN}>
                        <FontAwesome5 name="edit" style={{color:'#7C7C7C'}} size={24} color="black" />
                        </View>
                        </View>  
                    </View>            
                </TouchableOpacity>
                <TouchableOpacity style={styles.previousYouItem} >
                    <Image style={styles.previousItemLogo} source={require('./../assets/product1.png')} ></Image>
                        <View style={styles.previousItemInfo}>
                            <View style={{flexDirection:"row", justifyContent:'space-between'}}>
                            <Text style={styles.previousItemName}>American Garden U.S. Peanut Butter Chunky</Text>
                            <View >
                            <Switch
                                trackColor={{ false: "#767577", true: "#81b0ff" }}
                                thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
                                ios_backgroundColor="#3e3e3e"
                                onValueChange={toggleSwitch}
                                value={isEnabled}
                                />
                            </View> 
                            </View>
                            
                        <Text style={styles.previousItemPriceQtt}>60/ kg</Text> 
    
                        <View style={styles.previousItemRSandBuy}>
                                <Text style={styles.previousItemRS}>RS 35</Text>
                                <Text style={styles.previousItemSP}>Selling Price  33</Text>
                        <View style={styles.previousItemBTN}>
                          <FontAwesome5 name="edit" style={{color:'#7C7C7C'}} size={24} color="black" />
                        </View>
                        </View>  
                    </View>            
                </TouchableOpacity>
        {/* </View> */}
        <PriceModal></PriceModal>
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
      flexDirection: 'row',
      width: '90%',
      marginLeft: '5%',
      borderBottomColor: '#F7F7F7',
      borderBottomWidth: 1,
      paddingBottom: 20
    },
    TOback: {
      flexDirection: 'column'
    },
    backIcon: {
      fontSize: 22,
      color: 'black',
      fontWeight: '600',
      marginTop: '60%'
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
    //   marginRight: 3,
      color: '#7F7F7F',
      fontSize: 23,
      textAlign: 'right'
  },
  closeIcon1:{
    // flex: 1,
    // marginTop: 13,
    // marginRight: 3,
    color: '#7F7F7F',
    fontSize: 23,
      textAlign: 'right',
    color:"#000000"
  },
    greenText: {
    color: '#2C9309',
    fontSize: 12
  },
  category: {
    marginLeft: 15,
    marginRight: 15,
    marginTop: 18,
    flexDirection: 'column',
    // flex: 1
  },
  categorySectionHeader: {
    flex: 1,
    flexDirection: 'row',
    marginTop: 0,
  },
  categorySectionHeaderCategory: {
    flex: 1,
    fontWeight: 'bold',
      fontSize: 14,
      color: '#22292E',
      textAlign: 'left',
      height: 30
  },
  categorySectionHeaderBtn: {
      // flex: 1,
      fontSize: 14,
      color: '#54B175',
      textAlign: 'right',
      height: 30
  },
  categorySectionGrid: {
    // flex: 1,
    flexDirection: 'row', 
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 30
},
    categorySectionItem: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: Dimensions.get('window').width /5,
  },
  categoryItemLogoBG: {
    height: 50,
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: '#FFECE8'
  },
  recomItemLogoBG: {
    // height: 60,
    // width: 60,
    justifyContent: 'center',
    alignItems: 'center',
  },
  recomSectionItem: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: Dimensions.get('window').width /5,
  },
  RecomItemLogo: {
    width: 60,
    height: 60,
  },
  bgColor1: {
    backgroundColor: '#54B175'
  },

  bgColor2: {
    backgroundColor: "#FFF6E4",

  },
  bgColor3: {
    backgroundColor: "#F1EDFC",

  },
  categoryItemLogo: {
    borderRadius: 25,
    width: 20
},
categoryItemName: {
    color: '#22292E',
    fontSize: 12,
  fontWeight: '400',
  lineHeight: 20,
    marginTop: 8
},
categoryItemDistance: {
    color: '#7F7F7F',
    fontSize: 12,
    lineHeight: 22,
},
categoryItemRating: {
    height: 12,
    width: 12,
    color: '#FFBA49'
  },
  previousYou: {
    marginLeft: 15,
    marginRight: 15,
  },
  previousYouHeader: {
    flexDirection: 'row',
    height: 30,
    marginTop: 1
  },
  previousYouHeaderFevorit: {
    color: '#000000',
    fontSize: 14,
    fontWeight: 'bold'
  }, 
  previousYouGrid: {
      // flex: 1,
  },
  previousYouItem: {
    marginBottom: 20,
    borderRadius: 20,
    flexDirection: 'row',
    height: 100
  },
  previousItemLogo: {
    height: 55,
    width: 55,
    marginLeft: 10,
    marginTop: 20,
    flexDirection: 'column'

  },
  previousItemInfo: {
    marginLeft: 15,
    marginTop: 10,
    flexDirection: 'column',
    flex: 1
  },
  previousItemName: {
    color: '#4D4D4D',
    fontSize: 14,
    width: '70%'
  },
  previousItemPriceQtt: {
    color: '#9B9B9B',
    fontSize: 10,
    lineHeight: 13,
    marginTop: 5,
    marginBottom: 5

  },
  previousItemRSandBuy: {
    // flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginTop: 6
  },
  previousItemRS: {
    color: '#222222',
    fontSize: 14,
    lineHeight: 20,
    fontWeight: 'bold'
    },
    previousItemSP: {
    color: '#2C9309',
    fontSize: 14,
    lineHeight: 20,
    fontWeight: 'bold'
    },
  previousItemBTN: {
    // height: 26,
    // width: 106,
    // borderWidth: 1,
    // borderStyle: 'solid',
    // borderColor: "#FF0909",
    // marginRight: '8%'
    // textAlign: 'right'
  },
  previousItemBTNtext: {
    fontSize: 12,
    color: '#FF0909',
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 3,
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
    // margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 50,
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
  input: {
    height: 33, 
    width: 132,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#F20505',
    marginTop: 5,
    marginBottom: 5,
    fontSize: 12
  },
  button: {
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#F20505",
    width: 81,
    height: 32,
    borderRadius: 10,
    marginTop: 5,
    justifyContent: 'center',
    alignItems:"center"
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

export default ProductList;