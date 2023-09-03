import './TodoCounter.css';

export const TodoCounter = (props) => {
  return (
    <h1 className="TodoCounter">
      Has completado <span>{props.completed}</span> de{' '}
      <span>{props.total}</span> TODOs
    </h1>
  );
};
