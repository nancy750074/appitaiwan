import React, { Component } from 'react';
import { ScrollView,View,Text,StyleSheet,TouchableOpacity,Image } from 'react-native';
import { List, ListItem, Icon } from 'react-native-elements';

import AlbumDetail from './AlbumDetail2';
import albums6 from '../json/albums6.json';


// Make a component
class Albuminto extends Component {
    state = { albums6: [] };

  componentWillMount() {

    this.setState({ albums6 });
    console.log(this.state);
  }

  renderAlbums6() {
    return this.state.albums6.map(album => 
      <AlbumDetail key={album.title} album={album} />
    );
  }


render() {
    return (
  <View>
      <ScrollView horizontal={true}>
        {this.renderAlbums6()}
      </ScrollView>
    </View>

    );
  }
}

export default Albuminto;