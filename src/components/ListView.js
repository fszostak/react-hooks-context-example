import React, { useContext } from 'react';

import { ListContext  } from './ListContext';

export default function ListView() {
  
  const { state, dispatch } = useContext(ListContext);

  return (
    <>
      <h3>
        ListView
      </h3>
      <ol>
        {state.map(item => {
          return (<li key={item.id}>
            {item.name}
            <button onClick={() => dispatch({type:'delete', id: item.id})}>
              Delete
            </button>
          </li>);
        })}
      </ol>
      <p>
        <button onClick={() => dispatch({type:'insert', name: 'New item from ListView'})}>
          New item  
        </button>
      </p>
    </>
  );
}