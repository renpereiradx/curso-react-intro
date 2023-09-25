import './TodoCounter.css';

function TodoCounter(props) {
  return (
    <h1 className='TodoCounter'>
      Has completado {props.completedTodos} de {props.totalTodos} TODOs
    </h1>
  );
}

export { TodoCounter };