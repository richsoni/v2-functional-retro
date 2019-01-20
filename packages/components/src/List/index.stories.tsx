import * as React from 'react';

import { storiesOf } from '@storybook/react';
import List from './';

storiesOf('List', module).add('Empty', () => <List title="My Empty List"/>);
storiesOf('List', module).add('With Simple Item', () => (
  <List title="Short List">
    <div>Item 1</div>
  </List>));

storiesOf('List', module).add('With Items', () => (
  <List title="Long List">
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
    <div>Item 4</div>
    <div>Item 5</div>
  </List>));
