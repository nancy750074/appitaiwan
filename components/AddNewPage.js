import React, { Component } from 'react';
import { StyleSheet,View,Text,Image,ScrollView,TextInput } from 'react-native';


class AddNewPage extends Component{
  state = { AddNewPage: [] };

  componentWillMount() {
    this.setState({ AddNewPage });
  }

  render(){
    return(
      <ScrollView>
      <View style={styles.container}>
        <View>
        <Text style={styles.title}>作品名稱:</Text>
        </View>
        <TextInput
          style={styles.Input}
          placeholder={'Ex:竹筷槍'}
          placeholderTextColor="#c2c2c0"
          onChangeText={(text) => this.setState({input: text})}
          />
      </View>
      <View style={styles.line}></View>

      <View style={styles.container}>
        <View>
        <Text style={styles.title}>作品簡介:</Text>
        </View>
        <TextInput
          style={styles.Input}
          placeholder={'Ex:以竹製免洗筷和橡皮筋所製成的橡皮筋槍，為一種玩具。'}
          placeholderTextColor="#c2c2c0"
          onChangeText={(text) => this.setState({input: text})}
          />
      </View>
      <View style={styles.line}></View>

      <View style={styles.container}>
        <View>
        <Text style={styles.title}>所需材料:</Text>
        </View>
        <TextInput
          style={styles.Input}
          placeholder={'Ex:至少五根竹筷及四條橡皮筋。'}
          placeholderTextColor="#c2c2c0"
          onChangeText={(text) => this.setState({input: text})}
          />
      </View>
      <View style={styles.line}></View>

      <View style={styles.container}>
        <View>
        <Text style={styles.title}>製作方法:</Text>
        </View>
        <TextInput
          style={styles.Input3}
          multiline = {true}
          placeholder={'Ex:1.用刀將兩根竹筷鋸成兩半\n     2.用刀在一根長竹筷的末端切出凹痕\n     3.以兩根長竹筷並排夾起兩根短竹筷，再將兩根短竹筷併攏，\n     短竹筷會與長竹筷成三角形。以三條橡皮筋將三個節點綁緊\n     4.將一根短竹筷垂直置於兩根長竹筷中間，做為扳機，\n     以橡皮筋綁住，但仍需留下可活動的空間。\n     5.將有凹痕的竹筷並排置於兩根長竹筷中間，凹痕向外，\n     將三根長竹筷中間，以橡皮筋和短竹筷做支架綁緊，\n     即可完成。'}
          placeholderTextColor="#c2c2c0"
          onChangeText={(text) => this.setState({input: text})}
          />
      </View>
      <View style={styles.line}></View>

      <View style={styles.container}>
        <View>
        <Text style={styles.title}>上傳照片:</Text>
        </View>
        <TextInput
          style={styles.Input}
          placeholderTextColor="#c2c2c0"
          onChangeText={(text) => this.setState({input: text})}
          />
      </View>

      </ScrollView>
    );

  }

}
const styles = {
    container:{
      flex:1,
      flexDirection:'row',
      margin:20,
    },
    title:{
      flex:2,
      color:'black',
      marginTop:25,
      textAlign:'center',
      fontSize: 20,
      fontWeight: 'bold',
      fontFamily: 'AppleSDGothicNeo-Regular',
    },
    Input:{
      flex:3,
      marginLeft:20,
      height:75,
      borderColor:'transparent',
      color:'black',
      fontSize: 20,
      fontWeight: 'bold',
      fontFamily: 'AppleSDGothicNeo-Regular',
    },
    Input3:{
      flex:3,
      marginTop:30,
      marginLeft:20,
      height:300,
      borderColor:'transparent',
      color:'black',
      fontSize: 20,
      fontWeight: 'bold',
      fontFamily: 'AppleSDGothicNeo-Regular',
    },
    line:{
      marginTop:-30,
      flex:1,
      height:2,
      backgroundColor:'#adafb2',
    },
}

export default AddNewPage;
