import React from 'react';
import { storiesOf } from '@storybook/react';
import Header from './header';

storiesOf('Header', module)
  .addDecorator((story) => (
    <div
      key={Date.now()}
      style={{ display: 'flex', justifyContent: 'center', paddingTop: '100px' }}
    >
      {story()}
    </div>
  ))
  .add('Header', () => <Header />);
