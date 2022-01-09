import React, {FC, useContext, useCallback} from 'react';
import {Pressable} from 'react-native';
import LeftArrow from '../../../icons/LeftArrow.svg';
import {AppContext} from '../../Context/AppContext';

export const BackButton: FC = () => {
  const {setSelectedProductToDisplay} = useContext(AppContext);
  const onPress = useCallback(() => {
    setSelectedProductToDisplay(null);
  }, [setSelectedProductToDisplay]);

  return (
    <Pressable onPress={onPress}>
      <LeftArrow />
    </Pressable>
  );
};
