import React, { Component } from 'react';
import { ScrollView,View,Text,StyleSheet,TouchableOpacity,Image } from 'react-native';
import { List, ListItem, Icon } from 'react-native-elements';

import AlbumDetail3 from './AlbumDetail3';
import albums8 from '../json/albums8.json';


// Make a component
class Albuminto extends Component {
    state = { albums8: [] };

  componentWillMount() {

    this.setState({ albums8 });
    console.log(this.state);
  }

  renderAlbums8() {
    return this.state.albums8.map(album => 
      <AlbumDetail3 key={album.title} album={album} />
    );
  }


render() {
    return (
  <View>
      <ScrollView horizontal={true}>
        {this.renderAlbums8()}
      </ScrollView>
    </View>

    );
  }
}

export default Albuminto;