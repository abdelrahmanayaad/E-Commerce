import {StyleSheet} from 'react-native';
import {
  BoldFontFamily,
  COLORS,
  FONTS,
  MARGIN,
  PADDING,
} from '../../constants/Constants';
const styles = StyleSheet.create({
  container: {
    // padding: PADDING.mdPadding,
    flex: 1,
    paddingLeft: PADDING.mdPadding,
    paddingTop: PADDING.mdPadding,
  },
  componentView: {
    marginBottom: MARGIN.mdMargin,
  },
  title: {
    fontFamily: BoldFontFamily,
    fontSize: FONTS.h2,
    color: COLORS.gray1,
    marginBottom: MARGIN.xsMargin,
  },
  category: {
    marginRight: MARGIN.smMargin,
  },
  productView: {
    paddingEnd: PADDING.mdPadding,
  },
});
export default styles;
