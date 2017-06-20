import React, { Component } from 'react';
import { ScrollView,View,Text,StyleSheet,TouchableOpacity,Image } from 'react-native';
import { List, ListItem, Icon } from 'react-native-elements';

import AlbumDetail from './AlbumDetail2';
import albums4 from '../json/albums4.json';


// Make a component
class Albuminto extends Component {
    state = { albums4: [] };

  componentWillMount() {

    this.setState({ albums4 });
    console.log(this.state);
  }

  renderAlbums4() {
    return this.state.albums4.map(album => 
      <AlbumDetail key={album.title} album={album} />
    );
  }


render() {
    return (
  <View>
      <ScrollView horizontal={true}>
        {this.renderAlbums4()}
      </ScrollView>
    </View>

    );
  }
}

export default Albuminto;