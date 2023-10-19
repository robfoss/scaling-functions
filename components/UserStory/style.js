import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  storyContainer: {
    marginRight: horizontalScale(20),
    alignItems: 'center',
  },
  firstName: {
    color: '#022150',
    textAlign: 'center',
    fontFamily: getFontFamily('Inter', '500'),
    fontSize: scaleFontSize(12),
    marginTop: verticalScale(8),
  },
  userImageContainer: {
    borderColor: '#F35BAC',
    borderWidth: 1,
    padding: horizontalScale(3),
    borderRadius: 65,
  },
  image: {
    width: 65,
    height: 65,
  },
});

export default style;
