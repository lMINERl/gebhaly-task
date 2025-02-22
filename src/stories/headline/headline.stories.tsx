import React from 'react';
import { storiesOf } from '@storybook/react';
import Headline from './headline';

storiesOf('Headline', module)
  .addDecorator((story) => (
    <div
      key={Date.now()}
      style={{ display: 'flex', justifyContent: 'center', paddingTop: '100px' }}
    >
      {story()}
    </div>
  ))
  .add('Headline', () => (
    <Headline
      content={{ telephoneNumber: '1234-5678-9101', email: 'me@example.com' }}
    />
  ));
