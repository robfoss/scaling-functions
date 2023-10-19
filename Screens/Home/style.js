import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/styles/scaling';

const style = StyleSheet.create({
  header: {
    marginLeft: horizontalScale(27),
    marginRight: horizontalScale(17),
    marginTop: verticalScale(30),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  messageIcon: {
    padding: horizontalScale(14),
    backgroundColor: '#F9FAFB',
    borderRadius: horizontalScale(100),
  },
  messageNumberContainer: {
    backgroundColor: '#F35BAC',
    justifyContent: 'center',
    flexDirection: 'row',
    width: horizontalScale(10),
    height: horizontalScale(10),
    borderRadius: horizontalScale(10),
    alignItems: 'center',
    position: 'absolute',
    right: horizontalScale(10),
    top: verticalScale(10),
  },
  messageNumber: {
    color: '#fff',
    fontSize: scaleFontSize(6),
    fontFamily: getFontFamily('Inter', '600'),
  },
  userStoryContainer: {
    marginTop: verticalScale(20),
    marginHorizontal: horizontalScale(27),
  },
  userPostcontainer: {
    marginHorizontal: horizontalScale(24),
  },
});

export default style;
