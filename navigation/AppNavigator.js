import React from 'react';

import { createStackNavigator, createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from '../components/Login';
import Chatting from '../components/Chatting';

const AppNavigator = createStackNavigator(
    {
        Login: {
            screen: Login
        },
        Chatting: {
            screen: Chatting
        }
    },{
        initialRouteName:"Login"
    }

);

export default createAppContainer(AppNavigator);