import React from 'react';
import PropTypes from 'prop-types';
import {View, Button, StyleSheet} from 'react-native';

export const CustomButton = props => {
  const {backgroundColor, text, onPress} = props;
  return (
    <View style={styles.button}>
      <Button title={text} color={backgroundColor} onPress={onPress} />
    </View>
  );
};

CustomButton.defaultProps = {
  backgroundColor: '#DD6B55',
  text: '',
  onPress: () => {},
};

CustomButton.propTypes = {
  backgroundColor: PropTypes.string,
  text: PropTypes.string,
  onPress: PropTypes.func,
};

const styles = StyleSheet.create({
  button: {
    maxWidth: 335,
    height: 40,
    borderRadius: 4,
    alignSelf: 'center',
  },
});
