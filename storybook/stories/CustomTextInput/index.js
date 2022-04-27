import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {TextInput, View, StyleSheet} from 'react-native';
import {textStyles} from '../../../react-native-src/reusableStyles/textStyles';

export const CustomTextInput = props => {
  const {keyboardType} = props;
  const [text, onChangeText] = useState('');
  return (
    <View>
      <TextInput
        style={[textStyles.commonText, styles.textInput]}
        keyboardType={keyboardType}
        onChangeText={onChangeText}
        value={text}
      />
    </View>
  );
};

CustomTextInput.defaultProps = {
  keyboardType: 'default',
};

CustomTextInput.propTypes = {
  keyboardType: PropTypes.oneOf(['default', 'numeric']),
};

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    minWidth: 335,
    borderWidth: 1,
    borderColor: '#8F8F8F',
    borderRadius: 4,
    zIndex: 20,
    paddingLeft: 15,
  },
});
