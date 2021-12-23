import React, {FC} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';

interface ProductProps {
  imgSrc: any;
  name: string;
  sourcePrice: number;
  priceDiffPercents: number;
  priceDiff: number;
}
export const Product: FC<ProductProps> = props => {
  const {imgSrc, name, sourcePrice, priceDiffPercents, priceDiff} = props;
  const currentPrice = Math.round(
    (sourcePrice * (100 + priceDiffPercents)) / 100 + priceDiff,
  );
  const currentPriceText = `$${currentPrice}`;
  const sourcePriceText =
    sourcePrice !== currentPrice ? ` $${sourcePrice}` : '';
  const priceDiffPercentsText = priceDiffPercents
    ? priceDiffPercents < 0
      ? ` ${-1 * priceDiffPercents}% Off`
      : ` ${priceDiffPercents}% Up`
    : '';
  return (
    <View style={styles.productWrapper}>
      <Image style={styles.image} source={imgSrc} />
      <Text style={styles.commonText}>{name}</Text>
      <Text>
        <Text style={[styles.commonText, styles.currentPriceText]}>
          {currentPriceText}
        </Text>
        <Text style={[styles.commonText, styles.priceText]}>
          {sourcePriceText}
        </Text>
        <Text style={[styles.commonText, styles.priceDiffPercentsText]}>
          {priceDiffPercentsText}
        </Text>
      </Text>
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
  currentPriceText: {
    fontWeight: 'bold',
  },
  priceText: {
    fontWeight: 'bold',
    color: '#8F8F8F',
    textDecorationStyle: 'solid',
    textDecorationLine: 'line-through',
  },
  priceDiffPercentsText: {
    fontWeight: 'bold',
    color: '#00A8F3',
  },
});
