import React, { Component } from 'react'
import { StyleSheet, Text, View } from 'react-native'

export class FirstElementTest extends Component {
  render() {
    return (
      <View>
        <Text style={styles.text1} testID="sample">Text Element Check</Text>
      </View>
    )
  }
}

export default FirstElementTest

const styles = StyleSheet.create({
    text1: {
        fontSize : 20,
        color : "#000",
        marginTop : 15
    }
})