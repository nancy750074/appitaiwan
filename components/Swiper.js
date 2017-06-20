import React, { Component } from 'react';
import {StyleSheet,Text,Image,TouchableOpacity,Navigator,View,Dimensions} from 'react-native';
import {ListItem, Divider, Tile, Icon} from 'react-native-elements';


import Swiper from 'react-native-swiper';

class ImageSwiper extends Component {

    render() {
      return (
        <Swiper style={styles.wrapper}
        showsButtons={true}
        autoplay = {true}
        autoplayTimeout = {8}
        height = {400}
        dotStyle = {{marginBottom: -10}} 
        activeDotStyle = {{marginBottom: -10}}
        >
        <View style={styles.slide1}>
             <Tile
                  imageSrc ={ require('./../assets/light.jpg')}
                  title = {'平溪天燈節'}
                  featured
                     
                   titleStyle = {{ fontWeight: 'bold',fontSize:25, justifyContent: 'flex-start',marginLeft:-550,marginTop:100}}
                   captionStyle = {{width: 230, lineHeight: 0}}
                />
                   

          </View>




          <View style={styles.slide2}>
           <Tile
                  imageSrc ={ require('./../assets/light2.jpg')}
                  title = {'頭城搶孤'}
                  featured
                     
                   titleStyle = {{ fontWeight: 'bold',fontSize:25, justifyContent: 'flex-start',marginLeft:-550,marginTop:100}}
                   captionStyle = {{width: 230, lineHeight: 0}}
                />
          </View>





          <View style={styles.slide3}>
            <Tile
                  imageSrc ={ require('./../assets/light3.jpg')}
                  title = {'炮炸寒單爺'}
                  featured
                     
                   titleStyle = {{ fontWeight: 'bold',fontSize:25, justifyContent: 'flex-start',marginLeft:-550,marginTop:100}}
                   captionStyle = {{width: 230, lineHeight: 0}}
                />
          </View>
        </Swiper>
      )
    }

  }

  const styles = StyleSheet.create({
        wrapper: {
      },
      slide1: {
        flex: 1,
        justifyContent: 'flex-start',
        
      },
      slide2: {
        flex: 1,
        justifyContent: 'flex-start',
      },
      slide3: {
        flex: 1,
        justifyContent: 'flex-start',
      },
      text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold',
      }
  });

  export default ImageSwiper;
