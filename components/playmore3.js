import React, { Component } from 'react';
import { ScrollView,View,Text,StyleSheet,TouchableOpacity,Image } from 'react-native';
import { List, ListItem, Icon } from 'react-native-elements';

import AlbumDetail from './AlbumDetail';
import albums5 from '../json/albums5.json';

class playmore3 extends Component{

  state = { albums5: [] };

  componentWillMount() {

    this.setState({ albums5 });
    console.log(this.state);
  }

  renderAlbums5() {
    return this.state.albums5.map(album =>
      <AlbumDetail key={album.title} album={album} />
    );
  }

  render(){
    return(
        <ScrollView>
          <View>
              {this.renderAlbums5()}
          </View>
        </ScrollView>
    );
  }

}
export default playmore3;
