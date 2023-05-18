import React, { Component } from 'react'
import { Text, View } from 'react-native'
import FirstElementTest from './components/FirstElementTest'

export class App extends Component {
  render() {
    return (
      <View style={{flex : 1, alignItems  : "center"}}>
         <FirstElementTest />
      </View>
    )
  }
}

export default App
