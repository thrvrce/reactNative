import {action} from '@storybook/addon-actions';
import {text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {CustomButton} from '.';
import CenterView from '../CenterView';

storiesOf('CustomButton', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('blue button', () => (
    <CustomButton
      onPress={action('clicked blue button')}
      backgroundColor="blue"
      text={text('Button text', 'Ok')}
    />
  ))
  .add('red button', () => (
    <CustomButton
      onPress={action('clicked red button')}
      backgroundColor="red"
      text={text('Button text', 'Cancel')}
    />
  ));
