import React from 'react';
import { StyleSheet, Button, Text, View, TextInput, TouchableOpacity, Image, Dimensions, ImageBackground , SafeAreaView,} from 'react-native';
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
const OrderDetails = ({navigation}) => {

  return (        
        <ScrollView style={styles.main}>
          <View style={styles.header}>
            <TouchableOpacity style={styles.TOback}  onPress={() => navigation.goBack()}>
              <AntDesign style={styles.backIcon} name="left" color="black" />
            </TouchableOpacity>
            <View style={stylesBtn.item }>
                <View style={stylesBtn.itemRow1}>
                    <Text style={[stylesBtn.itemRow1, stylesBtn.higlght, stylesBtn.darkFont]}>Ali Super Store</Text>
                    <Text style={[stylesBtn.itemRow1, stylesBtn.smallfont, stylesBtn.grayFont]}>21-12-2021 | 20:45 </Text>
                </View>
                <View style={stylesBtn.itemRow1}>
                    <View style={stylesBtn.itemRow3Col1}>
                    <Text style={[stylesBtn.itemRow1, stylesBtn.smallfont, stylesBtn.grayFont]}>Order id: </Text>
                    <Text style={[stylesBtn.itemRow1, stylesBtn.higlght, stylesBtn.darkFont]}>1947034</Text>
                    </View>
                    <View style={stylesBtn.itemRow3Col2}>
                    <Text style={[stylesBtn.itemRow1, stylesBtn.smallfont, stylesBtn.grayFont]}>Total Amount: </Text>
                    </View>
                    
                </View>
                <View style={stylesBtn.itemRow3}>
                    <View style={stylesBtn.itemRow3Col1}>
                    <Text style={[stylesBtn.itemRow1, stylesBtn.smallfont, stylesBtn.grayFont]}>Transiction Id:   001</Text>
                    </View>
                    
                    <View style={stylesBtn.itemRow3Col2}>
                    <Text style={[stylesBtn.itemRow1, stylesBtn.higlght, stylesBtn.darkFont, stylesBtn.margin]}>Rs 243</Text>
                    </View>

                </View>
            </View>
          </View>


          <List></List>

          <View style={[ListStyle.Charges, ListStyle.bgColor]}>
                <View style={ListStyle.itemCol1}>
                    <Text style={{fontSize:14, fontWeight: 'bold', color:'#000000', flexWrap: 'wrap', width :200}}>Delivery Charges -</Text>
                </View>
                <View style={[ListStyle.itemCol3, ListStyle.itemCol3]}>
                    <Text style={ListStyle.itemQuant}>15.00</Text>
                </View>
          </View>
          
          <View style={{flexDirection:"column", marginLeft: '7%', marginTop: 12}}>
              <View>
                  <Text style={ListStyle.smallfont}>Delivery Address | Customer Address </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                  <Text style={ListStyle.smallfont}>+91- xxxxxxxxxxxxx</Text>
                  <Ionicons style={[styles.backIcon, { marginLeft:10}]} name="md-call-outline" size={16} color="black" />
              </View>
          </View>
      
        <View style={{flexDirection:"row", marginLeft: '7%', marginTop: 12,marginBottom: 50, justifyContent: 'space-around'}}>
          <TouchableOpacity style={stylesBtn.declineBtn}>
            <Text style={stylesBtn.btnFont} >Decline</Text>
          </TouchableOpacity>
          <TouchableOpacity style={stylesBtn.accetpBtn} onPress={() => navigation.navigate('VendorStore')}>
            <Text style={[stylesBtn.btnFont, stylesBtn.white]}>Accept</Text>
          </TouchableOpacity>
        </View>
            
    </ScrollView>
    );
  }
  
