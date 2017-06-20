import React, { Component } from 'react';
import { ScrollView,View,Text,StyleSheet,TouchableOpacity,Image } from 'react-native';
import { List, ListItem, Icon } from 'react-native-elements';
import AlbumDetail from './AlbumDetail';
import albums from '../json/albums.json';
class playmore1 extends Component{

  state = { albums: [] };

  componentWillMount() {

    this.setState({ albums });
    console.log(this.state);
  }

  renderAlbums() {
    return this.state.albums.map(album =>
      <AlbumDetail key={album.title} album={album} />
    );
  }
  render(){
    return(
        <ScrollView>
          <View>
              {this.renderAlbums()}
          </View>
        </ScrollView>
    );
  }

}
export default playmore1;
