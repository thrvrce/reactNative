import React, {FC, useContext, useState} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Button,
  ScrollView,
  RefreshControl,
} from 'react-native';
import {AppContext} from '../../AppContext/AppContext';
import {Prices} from '../../reusableComponents/Prices/Prices';
import {ProductImagesSlider} from '../../reusableComponents/ProductImagesSlider/ProductImagesSlider';
import {textStyles} from '../../reusableStyles/textStyles';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useGetProductById} from '../../reusableHooks/useGetProductById';
import {ProductDetailsContext} from './ProductDetailsContext';
import {TProductDetailsStack} from './TProductDetailsStack';
import {useAddToCartHandler} from '../../reusableHooks/useAddToCartHandler';
import {useInitialLoadProducts} from '../../reusableHooks/useInitialLoadProducts';

type ProductDetailsRouteProps = NativeStackScreenProps<
  TProductDetailsStack,
  'ProductDetails'
>;

export const ProductDetails: FC<ProductDetailsRouteProps> = props => {
  const {navigation} = props;
  const {
    isProductsDataLoading,
    loadProductsData,
    products,
    productOptions,
    cart,
  } = useContext(AppContext);
  const productId = useContext(ProductDetailsContext);
  const [selectedColor, setSelectedColor] = useState<string>('');
  const product = useGetProductById(products, productId);
  const isProductInCart = cart.find(
    cartItem =>
      cartItem.productId === productId &&
      cartItem.productOptions.color === selectedColor,
  );

  const addToCartHandler = useAddToCartHandler(
    navigation,
    selectedColor,
    productId,
  );

  useInitialLoadProducts();
  return (
    <>
      {product && (
        <>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            refreshControl={
              <RefreshControl
                refreshing={isProductsDataLoading}
                onRefresh={loadProductsData}
              />
            }>
            <>
              <ProductImagesSlider imgSrc={product.imgSrc} />
              <View style={styles.pricesBlock}>
                <Text style={textStyles.commonText}>{product.name}</Text>
                <Prices
                  price={product.price}
                  compareAtPrice={product.compareAtPrice}
                />
              </View>
              {productOptions.colors.length ? (
                <View style={styles.selectColorBlock}>
                  <Text
                    style={[
                      textStyles.commonText,
                      styles.selectColorBlockTitle,
                    ]}>
                    Select color
                  </Text>
                  <View style={styles.colorSelectorsWrapper}>
                    {productOptions.colors.map(color => {
                      return (
                        <View
                          style={[
                            styles.colorSelector,
                            color.name === selectedColor
                              ? styles.selectedColor
                              : null,
                          ]}
                          key={color.name}>
                          <Text
                            style={[textStyles.commonText, styles.colorText]}
                            onPress={() => setSelectedColor(color.name)}>
                            {color.name}
                          </Text>
                        </View>
                      );
                    })}
                  </View>
                </View>
              ) : null}
              <View style={styles.descriptionBlock}>
                <Text
                  style={[textStyles.commonText, styles.descriptionBlockTitle]}>
                  Description
                </Text>
                <Text
                  style={[textStyles.commonText, styles.descriptionBlockText]}>
                  {product.description}
                </Text>
              </View>
            </>
          </ScrollView>
          <View style={styles.addToCartButton}>
            <Button
              title="ADD TO CART"
              color="#008ACE"
              onPress={isProductInCart ? undefined : addToCartHandler}
            />
          </View>
        </>
      )}
    </>
  );
};

const styles = StyleSheet.create({
  contentContainerWrapper: {alignItems: 'center', backgroundColor: '#FFF'},

  pricesBlock: {
    height: 70,
    paddingBottom: 20,
    justifyContent: 'space-evenly',
    marginLeft: 20,
    marginRight: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#8F8F8F',
  },
  selectColorBlock: {
    paddingTop: 5,
    paddingBottom: 25,
    justifyContent: 'space-evenly',
    marginLeft: 20,
    marginRight: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#8F8F8F',
  },
  selectColorBlockTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4A4A4A',
  },
  colorSelectorsWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  colorSelector: {
    backgroundColor: '#F7F7F7',
    paddingTop: 5,
    paddingRight: 10,
    paddingBottom: 5,
    paddingLeft: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedColor: {
    backgroundColor: '#008ACE',
  },
  colorText: {
    color: '#4A4A4A',
  },
  descriptionBlock: {
    marginTop: 15,
    marginLeft: 20,
    marginRight: 20,
  },
  descriptionBlockTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4A4A4A',
  },
  descriptionBlockText: {
    color: '#4A4A4A',
  },
  addToCartButton: {
    width: 335,
    height: 40,
    borderRadius: 4,
    alignSelf: 'center',
  },
  heartIcon: {marginRight: 25},
});
