import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Image, Dimensions, ImageBackground , SafeAreaView,} from 'react-native';
import  Ionicons  from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import  Entypo  from 'react-native-vector-icons/Entypo';
import  MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import  FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Foundation from 'react-native-vector-icons/Foundation';
import Favorit from './Favorit';
import SearchBar from './SearchBar';
import OfferSlide from './OfferSlide';
import Chart from './Chart';

const { height, width } = Dimensions.get('screen')
import {
  ScrollView,
  StatusBar,
  useColorScheme,
} from 'react-native';
const VendorProfile = ({navigation}) => {

  return (        
      <View style={styles.main}>
          {/* <View style={{marginLeft: 25, marginBottom: 20}}>
            <TouchableOpacity style={styles.TOback}  onPress={() => navigation.goBack()}>
                <AntDesign style={styles.backIcon} name="left" color="black" />
            </TouchableOpacity>
          </View> */}

          <View style={styles.header}>
            <TouchableOpacity onPress={() => navigation.navigate('EditVendorProfile')} style={styles.storeNearYouItem}>
                <Image style={styles.storeNearItemLogo} source={require('./../assets/shopLogo.png')} ></Image>
                <View style={styles.storeNearItemDetails}>
                <View style={styles.storeNearItemInfo}>
                    <Text style={styles.storeNearItemName}>Vendor Store Name 1</Text>
                        <Text style={styles.storeNearItemAddress}>Vendor store address</Text>

                        <Text style={styles.storeNearItemDistance}>1.5 km
                        <Text style={styles.storeNearItemActive}>Open</Text>
                        </Text> 

                        <View style={styles.storeNearItemRatingDive1}>
                        <View style={styles.storeNearItemRatingDive2}>
                            <Text style={styles.storeNearItemTime}>Close at: 10:00 pm</Text> 
                        </View>
                    </View>  
                </View>
                    <View style={styles.storeNearItemDis}>
                        <View style={styles.storeNearItemDisIcons}>
                            <View style={{width: 20}}></View>
                            <MaterialIcons style={styles.storeNearItemRating1} name="perm-phone-msg" />
                        </View>
                        <View style={styles.storeNearItemActiveCount}>
                            <FontAwesome style={styles.storeNearItemRating} name="star"  />
                            <Text style={styles.storeNearItemRatingText}>4.2</Text>
                        </View>
                    </View>              
                </View>
            </TouchableOpacity>
              
          </View>


          <View style={styles.listContainer}>
              <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('VendorDashboard')} >
                  <View style={styles.itemNameIcon}>
                      <Text style={styles.itemName}>Dashboard</Text>
                      <AntDesign style={styles.AntDesign} name="right" color="black" />
                  </View>
                  <Text style={styles.itemDetails}>Total Sales, Total Revenue Etc</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('Home')}>
                  <View style={styles.itemNameIcon}>
                      <Text style={styles.itemName}>Order History</Text>
                      <AntDesign style={styles.AntDesign} name="right" color="black" />
                  </View>
                  <Text style={styles.itemDetails}>Past Orders, Customer Orders</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.item} >
                  <View style={styles.itemNameIcon}>
                      <Text style={styles.itemName} onPress={() => navigation.navigate('AddOffer')}>Settings</Text>
                      <AntDesign style={styles.AntDesign} name="right" color="black" />
                  </View>
                  <Text style={styles.itemDetails}>Profile, Notifications, passwords</Text>
              </TouchableOpacity>

              
            </View>


          
        </View>
    );
  }
  
