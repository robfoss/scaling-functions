import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Routes} from './Routes';
import Home from '../Screens/Home/Home';
import Profile from '../Screens/Profile/Profile';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import ProfileTabTitle from '../components/ProfileTabTitle/ProfileTabTitle';
import ProfileTabContent from '../components/ProfileTabContent/ProfileTabContent';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const ProfileTabs = createMaterialTopTabNavigator();

export const ProfileTabsNavigation = () => {
  return (
    <ProfileTabs.Navigator
      screenOptions={{
        tabBarIndicatorStyle: {
          backgroundColor: 'transparent',
        },
        tabBarStyle: {
          zIndex: 0,
          elevation: 0,
        },
      }}>
      <ProfileTabs.Screen
        name={'Tab 1'}
        component={ProfileTabContent}
        options={{
          tabBarLabel: ({focused}) => (
            <ProfileTabTitle title={'Photos'} isFocused={focused} />
          ),
        }}
      />
      <ProfileTabs.Screen
        name={'Tab 2'}
        component={ProfileTabContent}
        options={{
          tabBarLabel: ({focused}) => (
            <ProfileTabTitle title={'Videos'} isFocused={focused} />
          ),
        }}
      />
      <ProfileTabs.Screen
        name={'Tab 3'}
        component={ProfileTabContent}
        options={{
          tabBarLabel: ({focused}) => (
            <ProfileTabTitle title={'Saved'} isFocused={focused} />
          ),
        }}
      />
    </ProfileTabs.Navigator>
  );
};

const MainMenuNavigation = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        header: () => null,
        headerShown: false,
      }}>
      <Drawer.Screen name={Routes.Home} component={Home} />
      <Drawer.Screen name={Routes.Profile} component={Profile} />
    </Drawer.Navigator>
  );
};

const MainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        header: () => null,
        headerShown: false,
      }}
      initialRouteName={Routes.Home}>
      <Stack.Screen name={'Drawer'} component={MainMenuNavigation} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
