import React from 'react';
import PropTypes from 'prop-types';
import {View, Text, StyleSheet} from 'react-native';

export const CustomArticle = props => {
  const {header, content} = props;

  return (
    <View style={styles.wrapper}>
      <Text style={styles.header}>{header}</Text>
      <Text style={styles.content}>{content}</Text>
    </View>
  );
};

CustomArticle.defaultProps = {
  header: '',
  content: '',
};

CustomArticle.propTypes = {
  header: PropTypes.string,
  content: PropTypes.string,
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
  },
  header: {
    fontSize: 18,
    marginBottom: 18,
  },
  content: {
    fontSize: 12,
    marginBottom: 10,
    lineHeight: 18,
  },
});
