import React, {Component} from 'react';
//import Login from './presenter';

import { View, StyleSheet, Text, Button } from "react-native";

//
const Login = (props) => (

    <View style={styles.container}>
        <Text>login page</Text>
        <Button title="입장" onPress={()=>{props.loginBtn(props.navigation)}}/>
        
        <Button title="테스트" onPress={()=>{console.log(props);}}/>
    </View>
);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: "center",
      alignItems: 'center'
    }
});

export default Login;