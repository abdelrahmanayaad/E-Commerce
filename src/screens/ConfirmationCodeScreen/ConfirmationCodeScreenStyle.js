import {StyleSheet, Dimensions} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {BoldFontFamily, FONTS, MARGIN, COLORS} from '../../constants/Constants';

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: '3%',
    paddingVertical: '6%',
  },
  title: {
    textAlign: 'center',
    fontSize: FONTS.h2,
    color: COLORS.black,
    fontFamily: BoldFontFamily,
  },
  buttonView: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  textInputView: {
    marginTop: MARGIN.xlMargin,
  },
});

export default styles;
