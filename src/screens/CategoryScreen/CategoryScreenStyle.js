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
    padding: PADDING.mdPadding,
  },
  title: {
    fontFamily: BoldFontFamily,
    fontSize: FONTS.h2,
    color: COLORS.gray1,
    marginBottom: MARGIN.xsMargin,
  },
});

export default styles;
