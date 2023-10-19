import {View, Image} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import style from './style';

const UserProfileImage = ({profileImage, imageDimensions}) => {
  return (
    <View style={[style.userImageContainer, {borderRadius: imageDimensions}]}>
      <Image
        source={profileImage}
        style={{
          width: imageDimensions,
          height: imageDimensions,
        }}
      />
    </View>
  );
};

UserProfileImage.propTypes = {
  profileImage: PropTypes.any.isRequired,
  imageDimensions: PropTypes.number.isRequired,
};

export default UserProfileImage;
