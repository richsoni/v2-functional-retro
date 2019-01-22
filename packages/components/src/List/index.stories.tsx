import { storiesOf } from '@storybook/react';
import * as React from 'react';
import { DragDropContext } from 'react-beautiful-dnd';

import DraggableItem from '../DraggableItem/';
import ListItem from '../ListItem';

import List from './';

storiesOf('List', module).add('Empty', () => (
  <div style={{width: '50%', marginLeft: 10}}>
    <List title="My Empty List"/>
  </div>));


storiesOf('List', module).add('With Simple Item', () => (
  <div style={{width: '50%', marginLeft: 10}}>
    <List title="Short List">
      <ListItem>Item 1</ListItem>
    </List>
  </div>));

storiesOf('List', module).add('With Items', () => (
  <div style={{width: '50%', marginLeft: 10}}>
    <DragDropContext onDragEnd={(x) => x + 1}>
      <List title="Long List">
        <ListItem>Item 1</ListItem>
        <ListItem>Item 1</ListItem>
        <ListItem>Item 1</ListItem>
        <ListItem>Item 1</ListItem>
        <ListItem>Item 1</ListItem>
      </List>
     </DragDropContext>
  </div>));
