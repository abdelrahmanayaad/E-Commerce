import {StyleSheet, Text, View} from 'react-native';
import {MARGIN, PADDING} from '../../constants/Constants';
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: PADDING.mdPadding,
  },
  seperateView: {
    marginVertical: MARGIN.lgMargin,
  },
  buttonView: {
    flex: 1,
    justifyContent: 'flex-end',
  },
});
export default styles;
