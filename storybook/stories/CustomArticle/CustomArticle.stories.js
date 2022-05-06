import React from 'react';
import {text} from '@storybook/addon-knobs';
import {storiesOf} from '@storybook/react-native';
import {CustomArticle} from '.';

const content = `This is a UI Component development environment for your React Native
app. Here you can display and interact with your UI components as
stories. A story is a single state of one or more UI components. You can
have as many stories as you want. In other words a story is like a
visual test case.`;

storiesOf('CustomArticle', module).add('default', () => (
  <CustomArticle
    header={text('Header', 'Welcome to React Native Storybook')}
    content={text('Content', content)}
  />
));
