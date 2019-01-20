import * as React from 'react';
import {Component, ReactNode} from 'react';
const styles = {
  container: "",
  title:"",
}

interface IListProps {
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
      return <div className={styles.container} >
        {this.props.children}
      </div>
    }
    else {
      return <div className={styles.container}>
        <i>There are no itemz in this list</i>
      </div>
    }
    return <div className={styles.container}>
      <h3 className={styles.title}>{this.props.title}</h3>
      <ListItems>{this.props.children}</ListItems>
    </div>
  }
}
