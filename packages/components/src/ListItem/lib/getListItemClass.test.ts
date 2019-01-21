import getListItemClass from './getListItemClass';
import {itemClassFromState} from './getListItemClass';
import {ListItemStates} from '../ListItemStates';
import styles from '../styles.module.css';

describe('itemClassFromState', () => {
  it('returns the default if default is passed in', () => {
    expect(itemClassFromState(ListItemStates.Default)).toEqual(styles.listItem__default)
  });

  it('returns dragging if default is passed in', () => {
    expect(itemClassFromState(ListItemStates.Dragging)).toEqual(styles.listItem__dragging)
  });

  it('returns dragging if dragging is passed in', () => {
    expect(itemClassFromState(ListItemStates.Dragging)).toEqual(styles.listItem__dragging)
  });
});

describe('getListItemClass', () => {
  it('returns the itemClasFromState', () => {
    expect(getListItemClass(ListItemStates.Default)).toContain(styles.listItem__default)
  })

  it('returns the with_handle attribute', () => {
    expect(getListItemClass(ListItemStates.Default, true)).toContain(styles.listItem__with_handle)
    expect(getListItemClass(ListItemStates.Default)).not.toContain(styles.listItem__with_handle)
  })

  it('returns the without_handle attribute', () => {
    expect(getListItemClass(ListItemStates.Default)).toContain(styles.listItem__without_handle)
    expect(getListItemClass(ListItemStates.Default, true)).not.toContain(styles.listItem__without_handle)
  })
});
