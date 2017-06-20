import React, { Component } from 'react';
import { AppRegistry,StyleSheet,View,Text,Image,ScrollView,TextInput } from 'react-native';
import { Tile, Icon  } from 'react-native-elements';
import person from '../json/person.json';

import { MeTabRouter } from '../Router';


class MyLove extends Component {
  state = { MyLove: [] };

  componentWillMount() {
    this.setState({ person });
  }

  render() {
    return (
      <ScrollView>
        <View>
          <View>
            <Tile
              imageSrc={require('./../Asset/MyLove_banner.jpg')}
              imageContainerStyle={{height:400}}
              featured
          />
          </View>
        </View>
        <View style={styles.data}>
            <View>
                 <Image source={require('./../assets/ntue.jpg')}
                 style={styles.profile}
                 />


            {this.state.person.map((personDetial) => (
            <TextInput
              key= {personDetial.name}
              style={styles.NameInput}
              placeholder={personDetial.name}
              placeholderTextColor="#dddddd"
              onChangeText={(text) => this.setState({input: text})}
              />
            ))}
              {this.state.person.map((personDetial) => (
              <TextInput
                key= {personDetial.email}
                style={styles.EmailInput}
                placeholder={personDetial.email}
                placeholderTextColor="#dddddd"
                onChangeText={(text) => this.setState({input: text})}
                />
              ))}
                <View>
                <Icon style={styles.Icon}
                  name='edit'
                  color='white'
                  iconStyle={{ marginRight: 10 }}
                />
              </View>
         </View>
         </View>
            <MeTabRouter />

      </ScrollView>

    );
  }
}

const styles = {
   Container:{
     flexDirection:'row',
   },
    profile:{
      width:150,
      height:150,
      borderRadius:75,
      alignSelf:'center',
      shadowOpacity:0.8,
      shadowRadius:2,
    },
    data:{
        marginTop:-520,
    },
    NameInput:{
      width:250,
      height:50,
      alignSelf:'center',
      textAlign:'center',
      borderColor:'transparent',
      color:'white',
      fontSize: 32,
      fontWeight: 'bold',
      fontFamily: 'AppleSDGothicNeo-Regular',
    },
    EmailInput:{
     paddingTop:-20,
      width:250,
      height:50,
      alignSelf:'center',
      textAlign:'center',
      borderColor:'transparent',
      color:'white',
      fontSize: 18,
      fontWeight: 'bold',
      fontFamily: 'AppleSDGothicNeo-Regular',
    },
    Icon:{
      marginTop:-90,
      marginLeft:440,
    },
}

export default MyLove;
