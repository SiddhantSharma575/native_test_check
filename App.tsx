import React, { Component } from "react";
import { Text, View } from "react-native";
import FirstElementTest from "./components/FirstElementTest";
import SecondElement from "./components/SecondElement";
import ThirdElement from "./components/ThirdElement";

export class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center" }}>
        {/* <FirstElementTest /> */}
        {/* <SecondElement /> */}
        <ThirdElement />
      </View>
    );
  }
}

export default App;
