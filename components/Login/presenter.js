import React, {Component} from 'react';
//import Login from './presenter';

import { View, StyleSheet, Text, TextInput, TouchableHighlight, Button } from "react-native";

// easy grid 오픈소스
import {Col, Row, Grid} from 'react-native-easy-grid';

//
const Login = (props) => (
    <Grid>
        <Row size={1}>
            <View style={[styles.container]}>
                <Text style={styles.title}>login page</Text>
            </View>
        </Row>
        <Row size={3}>
            <Col size={1}>
                <View style={[styles.container, styles.redContainer]}>
                    <TextInput onChangeText={(text)=>{
                        //console.log(text);
                        props.setId(text);
                        // 즉각 반영은 안되고, 시간 차이가 있나보다.
                        //console.log(props); 
                    }}
                        style={styles.inputBox}
                        placeholder="접속 id를 입력해주세요"
                    ></TextInput>
                    <TouchableHighlight
                        style={styles.inputBtn}
                        onPress={()=>{props.loginBtn(props.navigation)}}>
                        <Text style={styles.inputText}>입장</Text>
                    </TouchableHighlight>
                </View>
            </Col>
        </Row>
    </Grid>
    
);

const styles = StyleSheet.create({
    title:{
        fontSize: 30,
        fontWeight: "500",
        color:'red'
    },
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: "center",
      alignItems: 'center'
    },
    redContainer:{
        backgroundColor:'red'
    },
    inputBox:{
        width:'80%',
        height:50,
        borderRadius: 10,
        marginBottom: 20,
        paddingLeft: 10,
        backgroundColor:'white'
    },
    inputBtn:{
        width: '80%',
        height: 50,
        borderRadius: 10,
        backgroundColor:'black',
        justifyContent: "center",
        alignItems: 'center',
        elevation:3,
        marginBottom:10,
    },
    inputText:{
        fontSize: 20,
        fontWeight:"500",
        color:'white'
    }
});

export default Login;