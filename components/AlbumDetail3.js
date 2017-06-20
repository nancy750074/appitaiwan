// Import libraries for making a component
import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection2 from './CardSection2';

// Make a component
const AlbumDetail3 = ({ album }) => {
  const { title, text, image,time } = album;
  const {
    thumbnailStyle,
    headerContentStyle,
    imageStyle
  } = styles;

    return (
      <Card>
        
        <CardSection2>
          <Image
            style={imageStyle}
            source={{ uri: image }}
          />
          <View style={headerContentStyle}>
            <Text style={{ fontSize:16 }}>{title}</Text>
            <Text>{time}</Text>
            <Text>{text}</Text>
          </View>
        </CardSection2>
      </Card>
    );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: 220,
    marginLeft:7
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  imageStyle: {
    height: 120,
    width: 120,
    flex: 1,
  }
};


// Make the component available to other parts of the app
export default AlbumDetail3;
