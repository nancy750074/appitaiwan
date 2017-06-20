import React from 'react';
import {StyleSheet,Text,Image,TouchableOpacity,Navigator,View,Dimensions} from 'react-native';
import {ListItem, Divider, Tile, Icon} from 'react-native-elements';

const CardSection = (props) => {
    return (
        <View style={styles.containerStyle}>
            <View>
             <TouchableOpacity 
                          onPress ={() => this.onPress}
                          style ={{ position: 'absolute',  alignSelf: 'flex-end',padding:35,paddingTop:5 }} >
                          <Icon name="favorite-border" size={30} color={'#b8634f'} />
                    </TouchableOpacity>
             </View>
            {props.children}
        </View>
    );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};

export default CardSection;