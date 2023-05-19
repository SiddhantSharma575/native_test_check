import { Button, Text, View } from "react-native";
import React, { Component } from "react";

export class SecondElement extends Component {
  handleClick() {
    console.warn("Button Clicked");
  }
  render() {
    return (
      <View>
        <Button testID="btn" title="Click" onPress={() => this.handleClick()} />
      </View>
    );
  }
}

export default SecondElement;
