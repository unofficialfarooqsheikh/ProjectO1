import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import STYLES from '../Globals/styles'

export default function DefaultView(props) {
  return (
    <View style={[STYLES.container, props.style]}>
      {props.children}
    </View>
  )
}

const styles = StyleSheet.create({
    
})