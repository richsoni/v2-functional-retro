import { storiesOf } from '@storybook/react';
import * as React from 'react';

import ListItem from '../ListItem/';

import SortableList from './';

storiesOf('SortableList', module).add('Default', () => (
  <div style={{width: '50%', marginLeft: 10}}>
      <SortableList title="Long List">
        <ListItem>Item 1</ListItem>
        <ListItem>Item 2</ListItem>
        <ListItem>Item 3</ListItem>
        <ListItem>Item 4</ListItem>
        <ListItem>Item 5</ListItem>
      </SortableList>
  </div>));
