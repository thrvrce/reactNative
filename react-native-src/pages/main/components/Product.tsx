import React, {FC} from 'react';
import {Text, View, Image, StyleSheet, ImageProps} from 'react-native';
import {Prices} from '../../../reusableComponents/Prices/Prices';

export interface ProductProps {
  imgSrc: ImageProps;
  name: string;
  sourcePrice: number;
  priceDiffPercents: number;
  priceDiff: number;
}

export const Product: FC<ProductProps> = props => {
  const {imgSrc, name, sourcePrice, priceDiffPercents, priceDiff} = props;

  return (
    <View style={styles.productWrapper}>
      <Image style={styles.image} source={imgSrc} />
      <Text style={styles.commonText}>{name}</Text>
      <Prices
        sourcePrice={sourcePrice}
        priceDiffPercents={priceDiffPercents}
        priceDiff={priceDiff}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  productWrapper: {
    padding: 5,
    backgroundColor: '#FFFFFF',
    height: 160,
    margin: 10,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    elevation: 10,
    borderRadius: 5,
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 5,
    marginLeft: 24,
    marginRight: 24,
  },
  commonText: {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 15,
    color: '#4A4A4A',
    marginRight: 10,
  },
});
