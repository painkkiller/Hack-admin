import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';
import UserPic from './UserPic';

storiesOf('UserPic', module)
  .addDecorator(withSmartKnobs)
  .addDecorator(withKnobs)
  .addParameters({
    backgrounds: [{ name: 'twitter', value: '#00aced', default: true }, { name: 'facebook', value: '#3b5998' }]
  })
  .add('small', () => <UserPic />)
  .add('medium', () => <UserPic size="medium" />)
  .add('big', () => <UserPic size="big" />)
  .add('medium with  border', () => <UserPic size="medium" border={true} />, {
    backgrounds: [
      {
        name: 'red',
        value: 'rgba(255, 0, 0)'
      }
    ]
  });
