import React from 'react';
import { StyleSheet, Text, View, TextInput, Image, Dimensions, ImageBackground , SafeAreaView,} from 'react-native';
import  Ionicons  from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';

const SearchBar = () => {
  const navigation = useNavigation();

    return (
           <View style={styles.searchInput}  >
                <TextInput style={styles.input} onChange={() => navigation.navigate('FreqentSearch')} placeholder="" />
                <Ionicons style={styles.miceIcon} name="search" size={20} color="black" />
          </View>
    );
  }
  
  const styles = StyleSheet.create({

    searchInput: {
        // flex: 1,
        height: 50,
        flexDirection: 'row',
        marginLeft: 20,
        marginRight: 20,
        marginTop: 20,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: '#F20505',
        padding: 10,
      },
      input: {
        width: '100%',
        height: 30,
        flex: 4,
        padding: 0,
        marginTop: -2,
        marginLeft: 15,
        fontSize: 15,
        color: 'black'
      },
      miceIcon: {
        flex: 1,
        textAlign: 'right',
        color: '#EB3223',
        marginRight: 8,
        fontSize: 18,
        marginTop: 3
      },
  });

export default SearchBar;