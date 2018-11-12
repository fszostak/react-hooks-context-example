import React, { useContext } from 'react';

import { ListContext  } from './ListContext';

export default function AddItemListView() {
  
  const { dispatch } = useContext(ListContext);

  return (
    <>
      <h3>
        AddItemListView
      </h3>
      <p>
        <button onClick={() => dispatch({type:'insert', name: 'New item from AddItemListView'})}>
          More one item  
        </button>
      </p>
    </>
  );
}