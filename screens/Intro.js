import React from 'react';
import AppIntroSlider from 'react-native-app-intro-slider';
import { StyleSheet, View, Image, Text } from 'react-native';
const slides = [
  {
    key: 'somethun',
    title: 'Title 1',
    text: 'Description.\nSay something cool',
    image: require('../images/1img.jpeg'),
   
  },
  {
    key: 'somethun-dos',
    title: 'Title 2',
    text: 'Other cool stuff',
    image: require('../images/2img.jpeg'),
  
  },
  {
    key: 'somethun1',
    title: 'Rocket guy',
    text: 'I\'m already out of descriptions\n\nLorem ipsum bla bla bla',
    image: require('../images/3img.jpeg'),
   
  }
];
 
export default class Intro extends React.Component {
  

  _renderItem = (item) => {
    return (
      <View style={{flex:1}}>
        <Text >{item.title}</Text>
       
        <Text >{item.text}</Text>
      </View>
    );
  }
  _onDone = () => {
    // User finished the introduction. Show real app through
    // navigation or simply by controlling state
    this.props.navigation.navigate('Welcome')
  }
  render() {
    
  
      return <AppIntroSlider renderItem={this._renderItem} slides={slides} onDone={this._onDone}/>;
  
  }
}