const List = () => {
    return (
        <View style={[ListStyle.listBg]}>
            <View style={ListStyle.heder}>
                <View style={ListStyle.hedercol}>
                <Text style={{color:'#F20505', fontSize: 18, fontWeight:'bold'}}>5 Items</Text>
                </View>
                <View style={ListStyle.hedercol}>
                <AntDesign style={styles.backIcon} name="down" color="black" />
                </View>
            </View>

            <View style={ListStyle.item}>
                <View style={ListStyle.itemCol1}>
                    <Text style={{fontSize:14, fontWeight: 'bold', color:'#000000', flexWrap: 'wrap', width :200}}>Cornitos Nacho Crisps - Cheese & Herbs</Text>
                </View>
                <View style={ListStyle.itemCol2}>
                    <Text style={ListStyle.itemQuant}> 60 g</Text>
                    <Text style={ListStyle.itemQuant}> x</Text>
                    <Text style={ListStyle.itemQuant}> 3</Text>
                </View>
                <View style={[ListStyle.itemCol3, ListStyle.itemCol3]}>
                    <Text style={ListStyle.itemQuant}>80.00</Text>
                </View>
            </View>
            
            <View style={ListStyle.item}>
                <View style={ListStyle.itemCol1}>
                    <Text style={{fontSize:14, fontWeight: 'bold', color:'#000000', flexWrap: 'wrap', width :200}}>Cornitos Nacho Crisps - Cheese & Herbs</Text>
                </View>
                <View style={ListStyle.itemCol2}>
                    <Text style={ListStyle.itemQuant}> 60 g</Text>
                    <Text style={ListStyle.itemQuant}> x</Text>
                    <Text style={ListStyle.itemQuant}> 3</Text>
                </View>
                <View style={[ListStyle.itemCol3, ListStyle.itemCol3]}>
                    <Text style={ListStyle.itemQuant}>80.00</Text>
                </View>
            </View>
            <View style={ListStyle.item}>
                <View style={ListStyle.itemCol1}>
                    <Text style={{fontSize:14, fontWeight: 'bold', color:'#000000', flexWrap: 'wrap', width :200}}>Cornitos Nacho Crisps - Cheese & Herbs</Text>
                </View>
                <View style={ListStyle.itemCol2}>
                    <Text style={ListStyle.itemQuant}> 60 g</Text>
                    <Text style={ListStyle.itemQuant}> x</Text>
                    <Text style={ListStyle.itemQuant}> 3</Text>
                </View>
                <View style={[ListStyle.itemCol3, ListStyle.itemCol3]}>
                    <Text style={ListStyle.itemQuant}>80.00</Text>
                </View>
            </View>
            <View style={ListStyle.item}>
                <View style={ListStyle.itemCol1}>
                    <Text style={{fontSize:14, fontWeight: 'bold', color:'#000000', flexWrap: 'wrap', width :200}}>Cornitos Nacho Crisps - Cheese & Herbs</Text>
                </View>
                <View style={ListStyle.itemCol2}>
                    <Text style={ListStyle.itemQuant}> 60 g</Text>
                    <Text style={ListStyle.itemQuant}> x</Text>
                    <Text style={ListStyle.itemQuant}> 3</Text>
                </View>
                <View style={[ListStyle.itemCol3, ListStyle.itemCol3]}>
                    <Text style={ListStyle.itemQuant}>80.00</Text>
                </View>
            </View>
            <View style={ListStyle.item}>
                <View style={ListStyle.itemCol1}>
                    <Text style={{fontSize:14, fontWeight: 'bold', color:'#000000', flexWrap: 'wrap', width :200}}>Cornitos Nacho Crisps - Cheese & Herbs</Text>
                </View>
                <View style={ListStyle.itemCol2}>
                    <Text style={ListStyle.itemQuant}> 60 g</Text>
                    <Text style={ListStyle.itemQuant}> x</Text>
                    <Text style={ListStyle.itemQuant}> 3</Text>
                </View>
                <View style={[ListStyle.itemCol3, ListStyle.itemCol3]}>
                    <Text style={ListStyle.itemQuant}>80.00</Text>
                </View>
            </View>

        </View>
      )
}
  
const ListStyle = StyleSheet.create({
    listBg: {
        backgroundColor: '#F7F7F7',
        marginRight: 15,
        marginLeft: 15,
        borderRadius: 10,
        // height: 300
    },
    heder:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        marginLeft: '5%',
        marginTop:12
    },
    hedercol: {
        flexDirection:'column'
    },
    item: {
        borderTopColor: '#C4C4C4',
        borderTopWidth:1,
        marginTop: 10,
        paddingTop: 10,
        marginLeft: '5%',
        marginRight:'5%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 5,
    },
    itemCol1: {
        flexWrap: 'wrap',
        width: '45%',
        // height: 50,
    },
    itemCol2: {
        flexDirection:'row'
    },
    itemCol3: {
        marginRight:'5%'
    },
    itemQuant: {
        fontSize: 11,
        color: '#000'
    },
    Charges: {
        marginTop: 10,
        marginLeft: '5%',
        marginRight:'5%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '90%',
        marginLeft: "5%",
        height: 54,
        alignItems: 'center',
        borderRadius: 10,
        paddingLeft: 15,
        paddingRight: 15
    },
    bgColor: {
        backgroundColor: '#F7F7F7'
    },
    smallfont: {
        fontSize: 10,
        color: '#222222',
        fontWeight: 'bold'
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
      borderBottomWidth: 1,
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

});
const stylesBtn = StyleSheet.create({
    list:{
     
  },
    itemBG: {
      backgroundColor: "#FFFFFF",
      borderRadius: 6,
      marginBottom: '2.5%'
    },
    item: {
      marginTop: 15,
      marginLeft: 10,
      marginRight: 5,
      marginBottom: -5,
    },
    itemRow1: {
      flexDirection: 'row',
      justifyContent: 'space-between'
    },
    itemRow2: {
      flexDirection: 'row',
      marginTop: 6
    },
    itemRow3: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 6
    },
    itemRow3Col1: {
      flexDirection: 'row',
    },
    itemRow3Col2: {
      flexDirection: 'row',
    },
    itemRow4: {
      flex: 1,
      flexDirection: 'row',
      marginTop: 16,
      width: '100%'
    },
    btn1: {
      flex: 1,
      height: 36,
      width: 98,
      borderWidth: 1,
      borderColor: '#F20505',
      borderRadius: 25,
      justifyContent: 'center',
      textAlign: "center",
      alignItems:'center'
    },
    btn2: {
      flex: 1,
      height: 36,
      width: 98,
      borderWidth: 1,
      borderColor: '#F20505',
      borderRadius: 25,
      justifyContent: 'center',
      textAlign: "center",
      alignItems: 'center',
      marginLeft: 20
    },
    btn3: {
      flex: 1,
      height: 36,
      width: 98,
      // borderWidth: 1,
      borderColor: '#F20505',
      borderRadius: 25,
      justifyContent: 'center',
      textAlign: "center",
      alignItems: 'flex-end',
      marginLeft: 20
    },
    higlght: {
      fontSize: 16,
      fontWeight: '600'
    },
    smallfont: {
      fontSize: 14,
    },
    grayFont: {
      color: '#9B9B9B'
    },
    darkFont: {
      color: '#222222'
    },
    red: {
      color: '#F20505'
    },
    yello: {
      color: '#D78C11'
    },
    green: {
      color: '#2AA952'
    },
    margin: {
      marginLeft: 5
  },
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
  
  
    
    
  });

export default OrderDetails;