import {StyleSheet} from 'react-native';
import {RFValue} from 'react-native-responsive-fontsize';
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
    padding: PADDING.mdPadding,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: MARGIN.xlMargin,
  },
  icon: {
    fontSize: RFValue(100),
    color: COLORS.black,
  },
  lineVertical: {
    width: 1,
    backgroundColor: COLORS.gray1,
  },
  nameStyle: {
    fontFamily: BoldFontFamily,
    fontSize: FONTS.h2,
    color: COLORS.black,
  },
  phoneNumber: {
    fontFamily: defaultFontFamily,
    fontSize: FONTS.h4,
    color: COLORS.black,
  },
  nameView: {
    justifyContent: 'space-around',
    paddingVertical: PADDING.mdPadding,
  },
  listViewComponent: {
    flexDirection: 'row',
    alignSelf: 'flex-start',
    alignItems: 'center',
    marginVertical: MARGIN.mdMargin,
  },
  iconList: {
    fontSize: RFValue(30),
    color: COLORS.gray2,
    marginEnd: MARGIN.mdMargin,
  },
  titleList: {
    fontFamily: BoldFontFamily,
    fontSize: FONTS.h3,
    color: COLORS.gray1,
  },
  horizontalLine: {
    height: 1,
    backgroundColor: COLORS.gray3,
  },
});
export default styles;
