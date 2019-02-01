import React, { Component } from "react";
import { StyleSheet, Button, Text, View } from "react-native";

export default class TestScreen2 extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Test2 Page</Text>
        <Button title="버튼"  onPress={() => {_testBtn1();}}/>
      </View>
    );
  }
}

_testBtn1 = () => {
  console.log("test2");
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
