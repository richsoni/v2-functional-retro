import * as React from 'react';
import {Component, ReactNode} from 'react';

import styles from './styles.module.css';

export interface IListProps {
  children: ReactNode | ReactNode[],
  title: string
}

interface IListItemProps {
  children: ReactNode | ReactNode[],
}

const ListItems = (props: IListItemProps) => {
  return <div>{props.children}</div>
}

export default class List extends Component<IListProps, {}> {
  public static defaultProps: Partial<IListProps> = {
    children: []
  }

  public render(){
    if(React.Children.count(this.props.children) > 0){
      return <div className={styles.container}>
        <h3 className={styles.title}>{this.props.title}</h3>
        <ListItems>{this.props.children}</ListItems>
      </div>
    }
    else {
      return <div className={styles.container}>
        <h3 className={styles.title}>{this.props.title}</h3>
        <div className={styles.emptyMessage}>There are no items in this list</div>
      </div>
    }
  }
}
