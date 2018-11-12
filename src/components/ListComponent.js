import React from 'react';

import { ListContext } from './ListContext'
import { useReducerList } from './hooks/useReducerList';
import ListView from './ListView'
import AddItemListView from './AddItemListView'

export default function ListComponent(props) {
 
  const [state, dispatch] = useReducerList();

  return (
    <ListContext.Provider value={{ state, dispatch }}>
      <ListView />
      <AddItemListView />
    </ListContext.Provider>
  );
}