import React from 'react';

import TodoAppHeader from './TodoAppHeader';
import TodoAppBody from './TodoAppBody';

const TodoAppStyle = {
  width: '300px',
  margin: '0 auto',
  border: '1px solid black',
  padding: '10px',
};

export default function TodoApp({
  todos, title, onRemoveTodoItem, onInputChange, onInputSubmit,
}) {
  return (
    <div style={TodoAppStyle}>
      <TodoAppHeader
        title={title}
        onInputChange={onInputChange}
        onInputSubmit={onInputSubmit}
      />
      <TodoAppBody todos={todos} onRemoveTodoItem={onRemoveTodoItem} />
    </div>
  );
}