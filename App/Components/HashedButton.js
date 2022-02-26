import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import HashedText from './HashedText';
import STYLES from '../Globals/styles';

export default function HashedButton(props) {
  return (
    <View>
      <TouchableOpacity  onPress={()=>props.onPress()} style={[STYLES.button, props.CustomStyles]}>
          <HashedText >{props.title}</HashedText>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({})