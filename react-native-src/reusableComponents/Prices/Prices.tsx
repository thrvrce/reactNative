import React, {FC} from 'react';
import {Text, StyleSheet} from 'react-native';
import {textStyles} from '../../reusabeStyles/textStyles';

interface IPricesProps {
  price: number;
  compareAtPrice: number;
}

export const Prices: FC<IPricesProps> = props => {
  const {price, compareAtPrice} = props;
  const currentPriceText = `$${price}`;
  const sourcePriceText = price !== compareAtPrice ? ` $${compareAtPrice}` : '';
  const priceDifferencePercents =
    100 - Math.round((compareAtPrice / price) * 100);
  const priceDiffPercentsText =
    priceDifferencePercents < 0 ? ` ${-1 * priceDifferencePercents}% Off` : '';

  return (
    <Text>
      <Text style={[textStyles.commonText, styles.currentPriceText]}>
        {currentPriceText}
      </Text>
      <Text style={[textStyles.commonText, styles.priceText]}>
        {sourcePriceText}
      </Text>
      <Text style={[textStyles.commonText, styles.priceDiffPercentsText]}>
        {priceDiffPercentsText}
      </Text>
    </Text>
  );
};

const styles = StyleSheet.create({
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
