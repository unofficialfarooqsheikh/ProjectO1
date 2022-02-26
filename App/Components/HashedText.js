import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CONSTANTS from '../Globals/constants'

export default function HashedText(props) {
  return (
    <View>
      <Text style={{fontSize: CONSTANTS.FONTSIZE, color: CONSTANTS.PRIMARY_COLOR}}>
          {props.children}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({})