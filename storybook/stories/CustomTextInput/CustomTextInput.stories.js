import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {CustomTextInput} from '.';
import CenterView from '../CenterView';

storiesOf('CustomTextInput', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('default keyboard', () => <CustomTextInput />)
  .add('numeric keyboard', () => <CustomTextInput keyboardType={'numeric'} />);
