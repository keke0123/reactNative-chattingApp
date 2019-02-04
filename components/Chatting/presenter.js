import React, {Component} from 'react';
//import Login from './presenter';

import { View, StyleSheet, Text, Button, ScrollView } from "react-native";

//
const Chatting = (props) => (

    <View style={styles.container}>
        <Text>chatting page</Text>
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

export default Chatting;