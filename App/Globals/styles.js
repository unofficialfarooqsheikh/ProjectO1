import { StyleSheet } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import CONSTANTS from './constants';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: CONSTANTS.BACKGROUND_COLOR,
  },
  textInput: {
    width: wp("80%"),
    fontSize: CONSTANTS.FONTSIZE,
    fontWeight: "bold",
    paddingHorizontal: 5,
    color: CONSTANTS.PRIMARY_COLOR,
    borderWidth: 0.5,
    borderColor: CONSTANTS.SECONDARY_COLOR,
  },
  button: {
    width: wp('20%'),
    color: CONSTANTS.PRIMARY_COLOR,
    borderWidth: 0.5,
    borderColor: CONSTANTS.SECONDARY_COLOR,
    alignItems:"center",
    borderRadius: 7
  },
  basicBorder:{
    borderWidth: 0.5,
    borderColor: CONSTANTS.SECONDARY_COLOR,
  }
});