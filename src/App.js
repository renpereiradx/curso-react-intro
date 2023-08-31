import React from 'react';
import { TodoCounter } from './TodoCounter';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButton';

const defaultTodos = [
  { text: 'Cortar cebolla', completed: true },
  { text: 'Tomar el curso de intro a React', completed: false },
  { text: 'Llorar con la llorona', completed: false },
  { text: 'Jugar Apex', completed: false },
];

function App() {
  return (
    <>
      <TodoCounter className="TodoCounter" total={16} completed={8} />
      <TodoSearch />

      <TodoList>
        {defaultTodos.map((todo) => {
          return (
            <TodoItem
              key={todo.text}
              text={todo.text}
              completed={todo.completed}
            />
          );
        })}
      </TodoList>
      <CreateTodoButton />
    </>
  );
}

export default App;
