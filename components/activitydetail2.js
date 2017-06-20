import React from 'react';
import { ScrollView, Linking} from 'react-native';
import { Button, Card,CardTitle,CardImage,CardContent,CardAction,Text, PricingCard, Tile } from 'react-native-elements';

// Make a component
const Activitydetail2 = (props) => {
  const { title, 
          time,
          place,
          introduce,
          url,
          image,
          descriptions,
  } = props.navigation.state.params;

  const { boldFont } = styles;

  return (
    <ScrollView>
    <Tile
                  imageSrc ={ require('./../assets/1.jpg')}
                  featured
                />

      <PricingCard
          
          color='#b8634f'
          title="2017桃園燈會"
          info={[`時間:02.10（五）~02.19（日）`, `地點: 桃園龍潭觀光大地`]}
          button={{ title: '加關注', icon:'star-border'}}
      />
      
      <Card>
        <Text style={boldFont}>活動簡介:</Text>
        <Text style={{ lineHeight:20,marginTop:10, marginBottom:15,fontSize:15}}>
          桃園燈會自2003年辦理迄今已第15個年頭，今年再次回到充滿濃濃客家風情的桃園龍潭，融入在地客家傳統「迎古董接財神」慶典活動，更設計全台首創龍潭大池環湖主燈秀與桃園6大特色燈組。         
        </Text>
        <Button
          raised
          backgroundColor='#b8634f'
          title='了解更多'
          onPress={() => Linking.openURL(url)}
          icon={{ name: 'star-border' }}
        />
      </Card>

    </ScrollView>
  );
};

const styles = {
  boldFont: {
    fontWeight: 'bold',
    fontSize:17
  }
};


export default Activitydetail2;