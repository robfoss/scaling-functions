import {
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  View,
  ScrollView,
} from 'react-native';
import React from 'react';
import {ProfileTabsNavigation} from '../../navigation/MainNavigation';
import globalStyles from '../../assets/styles/globalStyles';
import style from './style';

const Profile = ({navigation}) => {
  return (
    <SafeAreaView style={[globalStyles.backgroundWhite, globalStyles.flex]}>
      <ScrollView contentContainerStyle={globalStyles.flexGrow}>
        <View style={style.profileImageContainer}>
          <View style={style.profileImageContent}>
            <Image
              source={require('../../assets/images/default_profile.png')}
              style={style.profileImage}
            />
          </View>
        </View>
        <Text style={style.userName}>Foss</Text>
        <View style={style.statContainer}>
          <View>
            <Text style={style.statAmount}>45</Text>
            <Text style={style.statType}>Following</Text>
          </View>
          <View style={style.statBorder} />
          <View>
            <Text style={style.statAmount}>100 M</Text>
            <Text style={style.statType}>Followers</Text>
          </View>
          <View style={style.statBorder} />
          <View>
            <Text style={style.statAmount}>50</Text>
            <Text style={style.statType}>Posts</Text>
          </View>
        </View>
        <View style={globalStyles.flex}>
          <ProfileTabsNavigation />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Profile;
