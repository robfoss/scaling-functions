import {View, Text} from 'react-native';
import React from 'react';
import PropTypes from 'prop-types';
import style from './style';

const ProfileTabTitle = ({title, isFocused}) => {
  return (
    <View>
      <Text style={[style.title, !isFocused && style.titleNotFocused]}>
        {title}
      </Text>
    </View>
  );
};

ProfileTabTitle.propTypes = {
  title: PropTypes.string.isRequired,
  isFocused: PropTypes.bool.isRequired,
};

export default ProfileTabTitle;
