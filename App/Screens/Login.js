import { StyleSheet, Text, View } from 'react-native'
import React, {useContext,useState} from 'react'
import DefaultView from '../Components/DefaultView';
import HashedText from '../Components/HashedText';
import HashedTextInput from '../Components/HashedTextInput';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import CONSTANTS from '../Globals/constants';
import HashedButton from '../Components/HashedButton';
import { AppContext } from '../Globals/store';


const Login = ({navigation}) => {
    const [storeState, dispatch] = useContext(AppContext);
    const [formState, setFormState] = useState({"username":"", "password":""});
    const onChangeText=(value,key)=>{
        setFormState((prev)=>{
            return {
                ...prev,
                [key]:value,
            }
        })
    }
    const onSubmit =()=>{
        if(formState.username == "Admin" && formState.password == "Admin"){
            dispatch({
                type:"LOGIN",
                payload: formState
            })
            // navigation.navigate("Search")
        }
        else{
            alert('Username or Password is incorrect')
        }
    }
    return (
        <DefaultView>
            <View style={styles.container}>
                <HashedText>Login</HashedText>
                <HashedTextInput value={formState.username} label="Username" onChangeText={(val)=>onChangeText(val,"username")}/>
                <HashedTextInput value={formState.password} label="Password" onChangeText={(val)=>onChangeText(val,"password")}/>
                <HashedButton title="Submit" onPress={onSubmit}/>
            </View>
        </DefaultView>
    );
}

export default Login

const styles = StyleSheet.create({
    container:{
        width:wp('95%'),
        alignSelf:"center",
        alignItems:"center",
        borderWidth: 0.5,
        borderColor: CONSTANTS.SECONDARY_COLOR,
        padding: wp('10%')
    }
})