import React, {FC, useContext, useMemo} from 'react';
import {
  View,
  StyleSheet,
  Text,
  Button,
  Alert,
  ScrollView,
  RefreshControl,
} from 'react-native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {TopBar} from '../../reusableComponents/TopBar/TopBar';
import {Prices} from '../../reusableComponents/Prices/Prices';
import {ProductImagesSlider} from '../../reusableComponents/ProductImagesSlider/ProductImagesSlider';
import {BackButton} from '../../reusableComponents/BackButton/BackButton';
import {textStyles} from '../../reusableStyles/textStyles';
import {AppContext} from '../../Context/AppContext';
import HeartIcon from '../../../icons/HeartIcon.svg';
import BucketIcon from '../../../icons/BucketIcon.svg';
import {RootStackParamList} from '../../navigation/@types/rootStack';
import {useGetProductById} from '../../hooks/useGetProductById';

type ProductDetailsRouteProps = NativeStackScreenProps<
  RootStackParamList,
  'ProductDetails'
>;

export const ProductDetails: FC<ProductDetailsRouteProps> = props => {
  const {route, navigation} = props;
  const {isProductsDataLoading, loadProductsData, products, productOptions} =
    useContext(AppContext);
  const product = useGetProductById(products, route.params.productId);
  const goBackFn = useMemo(() => () => navigation.goBack(), [navigation]);

  return (
    <>
      <TopBar
        leftBlock={<BackButton goBackFn={goBackFn} />}
        rightBlock={
          <>
            <HeartIcon style={styles.heartIcon} />
            <BucketIcon />
          </>
        }
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        refreshControl={
          <RefreshControl
            refreshing={isProductsDataLoading}
            onRefresh={loadProductsData}
          />
        }>
        {product && (
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
                  style={[textStyles.commonText, styles.selectColorBlockTitle]}>
                  Select color
                </Text>
                <View style={styles.colorSelectorsWrapper}>
                  {productOptions.colors.map(({name}) => (
                    <View style={styles.colorSelector} key={name}>
                      <Text style={[textStyles.commonText, styles.colorText]}>
                        {name}
                      </Text>
                    </View>
                  ))}
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
        )}
      </ScrollView>
      {product && (
        <View style={styles.addToCartButton}>
          <Button
            title="ADD TO CART"
            color="#008ACE"
            onPress={() => Alert.alert('Simple Button pressed')}
          />
        </View>
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
