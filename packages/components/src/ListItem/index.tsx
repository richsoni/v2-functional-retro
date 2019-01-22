import * as React from 'react';
import {Component, ReactNode} from 'react';

import getListItemClass from './lib/getListItemClass'
import {ListItemStates} from './ListItemStates'
import styles from './styles.module.css';

interface IListItemProps {
  children: ReactNode,
  draggableHandle?: boolean,
  itemState?: ListItemStates,
  provided?: {
    dragHandleProps: object,
  }
}

interface IHandleProps {
  provided?: {
    dragHandleProps: object,
  }
}

const Handle = (props: IHandleProps) => {
  if(props.provided){
    return <div {...props.provided.dragHandleProps} className={styles.handle} />
  }
  return <div className={styles.handle} />
}

export default class ListItem extends Component<IListItemProps, {}> {
  public static defaultProps = {
    draggableHandle: false,
    itemState: ListItemStates.Default,
  }

  public render(){
    const {
      children,
      draggableHandle,
      itemState,
      provided,
    } = this.props;
    const handle = draggableHandle ? <Handle provided={provided} /> : <div />;
    return <div
      className={getListItemClass(this.props.itemState, draggableHandle)}
    >
      {handle}
      {this.props.children}
    </div>
  }
}
