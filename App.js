 import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import axios from 'axios';

state = {
  data: [],
  aeroportos: ''
}

export default class App extends Component {

  componentDidMount() {
    axios.get(`http://192.168.0.153/react/index.php`)
    .then(function (response) { 
      response = (JSON.stringify(response))  
      alert(response)  
    })
    .catch(function (error) { 
      alert(error)
    });
  }
  
  render() {
    return (
      <View style={styles.container}>   
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
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
