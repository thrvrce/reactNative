import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {BackButton} from '.';
import CenterView from '../CenterView';
import {action} from '@storybook/addon-actions';

storiesOf('BackButton', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('default', () => <BackButton goBackFn={action('clicked goBackFn')} />);
