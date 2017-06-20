import React, { Component } from 'react';
import { ScrollView,View,Text,StyleSheet,TouchableOpacity,Image } from 'react-native';
import { List, ListItem, Icon } from 'react-native-elements';

import Albuminto4 from './Albuminto4';
import AlbumDetail from './AlbumDetail';
import albums3 from '../json/albums3.json';

import playmore2 from './playmore2';

// Make a component
class play2 extends Component {
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
goToPageTwo = (playmore2) => {
    this.props.navigation.navigate('playmore2', { ...playmore2 });
  };

render() {
    return (
    <ScrollView>
      <View>
        < Albuminto4 />     
        <View style={{marginTop:10}}>
            <View>
                <View style={styles.middleStyle}>
                    <Text style={styles.textStyle}>熱門排行</Text> 
                    <TouchableOpacity onPress={()=>this.goToPageTwo(playmore2 )} style={{ backgroundColor:'#E9E9EF', width:60, height:13, left:680, flex:1 }}>
                      <Text style={{ fontSize:12, color:'#5d5d5d'}}> 查看更多 </Text>
                    </TouchableOpacity>
                </View> 
            </View> 
        </View>         
            {this.renderAlbums3()}   
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


export default play2;