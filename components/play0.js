import React, { Component } from 'react';
import { ScrollView,View,Text,StyleSheet,TouchableOpacity,Image } from 'react-native';
import { List, ListItem, Icon } from 'react-native-elements';


import albums from '../json/albums.json';

// Make a component
class play0 extends Component {
    state = { albums: [] }; 

  componentWillMount() {

    this.setState({ albums });
  }


render() {
    return (
  <View>    
            <View>
                <Text>熱門排行</Text> 
             </View> 
   
    </View>

    );
  }
}


export default play0;