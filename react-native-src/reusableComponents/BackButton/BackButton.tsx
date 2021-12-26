import React, {FC, useContext} from 'react';
import {Pressable} from 'react-native';
import LeftArrow from '../../../icons/LeftArrow.svg';
import {AppContext} from '../../Context/AppContext';

export const BackButton: FC = () => {
  const {setSelectedProductToDisplay} = useContext(AppContext);
  return (
    <Pressable onPress={() => setSelectedProductToDisplay(null)}>
      <LeftArrow />
    </Pressable>
  );
};
