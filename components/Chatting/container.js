import React, {Component} from 'react';

import Chatting from './presenter';

import { View, StyleSheet, Text, Button } from "react-native";

// stomp / socket client 오픈소스
import SockJsClient from 'react-stomp';

class Container extends Component{
    constructor(props) {
        super(props);
        // randomUserId is used to emulate a unique user id for this demo usage
        this.randomUserName = 'keke'
        this.randomUserId = 'keke0123'
        this.state = {
            clientConnected: false,
            messages: []
        };
    }
    onMessageReceive = (msg, topic) => {
        this.setState(prevState => ({
          messages: [...prevState.messages, msg]
        }));
        console.log(msg);
    }
    sendMessage = (msg, selfMsg) => {
        try {
          this.clientRef.sendMessage("/app/all", JSON.stringify(selfMsg));
          return true;
        } catch(e) {
          return false;
        }
    }
    componentWillMount() {
        fetch("/history", {
          method: "GET"
        }).then((response) => {
          this.setState({ messages: response.body });
        });
    }

    testBtn(){
        console.log("testBtn clicked");
        this.sendMessage('/topic/all',{"message":"keke0123"});
    }
    render(){
        const wsSourceUrl = "http://192.168.0.3:8080/handler";
        const {isLogin} = this.props;
        //console.log("isLogin:"+isLogin);
        return (
            <View>
                <Chatting />
                <SockJsClient url={ wsSourceUrl } topics={["/topic/all"]}
                    onMessage={ this.onMessageReceive } ref={ (client) => { this.clientRef = client }}
                    onConnect={ () => { this.setState({ clientConnected: true }) } }
                    onDisconnect={ () => { this.setState({ clientConnected: false }) } }
                    debug={ false }
                />
                <Button title="테스트" onPress={()=>{this.testBtn();}}></Button>
            </View>
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
