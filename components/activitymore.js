import React, { Component } from 'react';
import { ScrollView,View,Text,StyleSheet,TouchableOpacity,Image,} from 'react-native';
import { List, ListItem, Icon } from 'react-native-elements';

import AlbumDetail4 from './AlbumDetail4';
import albums7 from '../json/albums7.json';

// Make a component
class activitymore extends Component {
    state = { albums7: [] };

    componentWillMount() {

      this.setState({ albums7 });
      console.log(this.state);
    }

    renderAlbums7() {
      return this.state.albums7.map(album =>
        <AlbumDetail4 key={album.title} album={album} />
      );
    }


  render() {
    return (
      <ScrollView>

      <View>
        {this.renderAlbums7()}
      </View>

       </ScrollView>
    );
  }
}


export default activitymore;
