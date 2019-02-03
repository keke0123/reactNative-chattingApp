import React, {Component} from 'react';

import Chatting from './presenter';

import { View, StyleSheet, Text } from "react-native";

class Container extends Component{
    render(){
        const {isLogin} = this.props;
        console.log("isLogin:"+isLogin);
        return (
            <Chatting />
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: "center",
      alignItems: 'center'
    }
});

export default Container;