const stylesList = StyleSheet.create({
storeNearYou: {
    marginLeft: 15,
    marginRight: 15,
},
storeNearYouHeader: {
    flexDirection: 'row',
    height: 30,
    marginTop: 1,
    marginLeft: '5%',
    width: '90%'
},
storeNearYouHeaderFevorit: {
    flex: 1,
    fontSize: 14,
    color: '#222222',
    textAlign: 'left',
    // height: 50
    },
    fevoritSectionHeaderHistory: {
        // flex: 1,
        fontSize: 14,
        color: '#2D9CDB',
        textAlign: 'right',
        height: 30
    },
storeNearYouGrid: {
    // flex: 1,
    justifyContent:"space-between",
    flexDirection: 'row',
    flexWrap: 'wrap',
    

},
storeNearYouItem: {
    marginBottom: 20,
    borderRadius: 25,
    height: 119,
    width: 140,
    width: Dimensions.get('window').width /2.3,
    backgroundColor: '#F7F7F7',
},
storeNearItemLogo: {
    height: 75,
    width: 75,
    borderRadius: 19,
    marginLeft: 10,
    marginTop: 10

    },
itemRow1: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginLeft: 0,
    marginTop: 10,
    },
itemImgBg: {
    height: 35,
    width: 35,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems:"center"
    },
    readingDetails: {
        flexDirection: "row",
        justifyContent: 'flex-end',
        textAlign: "center"
    },
blueBg: {
  backgroundColor:"#1DA1F2"  
},
greenBg: {
backgroundColor:"#2C9309"  
},
brownBg: {
    backgroundColor:"#EF950E"  
},
skyBlueBg: {
backgroundColor:"#05D2D2"
},
icons: {
    fontSize: 16,
    color: "#FFFFFF"
    },
    reading: {
        fontSize: 11,
        color: '#2C9309'
    },
    readingCount: {
        fontSize: 14,
        fontWeight: '500',
        lineHeight: 16,
        flexDirection: 'column',
        color:"#222222"
    },
    readingName: {
        fontSize: 10,
        fontWeight: '500',
        lineHeight: 12,
        color: "#BDBDBD",
        flexDirection:'column'
    },

storeNearItemDetails: {
    marginLeft: 10,
    marginTop: 10,
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

},
storeNearItemDistance: {
    color: '#7F7F7F',
    fontSize: 12,
    lineHeight: 22,

},
storeNearItemActive: {
    color: '#2C9309',
    fontSize: 12,
    lineHeight: 22,
    fontWeight:'500',
    marginLeft: 5

},
storeNearItemRatingDive1: {
    flexDirection: 'row',
    flex: 1
},
storeNearItemRatingDive2: {
    color: '#FFBA49',
    flex: 1,
    flexDirection: 'row',
    
},
storeNearItemRatingText: {
//  marginLeft: 1 
    color: 'white',
    marginLeft: 3,
    marginTop: 1,
    fontSize: 10,
},
storeNearItemRating: {
    marginLeft: 13,
    marginTop: -3,
    marginTop: 3,
    color: 'white',
    fontSize: 10,
    height: 12
},
storeNearItemActiveCount: {
    flexDirection: 'row',
    backgroundColor: '#2C9309',
    height: 20,
    width: 53,
    borderRadius: 5,
    color: 'white',
    fontSize: 11,
    marginBottom: 3
},
storeNearItemTime: {
    marginLeft: 5,
    color: '#FF0909',
    fontSize: 9
},
storeNearItemDis: {
    flex:1  ,
    width: 20,
    marginLeft: 70
},
storeNearItemDisIcons: {
    flexDirection: 'row',
    textAlign: 'center'
},

storeNearItemDisLable1: {
    backgroundColor: '#2C9309',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    color: 'white',
    marginBottom: 1,
    paddingLeft: 5,
    height: 20,
    fontSize: 10
    // paddingTop: 3
},
storeNearItemDisLable2: {
    backgroundColor: '#EA2C2C',
    borderTopLeftRadius: 5,
    borderBottomLeftRadius: 5,
    color: 'white',
    paddingLeft: 5,
    height: 20,
    // paddingTop: 3,
    fontSize: 10, 
    marginBottom: 12
},
storeNearItemRating1: {
    fontSize: 18,
    color: 'black',
    flex: 1
    },
shadow: {
    borderRadius:0,
    shadowColor: "black",
    shadowOffset: {
        width: 10,
        height: 10,
    },
    shadowOpacity: 8.27,
    shadowRadius: 1.65,
    elevation: 6,
}
});
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
        width: width,
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
        borderWidth: 1,
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
    
      },
      storeNearItemDistance: {
        color: '#7F7F7F',
        fontSize: 12,
        lineHeight: 22,
    
      },
      storeNearItemActive: {
        color: '#2C9309',
        fontSize: 12,
        lineHeight: 22,
        fontWeight:'500',
        marginLeft: 5
    
      },
      storeNearItemRatingDive1: {
        flexDirection: 'row',
        flex: 1
      },
      storeNearItemRatingDive2: {
        color: '#FFBA49',
        flex: 1,
        flexDirection: 'row',
        
      },
      storeNearItemRatingText: {
      //  marginLeft: 1 
        color: 'white',
        marginLeft: 3,
        marginTop: 1,
        fontSize: 10,
      },
      storeNearItemRating: {
        marginLeft: 13,
        marginTop: -3,
        marginTop: 3,
        color: 'white',
        fontSize: 10,
        height: 12
      },
      storeNearItemActiveCount: {
        flexDirection: 'row',
        backgroundColor: '#2C9309',
        height: 20,
        width: 53,
        borderRadius: 5,
        color: 'white',
        fontSize: 11,
          marginBottom: 3,
        marginTop: 12
      },
      storeNearItemTime: {
        marginLeft: 5,
        color: '#FF0909',
        fontSize: 9
      },
      storeNearItemDis: {
        flex:1  ,
        width: 20,
        marginLeft: 80
      },
      storeNearItemDisIcons: {
        flexDirection: 'row',
        textAlign: 'center',
      },
    
      storeNearItemDisLable1: {
        backgroundColor: '#2C9309',
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        color: 'white',
        marginBottom: 1,
        paddingLeft: 5,
        height: 20,
        fontSize: 10
      },
      storeNearItemDisLable2: {
        backgroundColor: '#EA2C2C',
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        color: 'white',
        paddingLeft: 5,
        height: 20,
        fontSize: 10, 
        marginBottom: 12
      },
      storeNearItemRating1: {
        fontSize: 18,
        color: 'black',
        flex: 1
      }

});

export default VendorProfile;