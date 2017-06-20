import React , { Component }from 'react';
import { SearchBar } from 'react-native-elements'

class SearchPage extends Component{
  search(){

  }
  render(){
    return(
      <SearchBar
        lightTheme
        round
        onChangeText={this.search}
        placeholder='Type Here...' />
    );
  }

}
export default SearchPage;
