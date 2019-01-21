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
  if(draggableHandle){
    return itemClass+ " "+ styles.listItem__with_handle
  } 
  return itemClass+ " "+ styles.listItem__without_handle
}

export default getListItemClass
