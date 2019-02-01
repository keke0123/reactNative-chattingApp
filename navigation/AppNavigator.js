import React from 'react';

import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';

import TestScreen from '../screens/TestScreen';
import TestScreen1 from '../screens/TestScreen1';
import TestScreen2 from '../screens/TestScreen2';

const AppNavigator = createStackNavigator(
    {
        Test: {
            screen: TestScreen
        },
        Test1: {
            screen: TestScreen1
        },
        Test2: {
            screen: TestScreen2
        }
    },{
        initialRouteName:"Test1"
    }

);

export default createAppContainer(AppNavigator);