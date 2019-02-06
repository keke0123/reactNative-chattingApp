import React, {Component} from 'react';
//import Login from './presenter';

import { Container, Content, View, StyleSheet, Text, Button, ScrollView, TextInput, TouchableHighlight, KeyboardAvoidingView} from "react-native";

// easy grid 오픈소스
import {Col, Row, Grid} from 'react-native-easy-grid';

state={
    y:'',
}
//
const Chatting = (props) => {
    let x = '';
    console.log(this.state.y);
    return (
        <Grid>
            <Row size={7}>
                <ScrollView style={styles.scroll}>
                    {
                        props.messages.map((msg,i) => 
                            msg.isMe=='true' ?
                            (
                                <View style={[styles.msgBox]} key={i}>
                                    <Text style={styles.textBox}>id : {msg.name}</Text>
                                    <Text style={styles.textBox}>msg : {msg.message}</Text>
                                </View>
                            )
                            :
                            (
                                <View style={[styles.msgBox, styles.isMe]} key={i}>
                                    <Text style={styles.textBox}>id : {msg.name}</Text>
                                    <Text style={styles.textBox}>msg : {msg.message}</Text>
                                </View>
                            )
                        )
                    }
                </ScrollView>
            </Row>
            <Row size={1} >
                <Col size={5} >
                    <View style={styles.inputBox}>
                        <TextInput
                            style={styles.inputTxtBox}
                            placeholder="전송할 내용을 입력해주세요"
                            onChangeText={(text)=>{
                                //console.log(text);
                                //x=text;
                                //console.log(x); 
                                props.onChangeMsg(text);
                            }}
                            value={props.inputTxt}
                        ></TextInput>
                    </View>
                </Col>
                <Col size={1}>
                    <View style={styles.inputBox}>
                        <TouchableHighlight 
                            underlayColor='red'
                            onPress={(e)=>{
                                props.sendBtn();
                                //console.log(x);
                                //console.log(e);
                                //console.log(props.testTxt);
                        }}>
                            <Text
                                style={styles.sendBtn}
                            >전송</Text>
                        </TouchableHighlight>
                    </View>
                </Col>
            </Row>
        </Grid>      
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      //backgroundColor: '#fff',
      //justifyContent: "center",
      //alignItems: 'center',
      //backgroundColor:'red'
    },
    scroll:{
        flex:1,
        backgroundColor:'black',
    },
    msgBox:{
        alignSelf: 'flex-end',
        //alignSelf: 'flex-start',
        //width:'80%',
        height:50,
        margin: 5,
        padding: 5,
        backgroundColor:'#b0e2ff',
        justifyContent: "center",
        alignItems: 'flex-end',
    },
    isMe:{
        alignSelf: 'flex-start',
        backgroundColor:'red',
        alignItems: 'flex-start',
    },
    textBox:{
        fontSize: 15,
        fontWeight:"500",
        color:'white'
    },
    inputBox:{
        backgroundColor: 'red',
        width:'100%',
        height:'100%',
        justifyContent: "center",
    },
    inputTxtBox:{
        margin:10,
        padding:10,
        backgroundColor:'white',
        alignItems: 'flex-end',
        borderRadius: 5,
    }, 
    colBox:{
        flex:1,
        height:'100%',
    },
    sendBtn:{
        //height:'70%',
        color:'white',
        fontWeight:"500",
        alignSelf:'center',
        margin:5,
        padding:5,
        backgroundColor:'#007ACC',
        alignItems: 'flex-end',
        borderRadius: 5,
    }
});

export default Chatting;