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
    </ProductDetailsContext.Provider>
  );
};
