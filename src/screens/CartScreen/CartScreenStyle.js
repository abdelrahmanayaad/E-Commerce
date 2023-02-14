import {StyleSheet} from 'react-native';
import {
  BoldFontFamily,
  COLORS,
  defaultFontFamily,
  FONTS,
  MARGIN,
  PADDING,
} from '../../constants/Constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: PADDING.mdPadding,
  },
  cartItem: {
    marginBottom: MARGIN.lgMargin,
  },
  footer: {
    // flex: 1,
    justifyContent: 'flex-end',
  },
  footerContentView: {
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  price: {
    flex: 1,
    fontFamily: BoldFontFamily,
    fontSize: FONTS.h3,
    color: COLORS.gray1,
  },
  button: {
    flex: 1,
    marginStart: MARGIN.xlMargin,
  },
});
export default styles;
