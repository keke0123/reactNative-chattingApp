import React, {Component} from 'react';

import { View, StyleSheet, Text, Button } from "react-native";

import Login from './presenter';

class Container extends Component{
    render(){
        const {isLogin, navigation} = this.props;
        //console.log("isLogin:"+isLogin);
        //console.log("navigation:"+navigation);
        return (
            <Login
                {...this.props}
                loginBtn={_loginBtn}
                testBtn={_testBtn}
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

_testBtn = (props) => {
    console.log(props);
    console.log("testBtn cliked");
    fetch('http://localhost:8080/', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            firstParam: 'yourValue',
            secondParam: 'yourOtherValue',
        }),
    })
    .then((response)=>{
        console.log(response);
    }).catch((error)=>{
        console.log(error);
    });
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


  
