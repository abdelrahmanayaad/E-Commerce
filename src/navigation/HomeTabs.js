import React from 'react';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SearchScreen from '../screens/SearchScreen/SearchScreen';
import AccountScreen from '../screens/AccountScreen/AccountScreen';
import {RFValue} from 'react-native-responsive-fontsize';
import {BoldFontFamily, COLORS} from '../constants/Constants';
import HomeStack from './HomeStack';
import CartStack from './CartStack';
import SearchStack from './SearchScreen';
import AccountStack from './AccountStack';

const Tabs = createBottomTabNavigator();

export default function HomeTabs() {
  return (
    <Tabs.Navigator
      screenOptions={({route}) => {
        const iconNameActive = {
          HomeStack: 'home',
          CartStack: 'cart',
          SearchStack: 'search',
          AccountStack: 'person',
        };
        const iconNameDisactive = {
          HomeStack: 'home-outline',
          CartStack: 'cart-outline',
          SearchStack: 'search',
          AccountStack: 'person-outline',
        };
        const label = {
          HomeStack: 'Home',
          CartStack: 'Cart',
          SearchStack: 'Search',
          AccountStack: 'Account',
        };
        return {
          tabBarIcon: ({focused}) => (
            <Icon
              name={
                focused
                  ? iconNameActive[route.name]
                  : iconNameDisactive[route.name]
              }
              size={RFValue(20)}
              style={{color: focused ? COLORS.blue1 : COLORS.gray1}}
            />
          ),
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                fontFamily: BoldFontFamily,
                color: focused ? COLORS.blue1 : COLORS.gray1,
              }}>
              {label[route.name]}
            </Text>
          ),
        };
      }}>
      <Tabs.Screen
        name="HomeStack"
        component={HomeStack}
        options={{headerShown: false}}
      />
      <Tabs.Screen
        name="CartStack"
        component={CartStack}
        options={{headerShown: false}}
      />
      <Tabs.Screen
        name="SearchStack"
        component={SearchStack}
        options={{headerShown: false, tabBarHideOnKeyboard: true}}
      />
      <Tabs.Screen
        name="AccountStack"
        component={AccountStack}
        options={{headerShown: false}}
      />
    </Tabs.Navigator>
  );
}
