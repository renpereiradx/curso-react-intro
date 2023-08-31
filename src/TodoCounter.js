import './TodoCounter.css';

export const TodoCounter = (props) => {
  return (
    <h1>
      Has completado {props.completed} de {props.total} TODOs
    </h1>
  );
};
