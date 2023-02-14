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
const {height} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  productImage: {
    height: height / 2,
    paddingTop: RFValue(PADDING.smPadding),
    marginBottom: RFValue(MARGIN.mdMargin),
  },
  headerView: {
    paddingHorizontal: PADDING.mdPadding,
    flexDirection: 'row',
  },
  productNameView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  productName: {
    fontSize: FONTS.h2,
    color: COLORS.white,
    fontFamily: BoldFontFamily,
    marginRight: RFValue(20),
  },
  footerView: {
    flex: 1,
    padding: PADDING.mdPadding,
  },
  descriptionView: {
    marginTop: MARGIN.mdMargin,
  },
  descriptionTitle: {
    fontSize: FONTS.h2,
    color: COLORS.black,
    fontFamily: BoldFontFamily,
  },
  description: {
    fontSize: FONTS.h5,
    color: COLORS.gray1,
    fontFamily: defaultFontFamily,
  },
  buttonView: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
export default styles;
