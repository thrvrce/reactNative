import React, {FC, useContext} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {DrawerActions} from '@react-navigation/native';
import {TopBar} from '../../reusableComponents/TopBar/TopBar';
import {SearchBar} from '../../reusableComponents/SearchBar/SearchBar';
import {ProductsList} from './components/ProductsList';
import BurgerMenuIcon from '../../../icons/BurgerMenuIcon.svg';
import BucketIcon from '../../../icons/BucketIcon.svg';
import {AppContext} from '../../Context/AppContext';
import {RootStackParamList} from '../../navigation/MainStackNavigation';

type MainScreenRouteProps = NativeStackScreenProps<
  RootStackParamList,
  'MainScreen'
>;

export const MainScreen: FC<MainScreenRouteProps> = props => {
  const {products} = useContext(AppContext);

  return (
    <>
      <TopBar
        leftBlock={
          <BurgerMenuIcon
            onPress={() =>
              props.navigation.dispatch(DrawerActions.openDrawer())
            }
          />
        }
        text="Ecommerce Store"
        rightBlock={<BucketIcon />}
      />
      <SearchBar />
      <ProductsList products={products} />
    </>
  );
};
