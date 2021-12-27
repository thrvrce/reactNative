import React, {FC, useContext, useCallback} from 'react';
import {Text, View, Image, StyleSheet, Pressable} from 'react-native';
import {Prices} from '../../../reusableComponents/Prices/Prices';
import {AppContext} from '../../../Context/AppContext';

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
  const {setSelectedProductToDisplay} = useContext(AppContext);
  const onPress = useCallback(() => {
    setSelectedProductToDisplay(id);
  }, [setSelectedProductToDisplay, id]);

  return (
    <Pressable onPress={onPress}>
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
    </Pressable>
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
