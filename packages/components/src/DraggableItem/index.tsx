import * as React from 'react';
import {ReactNode} from 'react';
import { Draggable } from 'react-beautiful-dnd';
import ListItem from '../ListItem';

interface IProps {
  index: number,
  draggableId: number,
  children: ReactNode,
}

export default class DraggableItem extends React.Component<IProps, {}> {
  public render() {
    return <Draggable draggableId={this.props.draggableId} index={this.props.index}>
      {(provided, snapshot) => {
        return (
          <div
            {...provided.draggableProps}
            ref={provided.innerRef}
          >
          <ListItem
            draggableHandle={true}
            provided={provided}
          >
            {this.props.children}
          </ListItem>
        </div>
        )
      }}
    </Draggable>
  }
}
