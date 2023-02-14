import {StyleSheet, Dimensions} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
import {
  BoldFontFamily,
  COLORS,
  defaultFontFamily,
  FONTS,
  MARGIN,
  PADDING,
} from '../../constants/Constants';

const {height, width} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: PADDING.mdPadding,
    justifyContent: 'space-between',
  },
  orderView: {
    height: height * 0.24,
    padding: PADDING.mdPadding,
    borderRadius: RFValue(10),
    borderWidth: 1,
    borderColor: COLORS.gray1,
    justifyContent: 'space-between',
  },
  shiptoText: {
    fontFamily: BoldFontFamily,
    fontSize: FONTS.h2,
    color: COLORS.black,
  },
  addressText: {
    fontFamily: defaultFontFamily,
    fontSize: FONTS.h4,
    color: COLORS.gray1,
  },
  updateTouch: {
    alignSelf: 'flex-end',
  },
  updateText: {
    fontFamily: BoldFontFamily,
    fontSize: FONTS.h3,
    color: COLORS.black,
    textDecorationLine: 'underline',
    textAlign: 'right',
  },
  componentView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: MARGIN.mdMargin,
  },
  title: {
    fontFamily: defaultFontFamily,
    fontSize: FONTS.h4,
    color: COLORS.gray2,
  },
  price: {
    fontFamily: defaultFontFamily,
    fontSize: FONTS.h4,
    color: COLORS.gray1,
  },
  line: {
    height: 1,
    backgroundColor: COLORS.gray3,
    marginBottom: MARGIN.mdMargin,
  },
});

export default styles;
