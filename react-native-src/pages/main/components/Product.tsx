import React, {FC} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import {Prices} from '../../../reusableComponents/Prices/Prices';

export interface IProduct {
  id: string;
  name: string;
  description: string;
  imgSrc: string;
  price: number;
  compareAtPrice: number;
}

interface IProductProps extends IProduct {}

export const Product: FC<IProductProps> = props => {
  const {imgSrc, name, price, compareAtPrice, id} = props;

  return (
    <View style={styles.productWrapper}>
      <Image
        style={styles.image}
        source={{
          uri: `${imgSrc}/${styles.image.width}/?random=${id}`,
        }}
      />

      <Text style={styles.commonText}>{name}</Text>
      <Prices price={price} compareAtPrice={compareAtPrice} />
    </View>
  );
};

const styles = StyleSheet.create({
  productWrapper: {
    padding: 5,
    backgroundColor: '#FFFFFF',
    minHeight: 160,
    margin: 10,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    elevation: 10,
    borderRadius: 5,
    width: 158,
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
