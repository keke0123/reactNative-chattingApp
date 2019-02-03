import React, {Component} from 'react';
//import Login from './presenter';

import { View, StyleSheet, Text, Button, TextInput } from "react-native";

// easy grid 오픈소스
import {Col, Row, Grid} from 'react-native-easy-grid';

//
const Login = (props) => (
    <Grid>
        <Row size={1}></Row>
        <Row size={3}>
            <View style={styles.container}>
                <Text>login page</Text>
                <TextInput></TextInput>
                <Button title="입장" onPress={()=>{props.loginBtn(props.navigation)}}/>
                <Button title="테스트" onPress={()=>{props.testBtn(props)}}/>
            </View>
        </Row>
        <Row size={1}></Row>
    </Grid>
    
);

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: "center",
      alignItems: 'center',
      backgroundColor:'red'
    }
});

export default Login;