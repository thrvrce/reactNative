import React, {FC, useEffect, useState, useRef} from 'react';
import {TextInput, View, StyleSheet, Pressable, Text} from 'react-native';
import SearchIcon from '../../../icons/SearchIcon.svg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {textStyles} from '../../reusableStyles/textStyles';

interface ISearchBar {
  redirectOnTouch?: () => void;
  autoFocus?: boolean;
  onSubmitEditing?: (text: string) => void;
}
export const SearchBar: FC<ISearchBar> = props => {
  const {redirectOnTouch, autoFocus = false, onSubmitEditing} = props;
  const textInputElement = useRef<TextInput>(null);
  const [searchString, setSearchString] = useState('');
  const [showPreviousSearches, setShowPreviousSearches] = useState(autoFocus);
  const [searchHistory, setSearchHistory] = useState<string[]>([]);

  const submitHandler = async (text: string) => {
    try {
      if (textInputElement?.current?.isFocused()) {
        textInputElement.current.blur();
      }
      if (searchString !== text) {
        setSearchString(text);
      }
      onSubmitEditing?.(text);
      const storageItem = await AsyncStorage.getItem('searchHistory');
      let storedSearchHistory: string[] = [];
      if (storageItem !== null) {
        storedSearchHistory = JSON.parse(storageItem);
        storedSearchHistory = storedSearchHistory.filter(
          searchRecord => searchRecord !== text,
        );
        storedSearchHistory.unshift(text);
      }
      if (storedSearchHistory.length > 20) {
        storedSearchHistory = storedSearchHistory.filter(
          (_, index) => index <= 20,
        );
      }
      setSearchHistory(storedSearchHistory);
      const stringifiedStoredSearchHistory =
        JSON.stringify(storedSearchHistory);
      await AsyncStorage.setItem(
        'searchHistory',
        stringifiedStoredSearchHistory,
      );
    } catch (err) {
      console.log(err);
    }
  };

  const deleteSearchRecordHandler = async (searchRecordToDelete: string) => {
    try {
      const storageItem = await AsyncStorage.getItem('searchHistory');
      let storedSearchHistory: string[] = [];
      if (storageItem !== null) {
        storedSearchHistory = JSON.parse(storageItem);
        storedSearchHistory = storedSearchHistory.filter(
          searchRecord => searchRecord !== searchRecordToDelete,
        );
      }

      setSearchHistory(storedSearchHistory);
      const stringifiedStoredSearchHistory =
        JSON.stringify(storedSearchHistory);
      await AsyncStorage.setItem(
        'searchHistory',
        stringifiedStoredSearchHistory,
      );
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    AsyncStorage.getItem('searchHistory').then(storageItem => {
      let storedSearchHistory: string[] = [];
      if (storageItem !== null) {
        storedSearchHistory = JSON.parse(storageItem);
      }
      setSearchHistory(storedSearchHistory);
    });
  }, []);
  return (
    <>
      <View style={styles.searchBarWrapper}>
        <View style={styles.searchBar}>
          {redirectOnTouch ? (
            <Pressable onPress={redirectOnTouch}>
              <SearchIcon />
            </Pressable>
          ) : (
            <View style={styles.inner}>
              <SearchIcon onPress={() => submitHandler(searchString)} />
              <TextInput
                ref={textInputElement}
                style={styles.textInput}
                onChangeText={setSearchString}
                value={searchString}
                keyboardType="default"
                onSubmitEditing={() => submitHandler(searchString)}
                autoFocus={autoFocus}
                onFocus={() => setShowPreviousSearches(true)}
                onBlur={() => {
                  setShowPreviousSearches(false);
                }}
              />
            </View>
          )}
        </View>
      </View>
      {showPreviousSearches && (
        <View style={styles.suggestions}>
          <>
            {searchHistory
              .filter(searchRecord =>
                searchRecord.toLowerCase().includes(searchString.toLowerCase()),
              )
              .map(searchRecord => (
                <View style={styles.searchRecordRow}>
                  <Text
                    style={[textStyles.commonText, styles.searchRecordText]}
                    onPress={() => {
                      submitHandler(searchRecord);
                    }}>
                    {searchRecord}
                  </Text>
                  <Text
                    onPress={() => {
                      deleteSearchRecordHandler(searchRecord);
                    }}>
                    delete
                  </Text>
                </View>
              ))}
          </>
        </View>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  searchBarWrapper: {
    backgroundColor: 'white',
    padding: 20,
  },
  searchBar: {
    paddingLeft: 10,
    borderColor: '#8F8F8F',
    borderWidth: 1,
    borderRadius: 4,
  },
  inner: {
    flexDirection: 'row',
  },
  textInput: {
    padding: 0,
    flex: 1,
    lineHeight: 16,
  },
  suggestions: {
    position: 'absolute',
    paddingLeft: 30,
    paddingRight: 10,
    marginLeft: 20,
    top: 45,
    width: '90%',
    backgroundColor: 'white',
    zIndex: 1,
    borderColor: '#8F8F8F',
    borderWidth: 1,
    borderRadius: 4,
  },
  searchRecordRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  searchRecordText: {
    fontSize: 16,
    color: '#4A4A4A',
  },
});
