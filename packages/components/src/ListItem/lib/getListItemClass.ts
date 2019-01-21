import {ListItemStates} from '../ListItemStates';
import styles from '../styles.module.css';

export const itemClassFromState = (state: ListItemStates) => {
  switch(state){
    case ListItemStates.Dragging: return styles.listItem__dragging;
    default:
      return styles.listItem__default;
  }
}

const getListItemClass = (state: ListItemStates, draggableHandle: boolean = false) => {
  const itemClass = itemClassFromState(state);
  return draggableHandle ? itemClass+ " "+ styles.listItem__with_handle : itemClass
}

export default getListItemClass
