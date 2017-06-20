import React, { Component } from 'react';
import { AppRegistry,StyleSheet,View,Text,Image,ScrollView,TextInput } from 'react-native';
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
            <View  style={styles.picstyle}>
                 <Image source={require('./../Asset/collection3.png')}
                   style={styles.pic2style}
                 />
            </View>
   
    </View>

    );
  }
}

const styles = {
    picstyle:{
    justifyContent:'center',
    alignItems:'center',
  },
  pic2style:{
    height:400,
    width:400,
    marginTop:40,
    flex:1 
    
  },
}



export default play0;