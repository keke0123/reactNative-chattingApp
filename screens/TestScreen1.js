import React, { Component } from "react";
import { StyleSheet, Button, Text, View } from "react-native";

export default class TestScreen1 extends React.Component {
  render() {
    const { navigation } = this.props;
    //console.log(navigation);
    return (
      <View style={styles.container}>
        <Text>Test1 Page</Text>
        <Button
          title="버튼"
          onPress={() => {
            console.log("hi");
            _testBtn(navigation);
          }}
        />
      </View>
    );
  }
}
_testBtn = (navigation) => {
  console.log("test1");
  console.log(navigation);
  //navigation.navigate("Test");
  navigation.replace("Test");
  
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
