// Import libraries for making a component
import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

// Make a component
const AlbumDetail2 = ({ album }) => {
  const { title, text, image } = album;
  const {
    thumbnailStyle,
    headerContentStyle,
    imageStyle
  } = styles;

    return (
      <Card>
        
        <CardSection>
          <Image
            style={imageStyle}
            source={{ uri: image }}
          />
        </CardSection>
        <CardSection>
          <View style={headerContentStyle}>
            <Text style={{ fontSize:16 }}>{title}</Text>
            <Text style={{ fontSize:13 }}>收藏度：
              <Image
                style={{flex:1,width:65,height:15,top:3}}
                source={{ uri: text }}
              />
            </Text>
          </View>
        </CardSection>
      </Card>
    );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  imageStyle: {
    height: 200,
    width: 250,
    flex: 1,
  }
};


// Make the component available to other parts of the app
export default AlbumDetail2;
