import React, { Component } from 'react';
import { ScrollView,View,Text,StyleSheet,TouchableOpacity,Image } from 'react-native';
import { List, ListItem, Icon } from 'react-native-elements';

import AlbumDetail from './AlbumDetail2';
import albums2 from '../json/albums2.json';


// Make a component
class Albuminto extends Component {
    state = { albums2: [] };

  componentWillMount() {

    this.setState({ albums2 });
    console.log(this.state);
  }

  renderAlbums2() {
    return this.state.albums2.map(album => 
      <AlbumDetail key={album.title} album={album} />
    );
  }


render() {
    return (
  <View>
      <ScrollView horizontal={true}>
        {this.renderAlbums2()}
      </ScrollView>
    </View>

    );
  }
}

export default Albuminto;