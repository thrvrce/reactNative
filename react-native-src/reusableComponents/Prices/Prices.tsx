import React, {FC} from 'react';
import {Text, StyleSheet} from 'react-native';
import {textStyles} from '../../reusabeStyles/textStyles';

interface IPricesProps {
  sourcePrice: number;
  priceDiffPercents: number;
  priceDiff: number;
}

export const Prices: FC<IPricesProps> = props => {
  const {sourcePrice, priceDiffPercents, priceDiff} = props;
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
