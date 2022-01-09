import React, {FC, useContext, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ProductDetailsView} from './ProductDetailsView';
import {AppContext} from '../../Context/AppContext';
import {RootStackParamList} from '../../navigation/MainStackNavigation';
import {useGetProductById} from '../../hooks/useGetProductById';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CustomErrorModal} from './modals/CustomErrorModal';
import {CustomSuccessModal} from './modals/CustomSuccessModal';
import {CustomWarningModal} from './modals/CustomWarningModal';

type ProductDetailsRouteProps = NativeStackScreenProps<
  RootStackParamList,
  'ProductDetails'
>;

const RootStack = createNativeStackNavigator();

export const ProductDetails: FC<ProductDetailsRouteProps> = props => {
  const {route, navigation} = props;
  const {
    isProductsDataLoading,
    loadProductsData,
    products,
    productOptions,
    cart,
    changeCart,
    userLogged,
  } = useContext(AppContext);
  const [selectedColor, setSelectedColor] = useState<string>('');
  const product = useGetProductById(products, route.params.productId);
  const isProductInCart = cart.find(
    cartItem =>
      cartItem.productId === route.params.productId &&
      cartItem.productOptions.color === selectedColor,
  );

  return (
    <RootStack.Navigator initialRouteName="ProductDetailsView">
      <RootStack.Screen
        name="ProductDetailsView"
        options={{headerShown: false}}>
        {screenProps => {
          const addToCartHandler = () => {
            if (userLogged) {
              screenProps.navigation.navigate('WarningModal');
            } else if (!selectedColor) {
              screenProps.navigation.navigate('ErrorModal');
            } else {
              changeCart(prevCartState => [
                ...prevCartState,
                {
                  productId: product?.id ?? '',
                  productOptions: {color: selectedColor},
                },
              ]);
              screenProps.navigation.navigate('SuccessModal');
            }
          };
          return (
            <ProductDetailsView
              {...screenProps}
              goBackFn={navigation.goBack}
              isProductsDataLoading={isProductsDataLoading}
              loadProductsData={loadProductsData}
              product={product}
              productOptions={productOptions}
              selectColor={setSelectedColor}
              selectedColor={selectedColor}
              addToCartHandler={addToCartHandler}
              isProductInCart={!!isProductInCart}
            />
          );
        }}
      </RootStack.Screen>
      <RootStack.Group screenOptions={{presentation: 'modal'}}>
        <RootStack.Screen
          name="ErrorModal"
          component={CustomErrorModal}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name="SuccessModal"
          component={CustomSuccessModal}
          options={{headerShown: false}}
        />
        <RootStack.Screen
          name="WarningModal"
          component={CustomWarningModal}
          options={{headerShown: false}}
        />
      </RootStack.Group>
    </RootStack.Navigator>
  );
};
