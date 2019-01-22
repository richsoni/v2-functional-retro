import * as React from 'react';
import {ReactNode} from 'react';
import { Draggable } from 'react-beautiful-dnd';

import ListItem from '../ListItem';

interface IProps {
  index: number,
  draggableId: number,
  children: ReactNode,
  key?: number,
}

export default class SortableListItem extends React.Component<IProps, {}> {

  public render() {
    return <Draggable draggableId={this.props.draggableId} index={this.props.index}>
      {(provided, snapshot) => {
        return (
          <div
            {...provided.draggableProps}
            ref={provided.innerRef}
          >
          {React.Children.map(this.props.children, (child) =>{
            return React.cloneElement(child as React.ReactElement<any>, {provided, draggableHandle: true})
          })}
        </div>
        )
      }}
    </Draggable>
  }
}
