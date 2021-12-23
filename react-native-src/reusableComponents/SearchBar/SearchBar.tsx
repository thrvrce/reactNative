import React, {FC} from 'react';
import {TextInput, View} from 'react-native';
import {StyleSheet} from 'react-native';
import SearchIcon from '../../../icons/SearchIcon.svg';

export const SearchBar: FC = () => {
  const [text, onChangeText] = React.useState('');
  return (
    <View style={styles.searchBarWrapper}>
      <View style={styles.searchBar}>
        <SearchIcon />
        <TextInput
          style={{padding: 0}}
          onChangeText={onChangeText}
          value={text}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBarWrapper: {
    backgroundColor: '#FFFFFF',
    justifyContent: 'center',
    height: 74,
    padding: 20,
    elevation: 10,
    shadowColor: 'rgba(0, 0, 0, 0.3)',
  },
  searchBar: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    height: 34,
    paddingLeft: 10,
    borderColor: '#8F8F8F',
    borderStyle: 'solid',
    borderWidth: 1,
    borderRadius: 4,
  },
});
