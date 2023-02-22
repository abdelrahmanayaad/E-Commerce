import {RFValue} from 'react-native-responsive-fontsize';

const defaultFontFamily = 'RCB500';
const BoldFontFamily = 'RCB';
const CURRENCY = '$';
const TOKEN_KEY = 'Keys.TOKEN';
const USER_KEY = 'Keys.USER';
const FONTS = {
  h1: RFValue(22),
  h2: RFValue(20),
  h3: RFValue(18),
  h4: RFValue(16),
  h5: RFValue(14),
  h6: RFValue(12),
};
const PADDING = {
  xsPadding: RFValue(4),
  smPadding: RFValue(6),
  mdPadding: RFValue(10),
  lgPadding: RFValue(22),
  xlPadding: RFValue(22),
};
const MARGIN = {
  xsMargin: RFValue(4),
  smMargin: RFValue(6),
  mdMargin: RFValue(10),
  lgMargin: RFValue(12),
  xlMargin: RFValue(24),
};
const COLORS = {
  black: '#000',
  white: '#fff',
  blue1: 'blue',
  gray1: '#aaa',
  gray2: '#bbb',
  gray3: '#ddd',
  gray4: '#eee',
};
const ICONS = {
  xsIcon: RFValue(20),
  smIcon: RFValue(24),
  mdIcon: RFValue(26),
  lgIcon: RFValue(30),
  xlIcon: RFValue(34),
};
export {
  defaultFontFamily,
  BoldFontFamily,
  CURRENCY,
  TOKEN_KEY,
  USER_KEY,
  FONTS,
  PADDING,
  COLORS,
  MARGIN,
  ICONS,
};
