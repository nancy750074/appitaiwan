import React, { Component } from 'react';
import { ScrollView,View,Text,StyleSheet,TouchableOpacity,Image } from 'react-native';
import { List, ListItem, Icon } from 'react-native-elements';

import AlbumDetail from './AlbumDetail';
import albums3 from '../json/albums3.json';

class playmore2 extends Component{

  state = { albums3: [] };

  componentWillMount() {

    this.setState({ albums3 });
    console.log(this.state);
  }

  renderAlbums3() {
    return this.state.albums3.map(album =>
      <AlbumDetail key={album.title} album={album} />
    );
  }

  render(){
    return(
        <ScrollView>
          <View>
              {this.renderAlbums3()}
          </View>
        </ScrollView>
    );
  }

}
export default playmore2;
