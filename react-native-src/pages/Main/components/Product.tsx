import React, {FC, useCallback} from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
  Pressable,
  useWindowDimensions,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Prices} from '../../../reusableComponents/Prices/Prices';
import {IProduct} from '../../../AppContext/AppContext';
import {RootStackParamList} from '../../../navigation/MainStackNavigation';
import {ProductListTypes} from './constants';
// import Crashes from 'appcenter-crashes';

type ProductDetailsRouteProps = NativeStackScreenProps<
  RootStackParamList,
  'ProductDetailsNavigationStack'
>;

interface Product extends IProduct {
  listType: ProductListTypes;
}
export const Product: FC<Product> = props => {
  const {imgSrc, name, price, compareAtPrice, id, listType} = props;
  const navigation = useNavigation<ProductDetailsRouteProps['navigation']>();
  const window = useWindowDimensions();
  const onPress = useCallback(() => {
    // Crashes.generateTestCrash(); // mock crash
    navigation.navigate('ProductDetailsNavigationStack', {productId: id});
  }, [id, navigation]);

  return (
    <Pressable onPress={onPress} testID="Product">
      <View
        style={[
          styles.productWrapper,
          listType === ProductListTypes.OneColumn
            ? styles.productWrapperOneColumn
            : {},
          {
            width:
              listType === ProductListTypes.OneColumn
                ? window.width * 0.9
                : 158,
          },
        ]}>
        <Image
          style={[
            styles.image,
            listType === ProductListTypes.OneColumn
              ? styles.imageOneColumn
              : {},
          ]}
          source={{
            uri: `${imgSrc}/${styles.image.width}/?random=${id}`,
          }}
        />
        <View
          style={[
            listType === ProductListTypes.OneColumn
              ? styles.textContentWrapperOneColumn
              : {},
          ]}>
          <Text style={styles.commonText}>{name}</Text>
          <Prices price={price} compareAtPrice={compareAtPrice} />
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  productWrapper: {
    padding: 5,
    backgroundColor: '#FFFFFF',
    minHeight: 110,
    margin: 10,
    shadowColor: 'rgba(0, 0, 0, 0.25)',
    elevation: 10,
    borderRadius: 5,
  },
  productWrapperOneColumn: {
    marginLeft: '2.5%',
    marginRight: '2.5%',
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  image: {
    width: 100,
    height: 100,
    marginBottom: 5,
    marginLeft: 24,
    marginRight: 24,
  },
  imageOneColumn: {
    marginLeft: 0,
    marginRight: '3%',
  },
  textContentWrapperOneColumn: {
    alignSelf: 'flex-start',
    marginTop: '4%',
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
