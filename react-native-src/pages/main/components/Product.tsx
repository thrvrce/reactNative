import React, {FC, useCallback} from 'react';
import {Text, View, Image, StyleSheet, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Prices} from '../../../reusableComponents/Prices/Prices';
import {IProduct} from '../../../Context/AppContext';
import {RootStackParamList} from '../../../navigation/@types/rootStack';

type ProductDetailsRouteProps = NativeStackScreenProps<
  RootStackParamList,
  'ProductDetails'
>;

export const Product: FC<IProduct> = props => {
  const {imgSrc, name, price, compareAtPrice, id} = props;
  const navigation = useNavigation<ProductDetailsRouteProps['navigation']>();
  const onPress = useCallback(() => {
    navigation.navigate('ProductDetails', {productId: id});
  }, [id, navigation]);

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
