import React from 'react';

function FunctionComponent({ users, children }) {
  return (
    <div>
      <p>ime: {users.ime}</p>
      <p>godine: {users.godine}</p>
      {children}
    </div>
  );
}

export default FunctionComponent;
