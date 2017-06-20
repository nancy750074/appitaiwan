import React, { Component } from 'react';
import { ScrollView,View,Text,StyleSheet,TouchableOpacity,Image } from 'react-native';
import { List, ListItem, Icon } from 'react-native-elements';

import Albuminto from './Albuminto';
import AlbumDetail from './AlbumDetail';
import albums from '../json/albums.json';
import play1detail1 from './play1detail1';


// Make a component
class play1 extends Component {
    state = { albums: [] }; 

  componentWillMount() {

    this.setState({ albums });
  }

  goToPageTwo = (albums) => {
    this.props.navigation.navigate('play1detail1', { ...albums });
  };

 renderAlbums() {
    return this.state.albums.map(album => 
      <AlbumDetail key={album.title} album={album} />
    );
  }


render() {
    return (
  <View>
     < Albuminto />     

    <View style={{marginTop:10}}>
        <View>
            <View style={styles.BannerStyle}>
                <Text style={styles.textStyle}>熱門排行</Text> 
             </View> 
        </View> 
    </View>

 <View>       

      <ScrollView>
        
         {this.state.albums.map((albums) => (
          <View key={albums.title}>
            
            <TouchableOpacity
              onPress={()=>this.goToPageTwo(albums )}
              style={{flex:1}}
            >
            {this.renderAlbums()}
            
            </TouchableOpacity>
          </View>
          ))}
      </ScrollView>

   </View>    
    </View>

    );
  }
}


const styles = StyleSheet.create({
  BannerStyle:{
    height:40,
    backgroundColor:'#DAE2E5',
    justifyContent:'center',
    paddingLeft:20,
  },
  textStyle:{
    color:'#575F72'
  }
});


export default play1;