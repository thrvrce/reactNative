import React, {FC} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ProductDetails} from './ProductDetails';
import {RootStackParamList} from '../../navigation/MainStackNavigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CustomErrorModal} from './modals/CustomErrorModal';
import {CustomSuccessModal} from './modals/CustomSuccessModal';
import {CustomWarningModal} from './modals/CustomWarningModal';
import {ProductDetailsNavigationHeader} from './ProductDetailsNavigationHeader';
import {ProductDetailsContext} from './ProductDetailsContext';
import {TProductDetailsStack} from './TProductDetailsStack';

type ProductDetailsNavigationStackRouteProps = NativeStackScreenProps<
  RootStackParamList,
  'ProductDetailsNavigationStack'
>;

const RootStack = createNativeStackNavigator<TProductDetailsStack>();

export const ProductDetailsNavigationStack: FC<
  ProductDetailsNavigationStackRouteProps
> = props => {
  const {route} = props;

  return (
    <ProductDetailsContext.Provider value={route.params.productId}>
      <RootStack.Navigator initialRouteName="ProductDetails">
        <RootStack.Screen
          name="ProductDetails"
          component={ProductDetails}
          options={{
            header: headerProps => (
              <ProductDetailsNavigationHeader {...headerProps} />
            ),
          }}
        />
        <RootStack.Group
          screenOptions={{
            presentation: 'transparentModal',
            headerShown: false,
          }}>
          <RootStack.Screen name="ErrorModal" component={CustomErrorModal} />
          <RootStack.Screen
            name="SuccessModal"
            component={CustomSuccessModal}
          />
          <RootStack.Screen
            name="WarningModal"
            component={CustomWarningModal}
          />
        </RootStack.Group>
      </RootStack.Navigator>
    </ProductDetailsContext.Provider>
  );
};
