import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';
import {
  horizontalScale,
  scaleFontSize,
  verticalScale,
} from '../../assets/scaling';

const style = StyleSheet.create({
  userContainer: {flexDirection: 'row'},
  userTextContainer: {
    justifyContent: 'center',
    marginLeft: horizontalScale(10),
  },
  user: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  userName: {
    color: '#000',
    fontSize: scaleFontSize(16),
    fontFamily: getFontFamily('Inter', '600'),
  },
  location: {
    color: '#79869F',
    fontSize: scaleFontSize(12),
    fontFamily: getFontFamily('Inter', '400'),
    marginTop: verticalScale(5),
  },
  postImage: {
    alignItems: 'center',
    marginVertical: verticalScale(20),
  },
  userPostContainer: {
    marginTop: verticalScale(35),
    paddingBottom: verticalScale(20),
    borderBottomWidth: 1,
    borderBottomColor: '#E2E2E2',
  },
  userPostStats: {
    marginLeft: horizontalScale(10),
    flexDirection: 'row',
  },
  userPostStatButton: {flexDirection: 'row'},
  userPostStatButtonRight: {
    flexDirection: 'row',
    marginLeft: horizontalScale(27),
  },
  userPostStatText: {
    marginLeft: horizontalScale(3),
    color: '#79869F',
  },
});

export default style;
