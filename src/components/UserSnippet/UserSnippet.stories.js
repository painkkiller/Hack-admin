import React from 'react';
import { storiesOf } from '@storybook/react';
import { withKnobs, text } from '@storybook/addon-knobs';
import { withSmartKnobs } from 'storybook-addon-smart-knobs';
import UserSnippet from './UserSnippet';
import StoryRouter from 'storybook-react-router';

storiesOf('UserSnippet', module)
  .addDecorator(StoryRouter())
  .addDecorator(withSmartKnobs)
  .addDecorator(withKnobs)
  .add('default', () => <UserSnippet userName={'Надежда'} additional={'Учитель, школа №1022'} />);
