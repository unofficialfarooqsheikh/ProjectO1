import { StyleSheet, ScrollView, View } from 'react-native'
import React, {useContext,useState,useEffect} from 'react'
import DefaultView from '../Components/DefaultView';
import HashedText from '../Components/HashedText';
import { AppContext } from '../Globals/store';
import HashedTextInput from '../Components/HashedTextInput';
import HashedButton from '../Components/HashedButton';
import { widthPercentageToDP, widthPercentageToDP as wp } from 'react-native-responsive-screen';
import CONSTANTS from '../Globals/constants';
import axios from 'axios';
import environmentVariables from '../Globals/environmentVariables';
import STYLES from '../Globals/styles';

const Search = () => {
    const [storeState, dispatch] = useContext(AppContext);
    const [searchedText, setSearchedText] = useState("");
    const [data, setData] = useState([]);
    useEffect(() => {
      console.log("start")
      axios.get(environmentVariables.URL)
      .then((res)=>{
        console.log("stopped",res.data)
        setData(()=>[...res.data])
      })
      .catch((err)=>{console.log(err)})
    }, []);
    return (
        <DefaultView>
          <View style={{ flex: 1, alignItems: 'center',  }}>
            <View style={{flexDirection:'row'}}>
              <HashedTextInput 
                  CustomContainerStyles={{margin:0, marginVertical: 0}} 
                  CustomStyles={{width:wp('50%'),padding:0}}
                  placeholderTextColor={CONSTANTS.SECONDARY_COLOR}
                  value={searchedText}
                  placeholder = "Search for anything"
              />
              <HashedButton title="Date" 
                CustomStyles={{width:wp('15%')}}
              />
              <HashedButton title="reset" 
                CustomStyles={{width:wp('15%')}}
              />
            </View>
            <ScrollView contentContainerStyle={{padding: wp('5%')}}>
              {
                data.map((item,index)=>{
                 return(
                  <View key={index} style={[STYLES.basicBorder,{padding: widthPercentageToDP('5%'), }]}>
                    <HashedText>{`Name: ${item.name}, Joined: ${item.joined}, Profession: ${item.profession}`}</HashedText>
                  </View>
                 ) 
                })
              }
            </ScrollView>
            
          </View>
        </DefaultView>
    );
}

export default Search

const styles = StyleSheet.create({})