import * as React from 'react';
import {Component, ReactNode} from 'react';
import styles from './styles.module.css';

interface IProps {
  children: ReactNode | ReactNode[],
}

export default class List extends Component<IProps, {}> {
  public static defaultProps: Partial<IProps> = {
    children: []
  }

  public render(){
    if(React.Children.count(this.props.children) > 0){
      return <div className={styles.test} >
        {this.props.children}
      </div>
    }
    else {
      return <div>
        <i>There are no itemz in this list</i>
      </div>
    }
  }
}
