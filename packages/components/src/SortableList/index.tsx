import * as React from 'react';
import {ReactNode} from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { Droppable } from 'react-beautiful-dnd';

import List from '../List/';
import {IListProps} from '../List/';

import SortableListItemProvider from './SortableListItemProvider';

interface ISortableListProps {
  title: string,
  children: ReactNode[],
}


interface IState {
  order: string[]
}

export default class SortableList extends React.Component<ISortableListProps, IState> {
  constructor(props){
    super(props)
    this.state = {
      order: React.Children.map(props.children, (child,index) => ('did'+index))
    }
  }

  public render() {
    const children = React.Children.map(this.props.children, (child, index) => {
      return <SortableListItemProvider
        key={index}
        draggableId={'did'+index}
        index={index}
      >{child}</SortableListItemProvider>
    });

    return <DragDropContext
      onDragEnd={(x,y,z,a) => {
        console.log(x,y,z,a)
        }
      }
      >
        <List title={this.props.title}>
          <Droppable droppableId={'dr1'} >
            {(provided, snapshot) => {
              return (
                <div
                  ref={provided.innerRef}
                  {...provided.droppableProps}
                  style={{
                  background: snapshot.isDraggingOver ? 'skyblue' : 'white',
                  padding: 8,
                }}>
                  {children}
                  {provided.placeholder}
                </div>
              )
            }}
          </Droppable>
        </List>
    </DragDropContext>
  }
}
