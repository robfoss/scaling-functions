import {View, Text, ScrollView, Image} from 'react-native';
import React from 'react';
import style from './style';

const ProfileTabContent = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={style.profileTabContentContainer}>
      <View style={style.profileTabContent}>
        <Image
          style={style.image}
          resizeMode="contain"
          source={require('../../assets/images/default_post.png')}
        />
        <Image
          style={style.image}
          resizeMode="contain"
          source={require('../../assets/images/default_post.png')}
        />
        <Image
          style={style.image}
          resizeMode="contain"
          source={require('../../assets/images/default_post.png')}
        />
        <Image
          style={style.image}
          resizeMode="contain"
          source={require('../../assets/images/default_post.png')}
        />
        <Image
          style={style.image}
          resizeMode="contain"
          source={require('../../assets/images/default_post.png')}
        />
        <Image
          style={style.image}
          resizeMode="contain"
          source={require('../../assets/images/default_post.png')}
        />
        <Image
          style={style.image}
          resizeMode="contain"
          source={require('../../assets/images/default_post.png')}
        />
        <Image
          style={style.image}
          resizeMode="contain"
          source={require('../../assets/images/default_post.png')}
        />
        <Image
          style={style.image}
          resizeMode="contain"
          source={require('../../assets/images/default_post.png')}
        />
        <Image
          style={style.image}
          resizeMode="contain"
          source={require('../../assets/images/default_post.png')}
        />
      </View>
    </ScrollView>
  );
};

export default ProfileTabContent;
