/* eslint-disable react-native/no-inline-styles */
import {View, Text, Image} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import style from './style';
import UserProfileImage from '../UserProfileImage/UserProfileImage';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faBookmark,
  faEllipsisH,
  faHeart,
  faMessage,
} from '@fortawesome/free-solid-svg-icons';
import {horizontalScale, scaleFontSize} from '../../assets/styles/scaling';

const UserPost = ({
  firstName,
  lastName,
  bookmarks,
  comments,
  image,
  profileImage,
  location,
  likes,
}) => {
  return (
    <View style={style.userPostContainer}>
      <View style={style.user}>
        <View style={style.userContainer}>
          <UserProfileImage
            profileImage={profileImage}
            imageDimensions={horizontalScale(48)}
          />
          <View style={style.userTextContainer}>
            <Text style={style.userName}>
              {firstName} {lastName}
            </Text>
            {location && <Text style={style.location}>{location}</Text>}
          </View>
        </View>
        <FontAwesomeIcon
          icon={faEllipsisH}
          color="#79869F"
          size={scaleFontSize(24)}
        />
      </View>
      <View style={style.postImage}>
        <Image source={image} />
      </View>
      <View style={style.userPostStats}>
        <View style={style.userPostStatButton}>
          <FontAwesomeIcon icon={faHeart} color="#79869F" />
          <Text style={style.userPostStatText}>{likes}</Text>
        </View>
        <View style={style.userPostStatButtonRight}>
          <FontAwesomeIcon icon={faMessage} color="#79869F" />
          <Text style={style.userPostStatText}>{comments}</Text>
        </View>
        <View style={style.userPostStatButtonRight}>
          <FontAwesomeIcon icon={faBookmark} color="#79869F" />
          <Text style={style.userPostStatText}>{bookmarks}</Text>
        </View>
      </View>
    </View>
  );
};

UserPost.propTypes = {
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  location: PropTypes.string,
  image: PropTypes.any.isRequired,
  profileImage: PropTypes.any.isRequired,
  likes: PropTypes.number.isRequired,
  comments: PropTypes.number.isRequired,
  bookmarks: PropTypes.number.isRequired,
};

export default UserPost;
