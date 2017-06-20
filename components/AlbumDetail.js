// Import libraries for making a component
import React from 'react';
import { Text, View, Image } from 'react-native';
import Card from './Card';
import CardSection from './CardSection';

// Make a component
const AlbumDetail = ({ album }) => {
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
            <Text style={{lineHeight:20, fontSize:16}}>{title}</Text>
            <Text style={{lineHeight:20, fontSize:13,marginTop:2}}>{text}</Text>
          </View>
        </CardSection>
      </Card>
    );
};

const styles = {
  headerContentStyle: {
    flexDirection: 'column',
    justifyContent: 'space-around',
    paddingLeft:5,
    paddingLeft:5,
    
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};


// Make the component available to other parts of the app
export default AlbumDetail;
