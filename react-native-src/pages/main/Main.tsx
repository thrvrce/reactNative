import React, {FC} from 'react';
import {TopBar} from '../../reusableComponents/TopBar/TopBar';
import {SearchBar} from '../../reusableComponents/SearchBar/SearchBar';
import {productsMocks} from './productsMocks';
import {ProductsList} from './components/ProductsList';
import BurgerMenuIcon from '../../../icons/BurgerMenuIcon.svg';
import BucketIcon from '../../../icons/BucketIcon.svg';

export const MainScreen: FC = () => {
  return (
    <>
      <TopBar
        leftBlock={<BurgerMenuIcon />}
        text="Ecommerce Store"
        rightBlock={<BucketIcon />}
      />
      <SearchBar />
      <ProductsList products={productsMocks} />
    </>
  );
};
