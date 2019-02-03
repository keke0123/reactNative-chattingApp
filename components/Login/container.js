import React, {Component} from 'react';

import { View, StyleSheet, Text, Button } from "react-native";

import Login from './presenter';

class Container extends Component{
    render(){
        const {isLogin, navigation} = this.props;
        console.log("isLogin:"+isLogin);
        console.log("navigation:"+navigation);
        return (
            <Login
                {...this.props}
                loginBtn={_loginBtn}
            ></Login>
        );
    }
}
//onPress={() => {_loginBtn(navigation);}}

_loginBtn = navigation => {
    console.log("loginBtn clicked");
    // pop
    navigation.navigate("Chatting");
    // root page 변경
    //navigation.replace("Chatting");

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


  
