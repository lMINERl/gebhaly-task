import React from 'react';
import { storiesOf } from '@storybook/react';
import Carosel from './carosel';

storiesOf('Carosel', module)
  .addDecorator((story) => (
    <div
      key={Date.now()}
      style={{
        display: 'flex',
        justifyContent: 'center',
        paddingTop: '100px',
        backgroundColor: 'black'
      }}
    >
      {story()}
    </div>
  ))
  .add('Carosel', () => (
    <Carosel
      content={{
        products: [
          { name: 'product 1', price: 2.5 },
          { name: 'product 2', price: 3.5 },
          { name: 'product 3', price: 4.5 },
          { name: 'product 4', price: 5.5 }
        ]
      }}
    />
  ));
