import React, { Component } from 'react';
import { ScrollView,View,Text,StyleSheet,TouchableOpacity,Image,} from 'react-native';
import { List, ListItem, Icon } from 'react-native-elements';

import Albuminto8 from './Albuminto8';
import AlbumDetail4 from './AlbumDetail4';

import albums7 from '../json/albums7.json';
import ImageSwiper from './Swiper';

import Card from './Card';
import CardSection from './CardSection';

import activitymore from './activitymore';
import activitydetail2 from './activitydetail2';

// Make a component
// Make a component
class Activity extends Component {
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

     goToPageTwo = (activitymore) => {
      this.props.navigation.navigate('activitymore', { ...activitymore });
    };
    goToPageThree = (activitydetail2) => {
      this.props.navigation.navigate('activitydetail2', { ...activitydetail2 });
    };

  render() {
    return (
      <ScrollView>
        <View>
        <View>
             < ImageSwiper  />
        </View>

          <View>
               < Albuminto8 />
          </View>

     <View style={{marginTop:10}}>
            <View>
                <View style={styles.middleStyle}>
                    <Text style={styles.textStyle}>達人推薦</Text>
                    <TouchableOpacity onPress={()=>this.goToPageTwo(activitymore )}
              style={{flex:1}} style={{ backgroundColor:'#E9E9EF', width:60, height:13, left:680, flex:1 }}>
                         <Text style={{ fontSize:12, color:'#5d5d5d'}}> 查看更多 </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>

      <TouchableOpacity
              onPress={()=>this.goToPageThree(activitydetail2 )}
              style={{flex:1}}
            >
            {this.renderAlbums7()}
            
            </TouchableOpacity>

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
  picstyle:{
    height: 200,
    flex: 1,
    width: null,
    marginTop:120,
    marginBottom:120,
    justifyContent:'center',
    alignItems:'center',

  }
});
export default Activity;
