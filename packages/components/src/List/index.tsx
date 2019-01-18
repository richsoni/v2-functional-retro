import * as React from 'react';
import {Component, ReactNode} from 'react';

interface Props {
  children: ReactNode | ReactNode[],
}

interface State {}

export default class List extends Component<Props, State> {
  public static defaultProps: Partial<Props> = {
    children: []
  }

  public state: State = {}

  render(){
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
