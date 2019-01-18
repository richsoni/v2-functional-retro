import * as React from 'react';
import {Component, ReactNode} from 'react';

interface IProps {
  children: ReactNode | ReactNode[],
}

export default class List extends Component<IProps, {}> {
  public static defaultProps: Partial<IProps> = {
    children: []
  }

  public render(){
    if(React.Children.count(this.props.children) > 0){
      return <div>
        {this.props.children}
      </div>
    }
    else {
      return <div>
        <i>There are no items in this list</i>
      </div>
    }
  }
}
