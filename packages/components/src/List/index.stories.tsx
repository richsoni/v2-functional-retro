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
    <DragDropContext onDragEnd={() => {}}>
      <List title="Long List">
        <DraggableItem index={1} draggableId={1}>Item 1</DraggableItem>
        <ListItem draggableHandle={true}>Item 2</ListItem>
        <ListItem draggableHandle={true}>Item 3</ListItem>
        <ListItem draggableHandle={true}>Item 4</ListItem>
        <ListItem draggableHandle={true}>Item 5</ListItem>
      </List>
     </DragDropContext>
  </div>));
