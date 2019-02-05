import React, {Component} from 'react';

import Chatting from './presenter';

import { View, StyleSheet, Text, Button } from "react-native";

// stomp / socket client 오픈소스
import SockJsClient from 'react-stomp';

// easy grid 오픈소스
import {Col, Row, Grid} from 'react-native-easy-grid';

class Container extends Component{
    constructor(props) {
        super(props);
        var d = new Date();
        this.randomUserName = props.loginId;
        this.randomUserId = props.loginId+"."+d.getTime();
        this.state = {
            clientConnected: false,
            messages: [],
            testTxt:'test',
        };
        console.log(this.randomUserId);
        // loginId / redux state
        //console.log(props);
    }
    onMessageReceive = (msg, topic) => {
        console.log("topic:"+topic); // topic/all 이 온다. 이거로 구분 가능
        this.setState(prevState => ({
          messages: [...prevState.messages, msg]
        }));
        console.log(msg);
    }
    sendMessage = (msg, selfMsg) => {
        this.setState({
            messages:this.state.messages.concat(selfMsg)
        });
        try {
          this.clientRef.sendMessage("/app/all", JSON.stringify(selfMsg));
          console.log(this.state.messages);
          return true;
        } catch(e) {
          return false;
        }
    }
    
    componentWillMount() {
        // fetch("/history", {
        //   method: "GET"
        // }).then((response) => {
        //   this.setState({ messages: response.body });
        // });
    }

    testBtn(t){
        console.log(t);
        console.log("testBtn clicked");
        this.sendMessage('/topic/all',{
            name:this.randomUserName,
            isMe:true,
            message:"keke0123"
        });
        //console.log(this.state);
        //console.log(this.state.messages);
    }
    render(){
        const wsSourceUrl = "http://192.168.0.3:8080/handler";
        const {isLogin} = this.props;
        //console.log("isLogin:"+isLogin);
        return (
            <Grid>
                <Chatting {...this.props} {...this.state}/>
                <SockJsClient url={ wsSourceUrl } topics={["/topic/all", "/topic/"+this.randomUserId]}
                    onMessage={ this.onMessageReceive } ref={ (client) => { this.clientRef = client }}
                    onConnect={ () => { this.setState({ clientConnected: true }) } }
                    onDisconnect={ () => { this.setState({ clientConnected: false }) } }
                    debug={ false }
                />
                <Button title="테스트" onPress={()=>{this.testBtn("/topic/"+this.randomUserId);}}></Button>
            </Grid>
        );
    }
}
//<Button title="테스트" onPress={()=>{this.testBtn("/topic/"+this.randomUserId);}}></Button>

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      justifyContent: "center",
      alignItems: 'center'
    }
});

export default Container;
