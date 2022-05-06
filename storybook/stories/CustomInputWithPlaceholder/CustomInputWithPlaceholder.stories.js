import {action} from '@storybook/addon-actions';
import {text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import React from 'react';
import {CustomInputWithPlaceholder} from '.';
import CenterView from '../CenterView';

storiesOf('CustomInputWithPlaceholder', module)
  .addDecorator(getStory => <CenterView>{getStory()}</CenterView>)
  .add('default', () => (
    <CustomInputWithPlaceholder
      placeholder={text('placeholder', 'Custom placeholder')}
      keyboardType={text('keyboardType', 'default')}
    />
  ));
