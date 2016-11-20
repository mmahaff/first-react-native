/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

class FirstProject extends Component {
  constructor(props){
    super(props);
    this.state = {
      welcome: ""
    }
    this.buttonClicked = this.buttonClicked.bind(this)
  }

  buttonClicked() {
    console.log("Welcome to Tuber!");
    
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Tuber
        </Text>
        <Text style={styles.instructions}>
          Get started
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#72DBC9',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('FirstProject', () => FirstProject);
