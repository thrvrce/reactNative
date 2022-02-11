import React, {FC} from 'react';
import {TextInput, View, StyleSheet, Pressable} from 'react-native';
import SearchIcon from '../../../icons/SearchIcon.svg';

interface ISearchBar {
  redirectOnTouch?: () => void;
  autoFocus?: boolean;
  onSubmitEditing?: (text: string) => void;
}
export const SearchBar: FC<ISearchBar> = props => {
  const {redirectOnTouch, autoFocus = false, onSubmitEditing} = props;
  const [text, onChangeText] = React.useState('');
  return (
    <View style={styles.searchBarWrapper}>
      <View style={styles.searchBar}>
        {redirectOnTouch ? (
          <Pressable onPress={redirectOnTouch} style={styles.redirectPressable}>
            <SearchIcon />
          </Pressable>
        ) : (
          <>
            <SearchIcon onPress={() => onSubmitEditing?.(text)} />
            <TextInput
              style={styles.textInput}
              onChangeText={onChangeText}
              value={text}
              keyboardType="default"
              onSubmitEditing={() => onSubmitEditing?.(text)}
              autoFocus={autoFocus}
            />
          </>
        )}
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
  textInput: {
    padding: 0,
    flex: 1,
  },
  redirectPressable: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    paddingLeft: 10,
  },
});
