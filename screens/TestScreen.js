import React, { Component } from "react";
import { StyleSheet, Button, Text, View } from "react-native";

import { createStackNavigator, createAppContainer } from "react-navigation";

export default class TestScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Test Page</Text>
        <Button title="버튼" 
          onPress={() => this.props.navigation.navigate('Test2')} 
        />
      </View>
    );
  }
}
_testBtn = () => {
  // <Button title="버튼"
  //         onPress={_testBtn}
  //       />
  console.log("test");

};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
