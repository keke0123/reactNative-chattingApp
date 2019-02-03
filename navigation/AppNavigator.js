import React from 'react';

import { createStackNavigator, createAppContainer, createBottomTabNavigator, createSwitchNavigator } from 'react-navigation';

import Login from '../components/Login';
import Chatting from '../components/Chatting';

const LoginNavigator = createStackNavigator(
    {
        Login: {
            screen: Login,
            navigationOptions:{
                title:'login',
                header:null
            }
        },
        Chatting: {
            screen: Chatting,
            navigationOptions:{
                title:'chatting'
            }
        }
    },{
        initialRouteName:"Login",
        //headerMode:'none'
    }

);

export default createAppContainer(LoginNavigator);