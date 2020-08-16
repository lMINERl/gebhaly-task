import React from 'react';
import { storiesOf } from '@storybook/react';
import Menu from './menu';

storiesOf('Menu', module)
  .addDecorator((story) => (
    <div
      key={Date.now()}
      style={{ display: 'flex', justifyContent: 'center', paddingTop: '100px' }}
    >
      {story()}
    </div>
  ))
  .add('Menu', () => (
    <Menu
      content={{
        menu: [
          {
            name: 'Home',
            action: (e: any) => {
              console.log(e.target.value);
            }
          },
          {
            name: 'Find ???',
            action: (e: any) => {
              console.log(e.target.value);
            }
          },
          {
            name: 'Lack',
            action: (e: any) => {
              console.log(e.target.value);
            }
          },
          {
            name: 'Subscription',
            action: (e: any) => {
              console.log(e.target.value);
            }
          },
          {
            name: 'Big Deals',
            action: (e: any) => {
              console.log(e.target.value);
            }
          }
        ]
      }}
    />
  ));
