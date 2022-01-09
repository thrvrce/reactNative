import React, {FC} from 'react';
import {TopBar} from '../../reusableComponents/TopBar/TopBar';
import {SearchBar} from '../../reusableComponents/SearchBar/SearchBar';
import {ProductsList} from './components/ProductsList';
import BurgerMenuIcon from '../../../icons/BurgerMenuIcon.svg';
import BucketIcon from '../../../icons/BucketIcon.svg';
import {IProduct} from './react-native-src/pages/Main/components/Product';

interface IMainScreen {
  products: IProduct[];
}

export const MainScreen: FC<IMainScreen> = props => {
  const {products} = props;
  return (
    <>
      <TopBar
        leftBlock={<BurgerMenuIcon />}
        text="Ecommerce Store"
        rightBlock={<BucketIcon />}
      />
      <SearchBar />
      <ProductsList products={products} />
    </>
  );
};
