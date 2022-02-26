import { StyleSheet, TextInput, View, Dimensions } from 'react-native'
import React from 'react'
import CONSTANTS from '../Globals/constants'
import STYLES from '../Globals/styles'
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen'
import HashedText from './HashedText'

export default function HashedTextInput(props) {

  return (
    <View style={[styles.container,props.CustomContainerStyles]}>
            {props.label ? <HashedText>{props.label}</HashedText>: <View></View>}
            <TextInput 
                value = {props.value}
                onChangeText={props.onChangeText}
                style={[STYLES.textInput, props.CustomStyles]}
                placeholder={props.placeholder}
                placeholderTextColor={props.placeholderTextColor}
            />
        </View>
  )
}

const styles = StyleSheet.create({
    container:{
        marginVertical: heightPercentageToDP('2.5%')
    },
})