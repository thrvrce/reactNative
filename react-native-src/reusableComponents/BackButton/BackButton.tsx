import React, {FC} from 'react';
import {Pressable} from 'react-native';
import LeftArrow from '../../../icons/LeftArrow.svg';

interface IBackButtonProps {
  goBackFn: () => void;
}
export const BackButton: FC<IBackButtonProps> = props => {
  return (
    <Pressable onPress={props.goBackFn}>
      <LeftArrow />
    </Pressable>
  );
};
