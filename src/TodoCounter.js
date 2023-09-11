import './TodoCounter.css';

/* function TodoCounter({ totalTodos, completedTodos}) {
  return (
    <h1 className='TodoCounter'>
      Has completado {completedTodos} de {totalTodos} TODOs
    </h1>
  );
} */

function TodoCounter(props) {
  return (
    <h1 className='TodoCounter'>
      Has completado {props.completedTodos} de {props.totalTodos} TODOs
    </h1>
  );
}

export { TodoCounter };