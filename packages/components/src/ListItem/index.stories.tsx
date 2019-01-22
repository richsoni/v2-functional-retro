import { storiesOf } from '@storybook/react';
import * as React from 'react';

import ListItem from './';
import {ListItemStates} from './ListItemStates';

storiesOf('ListItem', module).add('Default', () => (
  <div style={{width: '50%'}}>
    <ListItem>List Item</ListItem>
  </div>)
);

storiesOf('ListItem', module).add('Default with draggableHandle', () => (
  <div style={{width: '50%'}}>
    <ListItem
       draggableHandle={true}
    >List item</ListItem>
  </div>)
);

storiesOf('ListItem', module).add('Dragging with draggableHandle', () => (
  <div style={{width: '50%'}}>
    <ListItem
       itemState={ListItemStates.Dragging}
       draggableHandle={true}
    >List item</ListItem>
  </div>)
);
