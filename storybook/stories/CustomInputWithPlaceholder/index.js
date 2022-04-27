import React, {useState, useRef, useEffect} from 'react';
import PropTypes from 'prop-types';
import {TextInput, Animated, StyleSheet, View} from 'react-native';
import {textStyles} from '../../../react-native-src/reusableStyles/textStyles';

export const CustomInputWithPlaceholder = props => {
  const {placeholder, keyboardType, wrapperStyles} = props;
  const [text, onChangeText] = useState('');
  const [isFocused, changeFocusState] = useState(false);
  const placeholderAnimation = useRef(new Animated.Value(0)).current;
  const showPlaceholderAtTop = isFocused || text;

  useEffect(() => {
    Animated.timing(placeholderAnimation, {
      toValue: showPlaceholderAtTop ? 1 : 0,
      duration: 50,
      useNativeDriver: true,
    }).start();
  }, [showPlaceholderAtTop, placeholderAnimation]);

  return (
    <View style={[styles.componentWrapper, wrapperStyles]}>
      <TextInput
        style={[textStyles.commonText, styles.textInput]}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
        onFocus={() => changeFocusState(true)}
        onBlur={() => changeFocusState(false)}
        value={text}
      />
      <Animated.View
        style={[
          styles.placeholderWrapper,
          {
            zIndex: showPlaceholderAtTop ? 20 : 10,
            translateY: placeholderAnimation.interpolate({
              inputRange: [0, 1],
              outputRange: [10, -10],
            }),
          },
        ]}>
        <Animated.Text
          style={[
            textStyles.commonText,
            styles.placeholderText,
            {
              color: showPlaceholderAtTop
                ? 'rgba(0,0,0, 1)'
                : 'rgba(0,0,0, 0.5)',
            },
          ]}>
          {placeholder}
        </Animated.Text>
      </Animated.View>
    </View>
  );
};

CustomInputWithPlaceholder.defaultProps = {
  placeholder: 'placeholder',
  keyboardType: 'default',
  wrapperStyles: {},
};

CustomInputWithPlaceholder.propTypes = {
  placeholder: PropTypes.string,
  keyboardType: PropTypes.string,
  wrapperStyles: PropTypes.object,
};

const styles = StyleSheet.create({
  componentWrapper: {
    position: 'relative',
  },
  textInput: {
    height: 40,
    minWidth: 335,
    borderWidth: 1,
    borderColor: '#8F8F8F',
    borderRadius: 4,
    zIndex: 20,
    paddingLeft: 15,
  },
  placeholderWrapper: {
    backgroundColor: 'white',
    position: 'absolute',
    justifyContent: 'center',
    marginLeft: 15,
    paddingLeft: 4,
    paddingRight: 4,
  },
  placeholderText: {
    fontSize: 12,
  },
});
