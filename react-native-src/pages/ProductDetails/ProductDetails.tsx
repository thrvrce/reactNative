import React, {FC} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ProductDetailsView} from './ProductDetailsView';
import {RootStackParamList} from '../../navigation/MainStackNavigation';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {CustomErrorModal} from './modals/CustomErrorModal';
import {CustomSuccessModal} from './modals/CustomSuccessModal';
import {CustomWarningModal} from './modals/CustomWarningModal';
import {ProductDetailsNavigationHeader} from '../ProductDetails/ProductDetailsNavigationHeader';
import {ProductDetailsContext} from './ProductDetailsContext';
import {TProductDetailsStack} from './TProductDetailsStack';

type ProductDetailsRouteProps = NativeStackScreenProps<
  RootStackParamList,
  'ProductDetails'
>;

const RootStack = createNativeStackNavigator<TProductDetailsStack>();

export const ProductDetails: FC<ProductDetailsRouteProps> = props => {
  const {route} = props;

  return (
    <ProductDetailsContext.Provider value={route.params.productId}>
      <RootStack.Navigator initialRouteName="ProductDetailsView">
        <RootStack.Screen
          name="ProductDetailsView"
          component={ProductDetailsView}
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
