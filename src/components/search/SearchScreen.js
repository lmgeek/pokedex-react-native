import React, { Component} from 'react';
import { SearchBar } from 'react-native-elements';
import { StyleSheet } from 'react-native';

 class SearchScreen extends Component {
  state = {
    search: '',
  };

  updateSearch = (search) => {
    this.setState({ search });
  };

  render() {
    const { search } = this.state;

    return (
        <SearchBar
            inputStyle={{backgroundColor: 'white'}}
            containerStyle={styles.search}
            placeholder="Search Pokemon..."
            onChangeText={this.updateSearch}
            value={search}
            lightTheme
            platform="android"
        />
    );
  }
}

const styles = StyleSheet.create({
    search: {
        backgroundColor: 'white', 
        borderWidth: 1, 
        borderRadius: 50,
        borderColor: "#6c4675", 
        margin: 15, 
    },
    container: {
        borderRadius: 20,
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    }
  });


export default SearchScreen