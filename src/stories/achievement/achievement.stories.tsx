import React from 'react';
import { storiesOf } from '@storybook/react';
import Achievement from './achievement';

storiesOf('Achievement', module)
  .addDecorator((story) => (
    <div
      key={Date.now()}
      style={{ display: 'flex', justifyContent: 'center', paddingTop: '100px' }}
    >
      {story()}
    </div>
  ))
  .add('Achievement', () => <Achievement description="1st achviement" />);
