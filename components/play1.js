import React, { Component } from 'react';
import { ScrollView,View,Text,StyleSheet,TouchableOpacity,Image } from 'react-native';
import { List, ListItem, Icon } from 'react-native-elements';

import Albuminto from './Albuminto';
import AlbumDetail from './AlbumDetail';
import albums from '../json/albums.json';

import playmore1 from './playmore1';

// Make a component
class play1 extends Component {

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
 goToPageTwo = (playmore1) => {
    this.props.navigation.navigate('playmore1', { ...playmore1 });
  };

render() {
    return (
    <ScrollView>
      <View>
        < Albuminto />
        <View style={{marginTop:10}}>
            <View>
                <View style={styles.middleStyle}>
                    <Text style={styles.textStyle}>熱門排行</Text>
                    <TouchableOpacity onPress={()=>this.goToPageTwo(playmore1)}
                      style={{ backgroundColor:'#E9E9EF', width:60, height:13, left:680, flex:1 }}>
                         <Text style={{ fontSize:12, color:'#5d5d5d'}}> 查看更多 </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
            {this.renderAlbums()}
        </View>
    </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
 middleStyle:{
    height:40,
    width:150,
    justifyContent:'center',
    paddingLeft:20,
    flex:1
  },
  textStyle:{
    top:15,
    fontSize:17,
    color:'#5d5d5d'
  },
});


export default play1;
