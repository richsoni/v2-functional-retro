import * as React from 'react';

import { storiesOf } from '@storybook/react';
import List from './';

storiesOf('List', module).add('Empty', () => <List />);
storiesOf('List', module).add('With Simple Item', () => (
  <List>
    <div>Item 1</div>
  </List>));

storiesOf('List', module).add('With Items', () => (
  <List>
    <div>Item 1</div>
    <div>Item 2</div>
    <div>Item 3</div>
    <div>Item 4</div>
    <div>Item 5</div>
  </List>));
