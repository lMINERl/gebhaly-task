import React from 'react';
import { storiesOf } from '@storybook/react';
import MainSection from './mainSection';
import SecondarySection from './secondarySection';

storiesOf('Section', module)
  .addDecorator((story) => (
    <div
      key={Date.now()}
      style={{ display: 'flex', justifyContent: 'center', paddingTop: '100px' }}
    >
      {story()}
    </div>
  ))
  .add('MainSection', () => (
    <MainSection
      contents={{
        head: 'We are Cerified Teachers',
        title: 'OPTIMIZE IT PERFORMANCE & CARRER GROWTH ',
        description:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Est praesentium soluta, excepturi id non porro quisquam aliquam, perferendis consequatur laborum voluptate iure mollitia recusandae commodi, itaque corporis fugit vitae? Velit.Lorem ipsum dolor sit amet consectetur adipisicing elit. Est praesentium soluta, excepturi id non porro quisquam aliquam, perferendis consequatur laborum voluptate iure mollitia recusandae commodi, itaque corporis fugit vitae? Velit.',
        actions: [
          {
            name: 'SELECT PRICE',
            action: (e: any) => {
              console.log(e.target.value);
            }
          },
          {
            name: 'VIEW PROJECT',
            action: (e: any) => {
              console.log(e.target.value);
            }
          }
        ]
      }}
    />
  ))
  .add('SecondarySection', () => {
    return <SecondarySection />;
  });
