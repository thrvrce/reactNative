import React, {FC} from 'react';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';
import {TopBar} from '../../reusableComponents/TopBar/TopBar';
import {BackButton} from '../../reusableComponents/BackButton/BackButton';
import BucketIcon from '../../../icons/BucketIcon.svg';

export const ProductsSearchNavigationHeader: FC<
  NativeStackHeaderProps
> = props => (
  <TopBar
    leftBlock={<BackButton goBackFn={props.navigation.goBack} />}
    text="Search"
    rightBlock={<BucketIcon />}
  />
);
