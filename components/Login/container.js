import React, {Component} from 'react';

import { View, StyleSheet, Text, Button } from "react-native";

import Login from './presenter';

class Container extends Component{
    constructor(props){
        super(props);
        this.state={
            response:false,
        };
    }

    _testSocket = (props) => {
        console.log("testSocket clicked");

    }

    _testSocket2 = (props) => {
        console.log("testSocket2 clicked");
        
    }

    render(){
        const {isLogin, navigation} = this.props;
        //console.log("isLogin:"+isLogin);
        //console.log("navigation:"+navigation);
        return (           
            <Login
                {...this.props}
                loginBtn={_loginBtn}
                testBtn={_testBtn}
                testSocket={this._testSocket}
                testSocket2={this._testSocket2}
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
    //http://192.168.0.3:8080/hello
    fetch('http://192.168.0.3:8080/test'
    ,{
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: 'keke0123',
        }),
    })
    .then((response)=>{
        console.log(response);
        res = JSON.parse(response._bodyInit);
        console.log(res);
        console.log(res.hello);
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


  
