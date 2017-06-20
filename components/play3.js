import React, { Component } from 'react';
import { ScrollView,View,Text,StyleSheet,TouchableOpacity,Image } from 'react-native';
import { List, ListItem, Icon } from 'react-native-elements';

import Albuminto6 from './Albuminto6';
import AlbumDetail from './AlbumDetail';
import albums5 from '../json/albums5.json';

import playmore3 from './playmore3';

// Make a component
class play3 extends Component {
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
goToPageTwo = (playmore3) => {
    this.props.navigation.navigate('playmore3', { ...playmore3 });
  };

render() {
    return (
      <ScrollView>
        <View>
          < Albuminto6 />     
          <View style={{marginTop:10}}>
              <View>
                  <View style={styles.middleStyle}>
                      <Text style={styles.textStyle}>熱門排行</Text>
                      <TouchableOpacity onPress={()=>this.goToPageTwo(playmore3 )} style={{ backgroundColor:'#E9E9EF', width:60, height:13, left:680, flex:1 }}>
                        <Text style={{ fontSize:12, color:'#5d5d5d'}}> 查看更多 </Text>
                      </TouchableOpacity> 
                  </View> 
              </View> 
          </View>
              {this.renderAlbums5()}
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
  },
  textStyle:{
    top:15,
    fontSize:17,
    color:'#5d5d5d'
  }
});


export default play3;