import React, {FC, useContext} from 'react';
import {TopBar} from '../../reusableComponents/TopBar/TopBar';
import {SearchBar} from '../../reusableComponents/SearchBar/SearchBar';
import {ProductsList} from './components/ProductsList';
import BurgerMenuIcon from '../../../icons/BurgerMenuIcon.svg';
import BucketIcon from '../../../icons/BucketIcon.svg';
import {AppContext} from '../../Context/AppContext';

export const MainScreen: FC = () => {
  const {products} = useContext(AppContext);

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
