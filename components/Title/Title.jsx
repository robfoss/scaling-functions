import {Text} from 'react-native';
import React from 'react';
import style from './style';
import PropTypes from 'prop-types';

const Title = ({title}) => {
  return <Text style={style.title}>{title}</Text>;
};

Title.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Title;
