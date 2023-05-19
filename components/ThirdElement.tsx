import { Text, View, TextInput, Button, Alert } from "react-native";
import React, { Component } from "react";

interface ThirdState {
  username: string;
  password: string;
}

class ThirdElement extends Component<{}, ThirdState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }
  login() {
    if (!this.state.username || !this.state.password) {
      Alert.alert("Please Enter all Details");
    } else {
      Alert.alert("Login Successfull");
    }
  }
  render() {
    return (
      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
        <TextInput
          testID="username-input"
          style={{ width: "90%", height: 45, borderRadius: 15 }}
          value={this.state.username}
          onChangeText={(text) =>
            this.setState({ ...this.state, username: text })
          }
        />
        <TextInput
          testID="password-input"
          style={{ width: "90%", height: 45, borderRadius: 15 }}
          value={this.state.password}
          onChangeText={(text) =>
            this.setState({ ...this.state, password: text })
          }
        />
        <Button testID="btn" title="Login" onPress={() => this.login()} />
      </View>
    );
  }
}

export default ThirdElement;
