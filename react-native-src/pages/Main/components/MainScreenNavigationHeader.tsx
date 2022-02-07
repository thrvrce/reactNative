import React, {FC} from 'react';
import {TopBar} from '../../../reusableComponents/TopBar/TopBar';
import BurgerMenuIcon from '../../../../icons/BurgerMenuIcon.svg';
import BucketIcon from '../../../../icons/BucketIcon.svg';
import {DrawerActions} from '@react-navigation/native';
import {NativeStackHeaderProps} from '@react-navigation/native-stack';

export const MainScreenNavigationHeader: FC<NativeStackHeaderProps> = props => (
  <TopBar
    leftBlock={
      <BurgerMenuIcon
        onPress={() => props.navigation.dispatch(DrawerActions.openDrawer())}
      />
    }
    text="Ecommerce Store"
    rightBlock={<BucketIcon />}
  />
);
